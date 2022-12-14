import emailClient from '@emailjs/browser'

export type EmailParams = {
  name: string
  email: string
  subject: string
  message: string
}

export const sendEmail = async (emailParams: EmailParams) =>
  emailClient.send(
    process.env.NEXT_PUBLIC_EMAIL_CLIENT_SERVICE_ID ?? '',
    process.env.NEXT_PUBLIC_EMAIL_CLIENT_TEMPLATE_ID ?? '',
    emailParams,
    process.env.NEXT_PUBLIC_EMAIL_CLIENT_PUBLIC_KEY ?? '',
  )
