import { Component } from "react";
import Router from "next/router";

// interface IPrevState{
//   count: number
// }
export default class ClassCounterPage extends Component {
  // 클래스형 컴포넌트 만들기
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행"); // 인풋창 커서 깜빡임
    // 페이지 권한확인
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount() {
    console.log("사라질때 실행");
    // 채팅방 나가기를 예시로 ==> 나가기버튼 클릭 ==> 채팅방 인원줄어들기,나간사람 출력.
    // 유저가 다른 메뉴등을 클릭해 나가는  경우도 생각해 그 컴포넌트
    // (체팅방 나가기)가 사라지기 전에 실행됨.
  }

  onClickCountUp() {
    // 스테이트 올리기. setState는 Component안에 존재!
    this.setState((prev: { count: number }) => ({
      // prev사용방법
      // this.setState((prevState: IPrevState) => ({ // 위와 동일. 왼쪽이 실제 변수 오른쪽이 타입
      // 카운트 증가
      count: prev.count + 1, //  prevState 이기에 state통채로 넘어옴 prev라고 써도 됨. 그냥 이름일뿐임...
    }));

    // state.count가져오기 화살표 함수로 만드는 방법
    // onClickCountUp=() =>{
    //     // 스테이트 올리기. setState는 Component안에 존재!
    //     this.setState({
    //       count: 1,
    //     });
  }

  onClickMove() {
    void Router.push("/");
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp.bind(this)}>
          {/* state.count가져오기  .bind(this)사용법 */}
          카운트 올리기!!
        </button>
        <button onClick={this.onClickMove}>나가기</button>
      </>
    );
  }
}
