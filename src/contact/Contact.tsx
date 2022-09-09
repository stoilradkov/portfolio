import { useEffect, useState } from 'react'
import { withError } from '../common/components/error/withError'
import Input from '../common/components/Input'
import Textarea from '../common/components/Textarea'
import { sendEmail as doSendEmail } from '../services/email'
import { ButtonState, Field, SubmitState } from './Contact.type'
import SendButton from './SendButton'

const Contact: React.FC = () => {
  const [name, setName] = useState<Field>({ value: '', error: null })
  const [email, setEmail] = useState<Field>({ value: '', error: null })
  const [subject, setSubject] = useState<Field>({ value: '', error: null })
  const [message, setMessage] = useState<Pick<Field, 'value'>>({ value: '' })
  const [submitState, setSubmitState] = useState<SubmitState>({
    buttonState: ButtonState.IDLE,
    error: null,
    success: null,
  })

  useEffect(() => {
    let id: NodeJS.Timeout | undefined
    if (submitState.success !== null) {
      id = setTimeout(() => {
        setSubmitState((submitState) => ({ ...submitState, success: null }))
      }, 2500)
    }

    return () => clearTimeout(id)
  }, [submitState.success])

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitState({
      buttonState: ButtonState.LOADING,
      success: null,
      error: null,
    })

    e.preventDefault()
    const validationFields = [
      {
        field: name,
        setError: () =>
          setName((name) => ({ ...name, error: 'Please specify a name' })),
      },
      {
        field: email,
        setError: () =>
          setEmail((email) => ({ ...email, error: 'Please specify an email' })),
      },
      {
        field: subject,
        setError: () =>
          setSubject((subject) => ({
            ...subject,
            error: 'Please specify a subject',
          })),
      },
    ]
    const fieldsWithErrors = validationFields.filter(
      ({ field: { value } }) => !value.trim(),
    )

    if (fieldsWithErrors.length !== 0) {
      fieldsWithErrors.forEach(({ setError }) => setError())
      setSubmitState((submitState) => ({
        ...submitState,
        buttonState: ButtonState.IDLE,
      }))
      return
    }
    sendEmail()
  }

  const sendEmail = async () => {
    try {
      await doSendEmail({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      })
      setSubmitState((submitState) => ({
        ...submitState,
        error: null,
        success: 'Your message has been sent successfully.',
      }))
    } catch (e) {
      console.log(e)
      setSubmitState((submitState) => ({
        ...submitState,
        error: 'Something went wrong',
        success: null,
      }))
    } finally {
      setSubmitState((submitState) => ({
        ...submitState,
        buttonState: ButtonState.IDLE,
      }))
    }
  }

  const resetErrors = () => {
    setName((name) => ({ ...name, error: null }))
    setEmail((email) => ({ ...email, error: null }))
    setSubject((subject) => ({ ...subject, error: null }))
    setSubmitState((submitState) => ({
      ...submitState,
      error: null,
      success: null,
    }))
  }

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    resetErrors()

    const value = e.target.value
    switch (e.target.name) {
      case 'name':
        setName((name) => ({ ...name, value }))
        break
      case 'email':
        setEmail((email) => ({ ...email, value }))
        break
      case 'subject':
        setSubject((subject) => ({ ...subject, value }))
        break
      case 'message':
        setMessage((message) => ({ ...message, value }))
        break
    }
  }

  const createMessage = (message: null | string, className: string) =>
    message ? <p className={className}>{message}</p> : null

  return (
    <section className="m-auto w-full md:w-3/4 lg:w-2/3 mb-6">
      <h2 className="text-5xl text-primary-main mb-10">Get in touch</h2>
      <form onSubmit={submitHandler}>
        <div
          aria-roledescription="Row input wrapper"
          className="flex flex-col sm:flex-row w-full sm:space-x-5 space-y-5 sm:space-y-0 mb-5"
        >
          {withError(
            <Input
              name="name"
              type="text"
              value={name.value}
              onChange={changeHandler}
              className="w-full"
              placeholder="Your name"
              aria-required={true}
            />,
            createMessage(name.error, 'text-red-500'),
            'w-full sm:w-1/2',
          )}
          {withError(
            <Input
              name="email"
              type="email"
              value={email.value}
              onChange={changeHandler}
              className="w-full"
              placeholder="Your email"
              aria-required={true}
            />,
            createMessage(email.error, 'text-red-500'),
            'w-full sm:w-1/2',
          )}
        </div>
        {withError(
          <Input
            name="subject"
            type="text"
            value={subject.value}
            onChange={changeHandler}
            className="w-full"
            placeholder="Your subject"
            aria-required={true}
          />,
          createMessage(subject.error, 'text-red-500'),
          'mb-5',
        )}
        <Textarea
          name="message"
          value={message.value}
          onChange={changeHandler}
          className="w-full mb-5 h-52"
          placeholder="Your message"
        />
        <SendButton
          isLoading={submitState.buttonState === ButtonState.LOADING}
        />
        {createMessage(submitState.error, 'text-red-500')}
        {createMessage(submitState.success, 'text-primary-main')}
      </form>
    </section>
  )
}

export default Contact
