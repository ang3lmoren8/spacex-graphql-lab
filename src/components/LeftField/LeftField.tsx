import './LeftField.css'

const LeftField = ({ fieldName }: { fieldName: string }) => {
  return (
    <p className='left-field'>
      Field <code className='left-field__code'>{fieldName}</code> left
    </p>
  )
}

export default LeftField
