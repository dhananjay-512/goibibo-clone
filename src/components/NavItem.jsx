import React from 'react'

const NavItem = ({ name, icon }) => {
  return (
    <div style={{
      padding: '1%', margin: "1%", display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>{
        icon && icon
      }{name}</div>
  )
}

export default NavItem