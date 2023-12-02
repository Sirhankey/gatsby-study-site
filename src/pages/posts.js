import * as React from "react";
import Layout from "../components/layout";
import BlogForm from "../components/blogForm";

const IndexPage = () => {
  return (
    <Layout>
      <BlogForm /> 
    </Layout>
  );
};


export default IndexPage;

export const Head = () => <title>Crie seu Post</title>;
