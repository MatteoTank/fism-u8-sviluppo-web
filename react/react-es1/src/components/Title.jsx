function Title (props) {
  const { main, sub } = props

  return (
    <>
      <h1>{main}</h1>
      <h2>{sub}</h2>
    </>
  )
}

export default Title