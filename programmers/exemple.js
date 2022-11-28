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

//핸드폰 번호 가리기*****
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

//김서방 찾기
function solution(seoul) {
  let x = 0; //김서방의 위치 저장
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      // // x = i;
      // // break;//Kim을 찾으면 반복문 중단시킴.
      //또는 return `김서방은 ${i}에 있다`
    }
  }
  // // return `김서방은 ${x}에 있다`
}

// for문 대신 indexOf라는 메서드 사용하는 방법.배열에 있다면 해당 인덳, 값을, 없다면 -1을 리턴해줌.
function solution(seoul) {
  const x = seoul.indexOf("Kim");
  return `김서방은 ${x}에 있다`;
}

// 11/10
//자릿수 더하기**

function solution(n) {
  let answer = 0;
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]); //i를 숫자로 다시 변경해 answer에 넣어주기
  }
  return answer;
}
//다른방법**
function solution(n) {
  const answer = String(n)
    .split("")
    .reduce((cu, el) => {
      return cu + Number(el);
    }, 0);
  return answer;
}
//다른방법**
function solution(n) {
  const answer = String(n)
    .split("")
    .reduce((cu, el) => {
      return Number(cu) + Number(el);
    });
  return answer;
}

//x만큼 간격이 있는 n개의 숫자**

function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

//map을 사용하는 방법
function solution(x, n) {
  const answer = new Array(n).fill(1).map((num, i) => {
    return (num + i) * x;
  }); //맵은 리턴을 배열로함.
  return answer;
}

//숫자정렬
const arr = [10, 9, 1, 7, 97, 102];
arr.sort((a, b) => {
  console.log(a, b);
  return a - b;

  //a는 두번째인자, b는 첫번째인자로 찍힘.
  //a-b를 해서 오름차순정렬. sort사용시 arr 자동변경됨.
  //b-a면 내림차순정렬
});
//

const arr = ["a", "A", "Z", "b", "f", "h"];
arr.sort((a, b) => {
  console.log(a, b);
  return a < b ? 1 : -1;

  //a는 두번째인자, b는 첫번째인자로 찍힘.
  //a-b를 해서 오름차순정렬. sort사용시 arr 자동변경됨.
  //b-a면 내림차순정렬
});

//문자는 유니코드로 순서 비교
//유니코드로 문자 출력하기

String.fromCharCode(90); //Z
String.fromCharCode(97); //소문자a 따라서 대문자가 소문자보다 작음.

// [ 'h', 'f', 'b', 'a', 'Z', 'A' ]

// 'A' 'a'
// 'Z' 'A'
// 'Z' 'A'
// 'Z' 'a'
// 'b' 'Z'
// 'b' 'a'
// 'f' 'Z'
// 'f' 'a'
// 'f' 'b'
// 'h' 'a'
// 'h' 'b'
// 'h' 'f'

// 'Z'
// 'a'

//문자열 내림차순으로 배치하기
function solution(s) {
  const arr = [];
  //문자열을 배열로 바꾸기. 정렬 메서드 sort
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }
  arr.sort((a, b) => {
    return a > b ? -1 : 1; //작은순서대로(오름차순)
    // return a < b ? -1:1 //큰순서대로(내림차순)
  });
  //배열을 문자열로 바꾸기
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}

//메서드를 사용한 방법
function solution(s) {
  const arr = [];
  const answer = s
    .split("")
    .sort((a, b) => {
      return a > b ? -1 : 1;
    })
    .join(""); //split으로쪼갠 문자열 빈문자열로 묶기
  return answer;
}

// 문자열 내의 p와 y의 개수

function solution(s) {
  let answer = true;
  let count = 0;
  let count2 = 0;
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      count++;
    } else if (s[i] === "y") {
      count2++;
    }
    if (count !== count2) {
      answer = false;
    } else {
      answer = true;
    }
  }
  return answer;
}

// 다른방법
function solution(s) {
  let answer = true;
  let count = 0;
  let count2 = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      count++;
    } else if (s[i] === "y" || s[i] === "Y") {
      count2++;
    }
  }
  answer = count === count2;
  return answer;
}
//another
function solution(s) {
  s = s.toLowerCase(); //문자열을 소문자로 변환
  const obj = { p: 0, y: 0 };
  // let count = 0;
  // let count2 = 0;

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] === undefined // 객체에서 찾을 수 없을경우
      ? (obj[s[i]] = 1) // undefined일때는 새로추가.빈객체여도 초기값은 1
      : obj[s[i]]++; //있는 데이터라면 하나씩 증가
  }
  return obj.p === obj.y;
}
//
function solution(s) {
  s = s.toLowerCase(); //문자열을 소문자로 변환
  const obj = {};
  s.split("");
  forEach((str) => {
    obj[str] === undefined // 키값으로 접근
      ? (obj[str] = 1) // undefined일때는 새로추가.빈객체여도 초기값은 1
      : obj[str]++;
  });

  return obj.p === obj.y;
}

//  이상한 문자 만들기***
function solution(s) {
  let answer = "";

  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      //공백을 만나면 그냥 공백을 넣어줌(예외처리)
      idx = 0;
      //idx초기화
    } else {
      answer += idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
      idx++;
    }
  }
  return answer;
}

//다른풀이
function solution(s) {
  const answer = s
    .split(" ") //빈문자열로 나누고
    .map((word) => {
      return word
        .split("") // 나눈 각각의 문자들을 다시 하나씩 쪼갠다
        .map((letter, i) => {
          //console.log(letter,i)  ==>>
          // t 0
          // r 1
          // y 2
          // h 0
          // e 1
          // l 2
          // l 3
          // o 4
          // w 0
          // o 1
          // r 2
          // l 3
          // d 4
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
          //map은 기본적으로 배열로 리턴.
        })
        .join(""); //문자열로 묶기
    })
    .join(" ");
  return answer;
}

//자연수 뒤집어 배열로 만들기**
function solution(n) {
  n = n.toString();
  const answer = [];
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  return answer;
}

// 메서드 사용법
function solution(n) {
  const answer = n
    .toString()
    .split("")
    .reverse()
    .map((num) => {
      return Number(num);
    });
  return answer;
}

//   나누어 떨어지는 숫자 배열**
function solution(arr, divisor) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

//메서드 사용법
function solution(arr, divisor) {
  const answer = arr.filter((number) => {
    return number % divisor === 0; //나눴을때 나머지가 0인것만 필터로 걸러 배열로 만들어줌.
  });

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b); //오름차순으로 sort
}

//콜라츠 추측**

function solution(num) {
  let answer = 0;
  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      break;
    }
    answer++;

    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  }
  return num != 1 ? -1 : answer;
}

//**
function solution(num) {
  let answer = 0;
  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return answer;
    }
    answer++;

    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  }
  return -1;
}

//** 메서드 사용법. 다른 메서드들과는 다르게 위에서 쓴 for문이 더 효율적임. */

function solution(num) {
  let answer = 0;
  //foreach 사용. 배열필요. 빈배열 만들기
  new Array(500).fill(1).forEach((el) => {
    if (num !== 1) {
      // forEach문 중단위해 조건문을 넣음. break나 return 쓰지 못하기에.그래도 반복문을 종료하지는 않음.반복문 중단은 아니다. 배열만큼 돌고있다.
      answer++;

      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    }
  });
  return num != 1 ? -1 : answer;
}

//(배열에서)두개 뽑아서 더하기***
function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    //현재 0번째 인덱스를 가지고 있으니 첫번째 인덱스부터 배열끝까지  가져오기
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (answer.includes(sum) === false) {
        //answer에 sum이 포함되지 암ㅎ으면 answer에 담아주기(중복제거)
        answer.push(sum);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
//** */

new Set();
a = new Set([1, 2, 3, 4, 5, 6]);
//특징. 배열형태를 가지는 객체데이터., 인덱스갑도 가지고, 데이터 넣어줄 수 있다.다만, 배열은 아님.
///고유한값만 저장이됨(즉, 중복되는 데이터 들어오지 않음
// 또는 new Set([]);

//데이터 추가
// a.add(추가할 데이터)

//데이터 삭제
//a.delete(삭제할데이터)

//데이터조회
//a.has(조회할데이터) ==>true,false로 나옴

//데이터 길이조회
//a.size

//데이터 비우기
//a.clear()

//배열로 변환

b = Array.from(a);

//반복문
a.forEach((el) => {
  console.log(el); // ==>각각의 숫자를 받아오게됨
});

//new Set을 이용한 방법******!!
function solution(numbers) {
  const answer = new Set([]);

  for (let i = 0; i < numbers.length; i++) {
    //현재 0번째 인덱스를 가지고 있으니 첫번째 인덱스부터 배열끝까지  가져오기
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      answer.add(sum);
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
  // return [...answer].sort((a,b)=>a-b) 이렇게도 표현가능.
}
//forEach 사용
function solution(numbers) {
  const answer = new Set([]);

  numbers.forEach((num1, i) => {
    number
      .slice(i + 1, number.length) // 앞에꺼부터자르며 맨뒤인덱스제외하고.즉 현재의 다음꺼부터배열의 맨뒤꺼 까지
      .forEach((num2) => {
        const sum = num1 + num2;
        answer.add(sum); // 배열의 answer.push와 동일.
      });
  });
  return Array.from(answer).sort((a, b) => a - b);
}
// 11/18

// 두 점수사이의 합 구하기 프로그래머스.**
function solution(a, b) {
  //두 점수가 같으면 아무거나 리턴,
  // 둘의 대소관계는 정해지 있지않음.
  // a가 3이고, b가 5이면
  //3+ 4+ 5 =12를 리턴.
  let answer = 0;

  if (a === b) {
    return a; //또는 B리턴
  } else {
    //최솟값
    //반복문이 실행될 때 설정되는 초기값(a와 b중 작은값이 들어온다.
    // const start =  a > b ?  b : a
    const start = Math.min(a, b); // 둘중 작은값을 start에 넣어준다.

    //최댓값 구하기.
    //반복문이 종료되는 시점 설정
    //a와 b중 큰값이 들어오게됨.
    // const end = a > b ? a : b;
    const end = Math.max(a, b);

    for (let i = start; i <= end; i++) {
      answer += i;
    }
  }
  return answer;
}

//정수 제곱근판별**
function solution(n) {
  // 제곱근. 제곱의 기준이되는 숫자. 즉, 원래의 숫자.
  // 그 숫자로 제곱을 한것이 제곱근
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      //제곱근을 찾은경우
      answer = i + 1;
      return answer * answer;
    }
  }
  //제곱근 찾지못한경우
  return answer;
}

//******** */
function solution(n) {
  // 제곱근. 제곱의 기준이되는 숫자. 즉, 원래의 숫자.
  // 그 숫자로 제곱을 한것이 제곱근
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      //제곱근을 찾은경우
      // return i +1 * i+1
      //앞에는 제곱할 숫자. **하고 몇제곱할건지.
      //거듭제곱연산자
      return (i + 1) ** 2;
    }
  }
  //제곱근 찾지못한경우
  return answer;
}

//메서드 이용법 *****
function solution(n) {
  //메서드 이용
  let sqrt = Math.sqrt(n); // 해당 숫자가 제곱이라면 제곱근찾아서 해당 변수에담아줌.
  //정수인지 아닌지 boolean으로판단
  if (Number.isInteger(sqrt)) {
    //true인경우(제곱근이 있는경우)
    // return (sqrt + 1) ** 2
    //거듭제곱 메서드사용법
    return Math.pow(sqrt + 1, 2); // 앞의 숫자를 두번째 인자값(2니까 제곱) 해주겠다.
  } else {
    return -1;
  }
}

// 하샤드 수 구하기**
function solution(x) {
  let answer = 0;
  x = String(x);
  for (let i = 0; i < x.length; i++) {
    answer += Number(x[i]);
  }
  // return x % answer === 0 ? true : false
  return x % answer === 0; // 얘 자체가 true false값을 리턴하니 삼항연산자 사용하지 않아도 됨.
}

//reduce 사용***
function solution(x) {
  // 메서드 사용법. 반복과 연산된결과로 가져오기.
  // reduce 사용
  const answer = String(x)
    .split("")
    .reduce((cu, el) => {
      return cu + Number(el);
    }, 0);
  return x % answer === 0;
}

//내적** 내풀이(틀림)a와 b의 같은 인덱스끼리 곱해 전부합한것(내적:안에서 곱해서 쌓아올린다는 의미)
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      answer += a[i] * b[j];
    }
  }
  return answer;
}
//
function solution(a, b) {
  // 길이가 같은 두 배열 ==> 이 부분을 참고하여 다시 풀어봄. 테스트 통과함.
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
//******* */
//메서드 이용 배열에서 각 데이터를 가져와 연산된결과를 리턴 ==> reduce사용

function solution(a, b) {
  // 두 길이가 같은 배열
  const answer = a.reduce((cu, el, i) => {
    //el로 i로 a의 요소,인덱스 가져옴.b에대한 요소는?
    return cu + el * b[i]; //cu 즉 누적된값을 더해주기
  }, 0);
  return answer;
}
// 제일작은 수  제거하기. 내풀이(틀림)
function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      answer.push(arr[i]);
    } else if (arr.length === 1) {
      answer.push(-1);
    }
  }
  return answer;
}
//****** */
function solution(arr) {
  const answer = [];
  let min = arr[0]; // 배열의 초기값을 min에 담기
  for (let i = 1; i < arr.length; i++) {
    //하나하나 요소마다 비교해 min 보다 작을때 min에 담아주기
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer;
  // 빈 배열이라면 -1 담긴배열을 리턴
}
//메서드 이용
function solution(arr) {
  // 제일 작은 수 찾기
  // Math.min( 찾으려는 , 인자값을, 쉼표로 , 구분)
  // ==> 배열 자체에서는 찾아오지 못함. 스프레드 연산자 사용!
  // Math.min(...[2,6,10])
  const min = Math.min(...arr);

  // 제일 작은 수를 제외하고 배열에 추가.
  // filer => 리턴 값에 따른 데이터만 배열에 넣어 리턴시킴
  const answer = arr.filter((num) => {
    return num !== min;
  });
  return answer.length === 0 ? [-1] : answer;
}

//sort 이용으로 오름차순으로 정렬 후 가장앞에있는 수만 뽑아오면 가장작은수만 뽑힘.

// 행렬의 덧셈 ==> 내풀이....막힘
function solution(arr1, arr2) {
  const answer = [];
  const result1 = [];
  const result2 = [];
  for (let i = 0; i < arr1.length; i++) {
    result1.push(...arr1[i]);
    result2.push(...arr2[i]);
  }
  for (let j = 0; j < result1.length; j++) {
    answer.push(result1[j] + result2[j]);
  }
  console.log(answer);
}

/// *****
function solution(arr1, arr2) {
  const answer = [[]];
  // 첫 번째 반복문 arr1배열의 전체 배열을 가져옴
  for (let i = 0; i < arr1.length; i++) {
    //arr1의 배열에서 가져온 배열들의 안쪽 데이터를 조회
    for (let j = 0; j < arr1[i].length; j++) {
      //i와 j 인덱스 값으로 각각의 위치에 해당하는 데이터들을 합함
      const sum = arr1[i][j] + arr2[i][j];
      // i에 해당하는 인덱스에 접근시 배열 없다면 빈 배열 생성하기
      if (answer[i] === undefined) {
        answer[i] = [];
      }
      //i와 j인덱스 값으로 해당위치에 데이터 삽입
      answer[i][j] = sum;
    }
  }
  return answer;
}

/// ****** 메서드 이용법
// 리턴값이 배열. map?
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    // 자동으로 배열 만들어짐
    return num1.map((num2, j) => {
      // 만들어진 배열안에 배열이 또 만들어져서 이중배열 이차원배열 생성.
      return num2 + arr2[i][j];
    });
  });
  return answer;
}

//2016년
const month = {
  1: 31,
  2: 29,
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
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
//윤년이니까 2월은 29일까지 있음.
function solution(a, b) {
  // 내가 생각했던 풀이.각 a의b가 몇까지 인지 구함... 그다음은...
  //1월 1일은 금요일.=>+0일 ==> 1/1
  //+1 ==> 1월 2일 토요일.
  //+2 ==> 1월 3일 일요일
  //+3 ==> 1월 4일 월요일.
  //... + 7 ==>1월 8일 금요일
  //7일 기점으로 몇일을 지나든 계속 돔.
  //+9 ===> 1/10 일요일
  // + 14 ===> 금요일 1/15일
  // +22 ===> 7주일이3번+1일 so, 1/23  토요일

  let answer = 0;
  // 각 일수를 모두 더해와 그 일수를 요일개수만큼 나눠 해당요일을 구함.
  //각 요일을 배열에 담고, 나머지를 사용해 인덱스로 받아올 수 있음

  for (let i = 1; i < a; i++) {
    // 이미 지나간 월을 기준으로구함 현제 예시에는 5월까지 나와아있음.
    answer += month[i]; //객체의 i라는 키에 접근.그러면 일을 가져올 수 있음
    //5월에서 b로 받아오는 일수까지 더하기
  }
  answer += b - 1; // 당일을뺀 날을 넣어주어야함.
  console.log(answer % 7);
  return week[answer % 7];
}

// 메서드 reduce사용(누적계산시 사용하는 메서드. 다만 배열에 적용가능)
const month = {
  1: 31,
  2: 29,
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
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  //reduce사용 배열 만들어야함.//a만큼의 길이를가지는 배열 만듬
  const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
    //누적기와 현재값요소, 인덱스,초기값
    const mn = cur + i; // 월을 계산
    return (
      acc +
      (mn !== a
        ? // 이전월의 일수
          month[mn]
        : //해당월의 일수
          b - 1)
    ); //같은월이면 흘러간 일수 까지만더하기. 적은월이면 일수들 다 더해주기.
  }, 0);
  return week[answer % 7];
}

// new Date()사용하기

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  // 현재 시간을 보여주는 문자열로 받아와지는 Date()라는 기능.
  //new Date()는 새로운 date객체가 생성됨.
  // 이것을  이용해 각각 현재시간의 일수, 월, 등을 리턴할수도 있음
  //a = new Date()
  //a.getDate() ==> 일
  //a.getFullYear() ==> 년
  //a.getMonth() + 1 ==> getMonth는 0부터 시작하니 월을 구하려면 항상 +1 필요
  //a = new Date() 여기 소괄호 안에 년, 월, 일 등을 넣으면 넣어준 인자값으로 날짜를 받아올 수 있음.
  //a.getDay() ==> 일주일 기준으로 며칠이 흘렀는지 보여줌.
  //arr = ["일","월","화","수","목","금","토"]
  //arr[a.getDay()] ==> arr의 인덱스로 요일 받아올 수 있음!
  //new를 쓰지 않는 Date는 메소드 사용 불가. 타입이 string. 그냥 문자열 자체로만 실행.
  //new 가 붙은 Date의 타입은 object.객체니까 메소드 사용가능. 그래서 메소그 getDate, getMonth 구할 수 있음
  const answer = new Date(2016, a - 1, b).getDay(); //월은 항상 한달적게 받아오니 -1해주기. 왜냐. new Date의 인자로 받아 출력하면 월이 하나 크게 나오니 getMonth할때는 +1, new Date()의 인자로 Month를 넣을 시에는  -1하기
  console.log(week[answer]);
  return week[answer];
}
//최대공약수와 최소공배수*******
function solution(n, m) {
  // 정의 최대공약수: 두 수의 공통되는 약수중 제일 큰수, 최소공배수: 두 수의 공통되는 수 중 제일 작은 수
  //최대공약수 구하기. 반복문1부터 m까지. i를 n과 m으로 나눴을때 나머지가 0이면 i를 약수로 가진다고 볼 수 있음.
  let max = 0; // 제일 큰값이 들어옴
  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i; // i를 max에 계속 넣으니 기존값은 없어지고 결국 가장 마지막에 들어오는 가장큰값이 max에 들어오게됨.(가장 큰값만 남음)
    }
  }
  // 최소공배수 구하기
  //반복문. 최초값은 가장 큰 값인 m부터.
  //m*n까지 반복문 실행.
  //i에는 m을 더해나감
  let min = 0;
  for (let i = m; i <= n * m; i += m) {
    //n의 배수 찾기
    if (i % n === 0) {
      min = i; // 제일 작은수만 찾아넣고
      break; //중단
    }
  }
  return [max, min];
}
//유클리드 호재법 사용
function solution(n, m) {
  // 유클리드호재법(최대공약수 구하는 알고리즘)
  let a = m; // 큰 수
  let b = n; // 작은 수
  let r = 0; // a와b를 나눴을때 나머지값이 저장됨
  // 해당데이터가 나올때까지 반복//나머지가 0일때까지 반복
  while (a % b > 0) {
    r = a % b; // 나머지값을 먼저 구하기
    a = b; // 큰 수에 작은수를 다시할당
    b = r; //작은 수의 나머지값을 할당
  }
  //최소공배수 구하는 공식 : n과 m을 곱한값에 최대공약수를 나눠준 값
  return [b, (n * m) / b];
}
