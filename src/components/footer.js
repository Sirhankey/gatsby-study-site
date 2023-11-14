import React from "react"

export default function Footer(props) {
  return (
    <p className="grid-area:footer bg-teal-300 p-10 text-gray-700 text-center">
      © {props.copyrightYear} Estudos de Gatsby. Todos os direitos reservados.
    </p>
  )
}
