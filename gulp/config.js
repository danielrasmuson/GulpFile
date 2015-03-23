var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  sass: {
    src: src + "/sass/**.{sass,scss}",
    dest: dest+"/css",
    settings: {
      indentedSyntax: false, // Enable .sass syntax!
      imagePath: '/images' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  markup: {
    src: src + "/**/**.html",
    dest: dest
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/page.js',
      dest: dest+'/javascript',
      outputName: 'page.js',
      // list of externally available modules to exclude from the bundle
      external: []
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
