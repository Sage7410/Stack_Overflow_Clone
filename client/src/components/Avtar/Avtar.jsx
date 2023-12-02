import React from 'react'

const Avtar = ({ childern, backgroundColor, px, py, color, borderRadius, fontSize, cursor}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none"
  }
  return (
    <div style={style}>
      {childern}
    </div>
  )
}

export default Avtar