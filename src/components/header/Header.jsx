import React from "react";
import './Header.css'

export default function Header({ text, type, tColor, bgColor, align }) {
  const headerClasses = `text-color--${tColor} bg-color--${bgColor} align-${align}`
  return (
    <>
      {React.createElement(type, { className: headerClasses }, text)}
    </>
  )
}