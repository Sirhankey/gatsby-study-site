import React, { useState } from 'react';
import slugify from 'slugify';
// import { graphql, useStaticQuery } from 'gatsby';
// import path from 'path';
// import fs from 'fs/promises';

const BlogForm = () => {
    //     const data = useStaticQuery(graphql`
    //     query {
    //       site {
    //         siteMetadata {
    //           siteUrl
    //         }
    //       }
    //     }
    //   `);

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        technology: '',
        file_input: null,
        message: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === 'file' ? files[0] : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (formData.file_input) {
        //     const fileName = `image-${Date.now()}${path.extname(formData.file_input.name)}`;
        //     const imagePath = path.join('src/blog/images', fileName);

        //     const publicImagePath = path.join('public', 'blog', 'images', fileName);

        //     await fs.rename(formData.file_input.path, publicImagePath);

        //     setFormData((prevData) => ({
        //         ...prevData,
        //         file_input: `${data.site.siteMetadata.siteUrl}/blog/images/${fileName}`,
        //     }));
        // }

        const currentDate = new Date().toISOString().split('T')[0];
        const slug = slugify(formData.title, { lower: true });

        alert(JSON.stringify(formData, null, 2));

        const fileContent = `---
title: "${formData.title}"
category: "${formData.category}"
technology: "${formData.technology}"
date: "${currentDate}"
slug: "${slug}"
imageSrc: "${formData.file_input}"
---

${formData.message}
`;

alert(fileContent);

        const fileName = `post-${Date.now()}.md`;
        // const filePath = path.join('src/blog', fileName);
        // await fs.writeFile(filePath, fileContent);

        setFormData({
            title: '',
            category: '',
            technology: '',
            file_input: null,
            message: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>

            <div class="mb-5 mt-5">
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required />
            </div>
            <div class="mb-5">
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required />
            </div>
            <div class="mb-5">
                <label for="technology" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tecnologia</label>
                <input
                    type="text"
                    id="technology"
                    name="technology"
                    value={formData.technology}
                    onChange={handleChange}
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required />
            </div>

            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Carregue uma imagem</label>
            <input
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                name="file_input"
                value={formData.file_input}
                onChange={handleChange}
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 
                focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"/>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

            <form class="max-w-sm mx-auto">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assunto:</label>
                <textarea
                    id="message"
                    rows="4"
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
                focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escreva aqui o artigo..."
                    required></textarea>
            </form>
            <button type="submit" class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Enviar</button>
        </form>
    );
};

export default BlogForm;
