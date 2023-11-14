import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

const BlogCard = ({ slug, imageSrc }) => {
  // UseStaticQuery hook para buscar dados do Markdown
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              category
              technology
              framework
              date
              slug
            }
            excerpt
          }
        }
      }
    }
  `);

  // Encontre o post correspondente ao slug
  const post = data.allMarkdownRemark.edges.find(edge => edge.node.frontmatter.slug === slug);

  return (
    <div className={`blog-card bg-white rounded-lg overflow-hidden flex flex-col shadow-lg`}>
      <div className="h-40 bg-cover bg-center">
        <img className="p-3 w-full h-full object-cover" src={imageSrc} alt={post.node.frontmatter.title} />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{post.node.frontmatter.title}</h2>
        <p className="text-gray-600">
          <strong>Category:</strong> {post.node.frontmatter.category}
        </p>
        {post.node.frontmatter.technology && (
          <p className="text-gray-600">
            <strong>Technology:</strong> {post.node.frontmatter.technology}
          </p>
        )}
        {post.node.frontmatter.framework && (
          <p className="text-gray-600">
            <strong>Framework:</strong> {post.node.frontmatter.framework}
          </p>
        )}
        <p className="text-gray-600">
          <strong>Date:</strong> {post.node.frontmatter.date}
        </p>
        <Link to={`/blog/${post.node.frontmatter.slug}`} className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  slug: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default BlogCard;
