import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0
  //   }
  // }
  // 위와 같은 코드를 class-properties 문법으로 사용하면
  state = {
    counter: 0,
    fixed: 1
  } 

  // // this=undefined 해결방법1 : 클래스의 생성자 메서드 constructor 에서 bind 작업
  // constructor(props) {
  //   super(props);
  //   this.handleIncrease = this.handleIncrease.bind(this)
  //   this.handleDecrease = this.handleDecrease.bind(this)
  // }

  // this=undefined 해결방법2 : 커스텀 메서드를 선언 할 때 화살표 함수 문법을 사용
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter+1
    })
  }
  handleDecrease(){
    // 함수형 업데이트는 한 함수에서 setState 를 여러번에 걸쳐서 해야 되는 경우에 사용
    this.setState(state => ({
      counter: state.counter-1
    }))
    this.setState(state => ({
      counter: state.counter-1 
    }))
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        
        <button onClick={this.handleIncrease}>+1</button>
        {/* this=undefined 해결방법3 : onClick 에서 새로운 함수를 만들어서 전달 */}
        <button onClick={() => this.handleDecrease()}>-1</button>    
        <p>고정 값 : {this.state.fixed}</p>
      </div>     
    )
  }
}

// 함수형 컴포넌트 + 리듀서
// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;  
//     default:
//       throw new Error ("Unhandled Action");
//   }  
// }

// function Counter() {
//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     dispatch({ type: "INCREMENT"})
//   };

//   const onDecrease = () => {
//     dispatch({ type: "DECREMENT"})
//   };

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

export default Counter;