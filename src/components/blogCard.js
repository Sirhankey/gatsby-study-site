import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './blogCard.css';

const BlogCard = ({ title, category, technology, framework, date, slug, imageSrc }) => {
    const getCategoryClass = () => {
        if (category === 'Language') {
            return 'bg-blue-500 text-white';
        } else if (category === 'Framework') {
            return 'bg-green-500 text-white';
        }
        return '';
    };

    return (
        // <div className={`blog-card ${getCategoryClass()} rounded-lg overflow-hidden flex flex-col`}>

        //     {/* Imagem no topo do card */}
        //     <div className="self-center h-40 bg-cover bg-center">
        //         <img className="p-3 w-full h-full object-cover" src={imageSrc} alt={title} />
        //     </div>

        //     {/* Informações abaixo da imagem */}
        //     <div className="p-4">
        //         <h2 className="text-xl font-semibold text-white">{title}</h2>
        //         <p className="text-white">
        //             <strong>Category:</strong> {category}
        //         </p>
        //         {technology && <p className="text-white"><strong>Technology:</strong> {technology}</p>}
        //         {framework && <p className="text-white"><strong>Framework:</strong> {framework}</p>}
        //         <p className="text-white"><strong>Date:</strong> {date}</p>
        //         <Link to={`/blog/${slug}`} className="text-red-600 hover:underline">
        //             Read more
        //         </Link>
        //     </div>
        // </div>
        <div className='card'>
            <div className='image-container'>
                <img src={imageSrc} alt={title} />
            </div>
            <div className='card-content'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-date'>{date}</p>
                <p className='card-category'>{category}</p>
                <p className='card-technology'>{technology}</p>
                <p className='card-framework'>{framework}</p>
                <Link to={`/blog/${slug}`} className='card-link'>
                    Read more
                </Link>
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
