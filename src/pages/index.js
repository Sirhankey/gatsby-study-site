import * as React from "react";
import Layout from "../components/layout";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import BlogForm from "../components/blogForm";

// const IndexPage = () => {
//   return (
//     <Router>
//       <Layout>
//         <Switch>
//           <Route path="/posts">
//             <BlogForm />
//           </Route>
//           <Route path="/">
//             <BlogList />
//           </Route>
//         </Switch>
//       </Layout>
//     </Router>
//   );
// };
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
