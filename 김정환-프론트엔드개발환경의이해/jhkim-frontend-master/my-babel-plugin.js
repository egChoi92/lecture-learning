module.exports = function myBabelPlugin() {
  return {
    visitor: {
      /* 바벨 플러그인 동작 예제
      Identifier(path) {
        const name = path.node.name;
        console.log('Identifier() name:', name)
        path.node.name = name.split("").reverse().join("");
      },
      */
      
      // const => var 변환 예제
      VariableDeclaration(path) {
        console.log('VariableDeclaration(path) kind :', path.node.kind);

        if (path.node.kind === 'const') {
          path.node.kind = 'var'            
        }
      }
    }
  }
}