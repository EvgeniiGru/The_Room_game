module.exports = {
  plugins: [
     [
         'autoprefixer',
         {
          browsers: [
              'last 1 version'
          ]
         }
      ],
      'postcss-conditionals',
      'postcss-nested',
      'postcss-import',
      'postcss-clearfix',
      'postcss-extend',
      'postcss-hexrgba',
      'postcss-media-minmax',
      'postcss-sassy-mixins',
      'postcss-simple-vars',
      'postcss-size',
  ]
};
