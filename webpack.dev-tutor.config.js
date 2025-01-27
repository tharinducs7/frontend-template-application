module.exports = {
  // other configurations...
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: ['apps.local.openedx.io'], // Add this line
    hot: true,
    open: false,
  },
  resolve: {
    fallback: {
        'react/jsx-runtime': 'react/jsx-runtime.js',
        'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
    },
},
};
