const limit = 100;
const answer = Math.floor(limit / 2);
// 11/01
// 003. 배열의 선언과 할당
const fruits = ["사과", "바나나", "파인애플"];
// 004. 배열의 기능
const newFruits = [];

let nFruits = fruits[fruits.length - 1];

newFruit.push(nFruits);

//배열의 길이가 길면 인덱스를 구하기 어렵기에 인덱스는 0부터시작,
//길이는 1부터 시작하므로 전체길이에서 1을 뺀인덱스를 구하면
//마지막 요소가 됨
// 005. 배열의 기능
let students = ["철수", "영희", "훈이", "짱구", "유리"];

let newStu = [];
newStu = students.slice(0, 2);

// 006. 배열의 기능

//let fruits = ["사과", "바나나"]
//undefined
//'맛있는 '+fruits[0]
//'맛있는 사과'
//for(let i = 0;i<fruits.length;i++){
//  '맛있는 '+fruits[i]

//}
//'맛있는 바나나'
//console.log(fruits)
//VM414:1 (2) ['사과', '바나나']

// 008. 객체의 선언과 할당

const student = {};
student.name = "철수";

//student['name'] ='철수';
//const student = {name : '철수'}

// 009. 객체의 키&값 추가
const student = {
  name: "철수",
  age: 8,
};

const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};
student.school = school;
//여기서의 .school은 키이름. 다른 이름으로 해도 무방하나 여기서는 결과와 같게  만들어야하기에 school사용

// 11/02
// 018. 조건문 연습
function boolean(input1, input2) {
  // if (input1 === true || input2 === true) {
  //  return true;
  // } else {
  //  return false;
  // }
  if (input1 || input2) {
    return "true";
  } else if (!input1 && !input2) {
    return "false";
  }
}
// 019. 홀짝

function evenOdd(num) {
  if (num === 0) {
    return "Zero"; //예외처리를 먼저 할 것
  } else if (num % 2 === 0) {
    return "Even";
    // } else if(num%1 !==0){
    //   return "Odd"
    // }
  } else {
    return "Odd";
  }
}

// 020. 온도

function temperature(num) {
  if (num >= 24) {
    return "조금 덥습니다";
  } else if (num >= 19) {
    return "날씨가 좋네요";
  } else if (num <= 18) {
    return "조금 춥네요";
  }
}

// 021. 며칠
function days(month) {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    return 31;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 28;
  }
}
//객체로 푸는 법
const monthList = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
function days(month) {
  return monthList[month];
}
// 1월 : 31일
// 2월 : 28일
// 3월 : 31일
// 4월 : 30일
// 5월 : 31일
// 6월 : 30일
// 7월 : 31일
// 8월 : 31일
// 9월 : 30일
// 10월 : 31일
// 11월 : 30일
// 12월 : 31일

//11/03

//023. 숫자 더하기

function sum(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count += i;
  }
  return count;
}
//024. 특정 문자열 세기
function countLetter(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A" || str[i] === "a") {
      count++;
    }
  }
  return count;
}
//또는 전부 소문자로 바꾸어 소문자 a만 찾을수 있게 하는 방법
function countLetter(str) {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count++;
    }
  }
  return count;
}

//025. 문자열 삽입** 다시풀이해보기
function makeNumber(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += i;

    if (i !== num) {
      str += "-"; //i의값이 num과 동일하지 않을경우에만 "-"추가
    }
  }
  return str;
}

//026. 홀수 문자열

function makeOdd(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      str += i;
    }
  }
  return str;
}

//027. 가장 큰 수 찾기**다시
function bigNum(str) {
  // console.log(Math.max(1,1,3,5,8,9,11))//Math.max사용
  // console.log(Math.max(...[1,1,3,5,8,9,11]))배열로 Math.max를 하면 NaN값이 나옴. 따라서 스프레드 연산자(...) 사용해야함
  let biggest = 0;
  //   let biggest = Number(str[0])//초기에 인덱스 값으로 넣어주는 법
  for (let i = 0; i <= str.length; i++) {
    if (Number(str[i]) > biggest) {
      biggest = Number(str[i]);
    }
  }
  return biggest;
}
