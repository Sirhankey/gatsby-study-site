import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './blogCard.css';

const getCategoryClass = (category) => {
  if (category === 'Language') {
    return 'bg-blue-500 text-white';
  } else if (category === 'Framework') {
    return 'bg-green-500 text-white';
  } else if (category === 'Technology') {
    return 'bg-yellow-500 text-white';
  }
  return '';
};

const BlogCard = ({ title, category, technology, framework, date, slug, imageSrc }) => {
  return (
    <div className='card'>
      <div className='image-container'>
        <img src={imageSrc} alt={title} />
      </div>
      <div className='card-content'>
        <div className='card-content-title'>
          <h2 className='card-title'>{title}</h2>
          <p className='card-date'>{date}</p>
        </div>
        <hr />
        <div className='card-content-info'>
          <p className={`card-category ${getCategoryClass(category)}`}>{category}</p>
          <p className='card-technology'>{technology}</p>
        </div>
        <div className='card-content-link'>
          <div className='card-link-container'>
            <Link to={`/blog/${slug}`} className='card-link button'>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  technology: PropTypes.string,
  framework: PropTypes.string,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default BlogCard;
