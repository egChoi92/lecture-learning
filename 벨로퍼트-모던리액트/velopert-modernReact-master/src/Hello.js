import React, { Component } from "react";

// 클래스형 컴포넌트
class Hello extends Component {
  static defaultProps = {
    name: "이름 없음"
  }
  render() {
    const { color, name, isSpecial} = this.props;
    return (
      <div style={{color}} alt={color}>
        {isSpecial && <b>*</b>}
        안녕하세요 - {name}
      </div>
    )

  }
}

// // 함수형 컴포넌트
// function Hello({ color, name, isSpecial}) {
//   return (
//     <div style={{ color }}>
//       {isSpecial && <b>*</b>}
//       안녕하세요 - {name}
//     </div>
//   )
// }

// Hello.defaultProps = {
//   name: "이름 없음"
// };

export default Hello;