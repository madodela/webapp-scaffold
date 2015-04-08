var temp = "./.temp",
  src = './src',
  prod = './dist';

module.exports = {

  prod: {
    source: temp,
    dest: prod
  },

  styles: {
    src: src + "/**/*.{sass,scss}",
    dest: dest ,
    settings: {
      // Required if you want to use SASS syntax
      // See https://github.com/dlmanning/gulp-sass/issues/81
      sourceComments: 'map',
      imagePath: '/assets' // Used by the image-url helper
    }
  },

  templates: {
    src: src + "/scripts/*.html",
  },

  index: {
    src: src + "/index.html",
    dest: dest
  },

  browserify: {
     // Enable source maps
    debug: false,
    // Additional file extentions to make optional
    extensions: ['.js'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/scripts/main.js',
      dest: dest + '/scripts',
      outputName: 'main.js'
    }]
  },

  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },

  assets: {
    src: src + "/assets/**",
    dest: dest + "/assets"
  },
};
