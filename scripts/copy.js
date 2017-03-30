module.exports = {
  copyFontawesomeFonts: {
    src: ['{{ROOT}}/node_modules/font-awesome/fonts/**/*'],
    dest: '{{WWW}}/assets/font-awesome/fonts'
  },
  copyFontawesomeCss: {
    src: ['{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css'],
    dest: '{{WWW}}/assets/font-awesome/css'
  }
};
