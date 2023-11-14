import * as React from "react";
import Layout from "../components/layout";
import BlogList from "../components/blogList";  // Ajuste o caminho conforme necessário

const IndexPage = () => {
  return (
    <Layout>
      <BlogList />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Início</title>;
