import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogCard from './blogCard';
import { mockBlogData } from '../mocks/mockCards';

const BlogList = () => {
    const uniqueCategories = [...new Set(mockBlogData.map(blog => blog.category))];

    return (
        <div className="d-flex container blog-list">
            {uniqueCategories.map((category) => (
                <div key={category} className="category-section gap-3 m-4">
                    {/* <h2 className="text-2xl font-bold mb-4">{category}</h2> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {mockBlogData
                            .filter(blog => blog.category === category)
                            .map((blog) => (
                                <BlogCard
                                    key={blog.slug}
                                    title={blog.title}
                                    category={blog.category}
                                    technology={blog.technology}
                                    framework={blog.framework}
                                    date={blog.date}
                                    imageSrc={blog.imageSrc}
                                    slug={blog.slug}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
