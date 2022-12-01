// 1. 함수를 리턴하는 함수
// function aaa(){
//     const apple = 10
// return function bbb(){
//     const banana = 20
//     console.log(banana)
//     console.log(apple)
// }
// }

// aaa()
// ƒ bbb(){
//     const banana = 20
//     console.log(banana)
//     console.log(apple)
// }
// aaa()()

// 2. 함수를 리턴하는 함수 - 인자넣어주기
// function aaa(apple){

//     return function 이름은상관없음(banana){

//         console.log(banana)
//         console.log(apple)
//     }
// }

// aaa(10)(20)

// 3. 함수를 리턴하는 함수 -  화살표 함수로 바꾸기

// const bbb = (apple) => (banana) => {
//   console.log(banana);
//   console.log(apple);
// };

// bbb(10)(20);

// 4. 함수를 리턴하는 함수 - 3개
// const bbb = (apple) => (banana) => (tomato) => {
//   console.log(banana);
//   console.log(apple);
//   console.log(tomato);
// };

// bbb(10)(20)(30);
