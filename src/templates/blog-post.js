import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className='p-3 gap-4'>
        <div className='title bg-gray-800 text-black p-4 rounded-md'>
          <strong>
          <h2 className='text-3xl font-bold'>{post.title}</h2>
          </strong>
          <p className='text-sm'>
            <strong>Category:</strong> {post.category}
          </p>
          <p className='text-sm'>
            <strong>Technology:</strong> {post.technology}
          </p>
          <p className='text-sm'>
            <strong>Date:</strong> {post.date}
          </p>
        </div>
        <div className='image-container mt-4' style={{ textAlign: 'center' }}>
          <img
            src={post.imageSrc}
            alt={post.title}
            className='max-w-full max-h-400px mx-auto rounded-md shadow-md'
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div
          className='mt-4 prose'
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        technology
        date(formatString: "MMMM DD, YYYY")
        imageSrc
      }
      html
    }
  }
`;

export default BlogPostTemplate;
