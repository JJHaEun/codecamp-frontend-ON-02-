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
  // console.log(Math.max(1,1,3,5,8,9,11))//Math.max사용하여 구하는 방법
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

//11/04

//41. 조건문 실전 적용 - 점수에 따른 등급
function grade(score) {
  if (score < 0 || score > 100) {
    return "잘못된 점수입니다";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
function grade(score) {
  //return 이면 종료되기에 꼭 else if 사용하지 않아도 됨.
  if (score < 0 || score > 100) {
    return "잘못된 점수입니다";
  }
  let result = "";
  if (score >= 90) {
    result = "A";
  } else if (score >= 80) {
    result = "B";
  } else if (score >= 70) {
    result = "C";
  } else if (score >= 60) {
    result = "D";
  } else {
    result = "F";
  }
  return result;
}

//043. 마이페이지***다시... 어렵...
const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];

//"0~2"  ⇒ Bronze

//"3~4" ⇒ Silver

//5이상 ⇒ Gold
function myPage() {
  let count = 0; //구매한횟수 담음
  let amount = 0; //구매한 총 금액
  let grade = ""; //등급

  for (let i = 0; i < myShopping.length; i++) {
    if (myShopping[i].category === "의류") {
      count++;
      amount += myShopping[i].price;
    }
  }

  if (count >= 5) {
    grade = "Gold";
  } else if (count >= 3) {
    grade = "Sliver";
  } else if (count >= 0) {
    grade = "Bronze";
  }

  // return "의류를 구매한 횟수는 총 "+count+"회 금액은 "+amount+"원이며 등급은 "+grade+"입니다"
  return `의류를 구매한 횟수응 총 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다`;
}
myPage();

//다른 것들도 받아오는 법
const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];

//"0~2"  ⇒ Bronze

//"3~4" ⇒ Silver

//5이상 ⇒ Gold
function myPage(category) {
  let count = 0; //구매한횟수 담음
  let amount = 0; //구매한 총 금액
  let grade = ""; //등급

  for (let i = 0; i < myShopping.length; i++) {
    if (myShopping[i].category === category) {
      count++;
      amount += myShopping[i].price;
    }
  }

  if (count >= 5) {
    grade = "Gold";
  } else if (count >= 3) {
    grade = "Sliver";
  } else if (count >= 0) {
    grade = "Bronze";
  }

  // return "의류를 구매한 횟수는 총 "+count+"회 금액은 "+amount+"원이며 등급은 "+grade+"입니다"
  return `${category}을 구매한 횟수응 총 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다`;
}
myPage("장난감");

//  프로그래머스 문제
//11/07
//문자열을 정수로 바꾸기
function solution(s) {
  var answer = parseInt(s);
  return answer;
}

//다른풀이
function solution(s) {
  s = Number(s);
  return s;
}

//같은 숫자는 싫어
function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

  return answer;
}

//다른 풀이
function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
//또다른 풀이
function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== answer[answer.length - 1]) {
      answer.push(arr[i]); //answer의 마지막데이터와 비교
    }
  }

  return answer;
}

//핸드폰 번호 가리기
function solution(phone_number) {
  let answer = "";
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer += "*";
    } else {
      answer += phone_number[i]; //뒷 네자리를 그대로 둔다
    }
  }
  return answer;
}
//메소드 사용 방법. slice==>배열, 문자열에 사용가능
function solution2(phone_number) {
  let answer = "";
  answer = answer.padStart(phone_number.length - 4, "*");
  answer += phone_number.slice(phone_number.length - 4, phone_number.length); //뒤네자리를 잘라넣음(몇번째 인덱스부터)==>시작점부터 끝까지 자름
  //(0,3) 첫번째 인덱스부터 3번째인덱스는 제외하고 두번째인덱스까지 자름.따라서
  //두번째 인덱스부분은 내가 잘라올 범위에서 하나 더한값 넣음. ==> 첫번째 인덱스부터 세번째인덱스까지 잘라오겠다(0,4)첫번째인덱스 잘라지고 세번째까지 출력.
  // answer += phone_number.slice(phone_number.length - 4);
  return answer;
}

//11/08 화요일
//짝수와 홀수
function solution(num) {
  let answer = "";
  if (num % 2 !== 0) {
    answer = "Odd";
  } else {
    answer = "Even";
  }
  return answer;
}

//if 문 사용안하는 법
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

//평균 구하기**다시풀기
function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }

  return answer / arr.length;
}

//다른방법
function solution(arr) {
  const sum = arr.reduce((cu, el) => {
    return cu + el;
  }, 0);
  return sum / arr.length;
}

//가운데 글자 가져오기
function solution(s) {
  const center = Math.floor(s.length / 2); //소수점 제거
  let answer = s[center];
  if (s.length % 2 === 0) {
    answer = s[center - 1] + answer;
  }
  return answer;
}

//삼항연산자,slice 사용법
function solution(s) {
  const center = Math.floor(s.length / 2); //소수점 제거
  let answer = s.length % 2 === 1 ? s[center] : s.slice(center - 1, center + 1); //슬라이스 뒤쪽부분은 해당 인덱스의 앞에까지 내보냄
  return answer;
}

//문자열 다루기**
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    console.log(isNaN(s[i]), s[i]);
    if (isNaN(s[i])) {
      return false;
    }
  }
  return true;
}

//2번째방법**

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  const answer = s
    .split("") //빈문자열 기준으로 문자열데이터 하나씩 쪼개기
    .filter((num) => {
      //num(데이터)가 숫자가 아닌 문자타입만 남김. 즉,
      //isNaN의 결과가 true인 데이터만 남김.(문자일경우임)
      return isNaN(num);
    });
  return answer.length === 0; //전체가 숫자이니 문자열을 검증하는 필터에서 남지 않고 빈배열만 나옴.==>true리턴
  //length값이 0이 아니면 남아있는 데이터가 있다==>숫자중에 문자가 섞여있다.==>false리턴
}

//약수의 합**
function solution(n) {
  //     let answer = 0;
  //     for(let i = 1;i<=n;i++){
  //       if(n%i===0){
  //           answer +=i
  //       }
  //     }return answer
  //약수는 자기자신을 2로 나눈 데이터 까지만약수로 받아옴
  //조건식에 (for)문에서 n를 2로 나누고, answer에는 자기자신을 넣어주는 방법도 있음..
}

//사분면구하기 2주차 알고리즘 레포**
function quadrant(x, y) {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  return 4;
}

//시험성적 2주차 알고리즘 레포**
function score(num) {
  if (num >= 90) {
    return "A";
  } else if (num >= 80) {
    return "B";
  } else if (num >= 70) {
    return "C";
  } else if (num >= 60) {
    return "D";
  } else {
    return "F";
  }
}
//KDA 2주차 알고리즘
function kda(array) {
  const k = array[0];
  const d = array[1];
  const a = array[2];

  if (k + a < d || d === 0) {
    return "hasu";
  }

  return "gosu";
}

// 또는

function kda(array) {
  const [k, d, a] = array; // 구조분해할당
  return k + a < d || d === 0 ? "hasu" : "gosu"; //삼항연산자
}
