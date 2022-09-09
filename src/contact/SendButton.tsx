import Button from '../common/components/Button'

export interface Props {
  isLoading: boolean
}

const SendButton: React.FC<Props> = ({ isLoading }) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={isLoading ? 'bg-emerald-300' : ''}
    >
      {isLoading ? 'Sending...' : 'Send message'}
    </Button>
  )
}

export default SendButton
