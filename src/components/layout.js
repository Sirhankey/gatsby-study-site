import React from "react"
import "./layout.css"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <div className="flex flex-col min-h-screen">
            <Header title={data.site.siteMetadata.title} />
            <div className="flex-1">
                <main className="justify-items-center layout w-full grid bg-gray-500">
                    {children}
                </main>
            </div>
            <Footer copyrightYear="2023" />
        </div>
    )
}
