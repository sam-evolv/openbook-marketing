module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source:
          '/:slug((?!features|pricing|faq|blog|cookies|dpa|privacy|terms|api|_next|static|assets|images|fonts|favicon|robots|sitemap).+)',
        destination: 'https://app.openbook.ie/business/:slug',
        permanent: false,
        has: [
          {
            type: 'host',
            value: '(www\\.)?openbook\\.ie',
          },
        ],
      },
    ];
  },
};
