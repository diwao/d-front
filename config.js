module.exports = {
  // for developement
  src: './app/src',
  // for production
  dest: './app/dist',
  // pug
  pug: {
    src: '/pug/**/*.pug',
    exclude: '/pug/**/_*.pug',
    dest: '/',
  },
  // sass
  sass: {
    src: '/scss/**/*.scss',
    dest: '/assets/css/',
  },
  // typescript
  script: {
    src: '/ts/**/*.ts',
    dest: '/assets/js/',
  },
  // htmlhint
  htmlhint: {
    src: ['/**/*.html'],
  },
};
