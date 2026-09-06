import React from "react"

interface iBoxProps extends React.ComponentProps<'div'> {
  titleBox: string,
  subTitleBox: string,
  textBox: string,
  colorTitle: string,
  classname?: string,
}

function Box({titleBox, subTitleBox, textBox, colorTitle, classname='box', ...rest} : iBoxProps) {
  return (
    <div className={classname} {...rest}>
      <h2 style={{ color: colorTitle }}>{titleBox}</h2>
      <h4>{subTitleBox}</h4>
      <p>{textBox}</p>
    </div>
  )
}

export default Box