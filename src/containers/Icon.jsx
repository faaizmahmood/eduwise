

// eslint-disable-next-line react/prop-types
const Icon = ({icon}) => {
  return (
    <>
        <img src={`../../public/icons/${icon}.png`} alt={icon}/>
    </>
  )
}

export default Icon