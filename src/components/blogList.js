import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogCard from './blogCard';

const BlogList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            category
            technology
            framework
            date(formatString: "YYYY-MM-DD")
            slug
            imageSrc
          }
        }
      }
    }
  `);

  const blogData = data.allMarkdownRemark.nodes;

//   const uniqueCategories = [...new Set(blogData.map(blog => blog.frontmatter.category))];

  return (
    <div className="d-flex container blog-list mt-5 mb-5">
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.frontmatter.slug}
            title={blog.frontmatter.title}
            category={blog.frontmatter.category}
            technology={blog.frontmatter.technology}
            framework={blog.frontmatter.framework}
            date={blog.frontmatter.date}
            imageSrc={blog.frontmatter.imageSrc}
            slug={blog.frontmatter.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
