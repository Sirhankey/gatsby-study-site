module.exports = {
  siteMetadata: {
    title: `gatsby study site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
  developMiddleware: app => {
    app.post('/posts', (req, res) => {

      res.status(200).json({
        message: 'Requisição POST em /posts foi recebida com sucesso',
        statusCode: 200,
      });

      res.status(500).json({
        message: 'Ocorreu um erro ao processar a requisição POST em /posts',
        statusCode: 500,
      });

      res.status(200).json({ message: 'Requisição POST em /posts foi recebida com sucesso' });
    });
  },
};
