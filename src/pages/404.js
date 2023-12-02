import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Oh no! Page not found 🙈</h1>
      <p style={paragraphStyles}>
        Oopsie! Looks like you took a wrong turn or the page is having a siesta. 🌴
        <br />
        {process.env.NODE_ENV === "development" && (
          <>
            <br />
            Pro tip: Try creating a page in{" "}
            <code style={codeStyles}>src/pages/</code>. It's like magic!
            <br />
          </>
        )}
        <br />
        <Link to="/">Take me home, country roads</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
