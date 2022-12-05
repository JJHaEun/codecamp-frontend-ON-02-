// 1.문자, 숫자 , 불린 (primitive)타입

import { useState } from "react";

//                                                              : 여기는 리턴타입
const getPrimetive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result = getPrimetive("철수", 123, true);

// 2. any 타입 => 그냥자바스크립트랑 같음

const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 1000); //  any는 아무거나 다 됨 에러아님
  return [arg3, arg2, arg1];
};
const result = getAny("철수", 123, true);

// 3. unknown 타입: 아무거나 안됨. 사용할때 타입가정해주고 사용해야함

const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 1000); // 쓰려면 뭔지 정해놓고 사용해야함// 따라서 any보다는 안전
  return [arg3, arg2, arg1];
};
const result = getUnknown("철수", 123, true);

// 4. getGeneric 타입 - 1단계
// 타입을 마음대로 만듬.
// 꺽쇠로<> 안에서 어떤타입을 쓸건지 정의해주어야함
// 뭘 넣을지는 상관없으나 일단 한번 뭔가가 들어가게되면 그 타입이 유지됨
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const result = getGeneric("철수", 123, true); // 타입추론됨
const result = getGeneric<number, number, boolean>("철수", 123, true); // 타입명시

const [count, setCount] = useState(0); // 타입추론
const [state, setState] = useState<number>("철수"); // 타입명시

// 4. getGeneric 타입 - 2단계
// 타입을 마음대로 만듬.// 어차피 변수기에 이름 상관없음
// 꺽쇠로<> 안에서 어떤타입을 쓸건지 정의해주어야함
// 뭘 넣을지는 상관없으나 일단 한번 뭔가가 들어가게되면 그 타입이 유지됨
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result = getGeneric2("철수", 123, true); // 타입추론됨

// 4. getGeneric 타입 - 3단계
// 타입을 마음대로 만듬.// 어차피 변수기에 이름 상관없음
// 꺽쇠로<> 안에서 어떤타입을 쓸건지 정의해주어야함
// 뭘 넣을지는 상관없으나 일단 한번 뭔가가 들어가게되면 그 타입이 유지됨
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result = getGeneric3("철수", 123, true); // 타입추론됨

//  4. getGeneric 타입 -4 // 화살표 함수에서 사용하기
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result = getGeneric4("철수", 123, true); // 타입추론됨
