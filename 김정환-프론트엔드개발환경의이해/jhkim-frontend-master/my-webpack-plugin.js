class MyWebpackPlugin {
  apply(compiler) {
    /* 플러그인 작업이 완료되는(done) 시점에 로그를 찍는 코드
    compiler.hooks.done.tap('My Plugin', stats => {
       console.log('MyPlugin: done');
    })
    */

    /* compiler.plugin() 함수로 후처리한다
    compiler.plugin('emit', (compilation, callback) => {
      const source = compilation.assets['main.js'].source();
      console.log(source);
      callback();
    })
    */

    compiler.plugin('emit', (compilation, callback) => {
      const source = compilation.assets['main.js'].source();
      compilation.assets['main.js'].source = () => {
        const banner = [
          '/**',
          ' * 이것은 BannerPlugin이 처리한 결과입니다.',
          ' * Build Datea : '+ new Date(),
          '*/'
        ].join('\n');
        return banner + '\n' + source;
      }
      callback();
    })


  }
}

module.exports = MyWebpackPlugin;