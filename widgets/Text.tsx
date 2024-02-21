
const Text = ({text,textStyles}:any) => {
  return (
    <p className={`text-dark_text font-light text-sm  ${textStyles}`} >{text}</p>
  )
}

export default Text