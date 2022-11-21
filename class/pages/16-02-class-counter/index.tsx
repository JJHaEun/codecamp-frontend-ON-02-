import { Component } from "react";

export default class ClassCounterPage extends Component {
  // 클래스형 컴포넌트 만들기
  state = {
    count: 0,
  };

  onClickCountUp() {
    // 스테이트 올리기. setState는 Component안에 존재!
    this.setState({
      // 카운트 증가
      count: 1,
    });
    // onClickCountUp=() =>{
    //     // 스테이트 올리기. setState는 Component안에 존재!
    //     this.setState({
    //       count: 1,
    //     });// state.count가져오기 화살표 함수로 만드는 방법
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp.bind(this)}>
          {/* state.count가져오기  .bind(this)사용법 */}
          카운트 올리기!!
        </button>
      </>
    );
  }
}
