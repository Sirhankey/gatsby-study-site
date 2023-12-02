import * as React from "react";
import Layout from "../components/layout";
import ContactPage from "../components/contactForm";

const IndexPage = () => {
  return (
    <Layout>
        <ContactPage />
    </Layout>
  );
};


export default IndexPage;

export const Head = () => <title>Contact</title>;
