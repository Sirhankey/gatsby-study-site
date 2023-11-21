import React, { useState } from 'react';

const BlogForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        technology: '',
        date: '',
        imageSrc: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            title: '',
            category: '',
            technology: '',
            date: '',
            imageSrc: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <br />
            <label>
                Category:
                <input type="text" name="category" value={formData.category} onChange={handleChange} />
            </label>
            <br />
            <label>
                Technology:
                <input type="text" name="technology" value={formData.technology} onChange={handleChange} />
            </label>
            <br />
            <label>
                Date:
                <input type="text" name="date" value={formData.date} onChange={handleChange} />
            </label>
            <br />
            <label>
                Image Source:
                <input type="text" name="imageSrc" value={formData.imageSrc} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default BlogForm;
