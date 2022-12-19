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
//유클리드 호재법 사용****
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

//완주하지 못한 선수 ==> 얘는 효율성 부분에서 좀 느림
function solution(participant, completion) {
  // 한명은 완주못함.
  // 그 완주하지 못한 선수 이름을 리턴
  // 참여자 이름 배열 participant
  // 완주자 이름배열 completion
  //두 배열을 합침,
  // 참여자 명단에는 있지만 완주자 명단에는 없는자.
  // 동명이인도 존재

  // completion과 participant를 비교해 지워나가는 식으로
  // 참가자가 완주명단에 있다면 지워나가는 방식으로

  //1.splice: 배열에서 사용가능한 메서드
  //2. 내가 제거하고싶은 배열의 데이터를 해당구간부터 제거할 수 있다.
  //3. 데이터를 추가하는것도 가능
  // arr = [ 1, 2, 3, 4]
  //arr.splice(몇번째 인덱스부터  지울것인지,그 인덱스부터 몇개 를 지울것인지)==> 제거된 데이터 를 배열로 받아옴(return 값으로 받는다)
  // 기존 데이터에 다시 할당하면 제거되게된 데이터를 받게된다.
  // 지우고 싶지 않으면 두번째인자에 0을 넣으면됨.
  // 세번째부분에는 추가하는 부분
  //즉, arr.splicce(1,0,5) ==> 첫번째 인덱스부터 하나도 지워지지않고 첫번째 인덱스자리에 5가 들어오게되고 원래 첫번째 인덱스였던애는 그 뒤로자리옮김
  // ===> [ 1, 5, 2, 3, 4]
  // 원본값이 변경된다.
  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      // 참가자명단중 완주한선수들의 이름의 인덱스값을 찾아옴
      //indexOf는 배열의 인덱스 값을 찾아옴
      // 해당선수의 인덱스 값부터라는 기준이 잡힘=>splice의 첫번째 요소
      participant.splice(participant.indexOf(completion[i]), 1); // 두번째에는 한개만 지운다는 1이 들어옴
      //indexOf에 속한 선수들만 participant에서 지워지고 completion에 속하지 않는 하나가 participant에서 남게됨
    }
  }
  return participant[0]; // 이름을 리턴
}
// 적은 반복문으로도 결과값 얻어오기
function solution(participant, completion) {
  //참가자, 완주자 명단을 오름차순으로 정렬
  participant.sort(); // 문자열을 오름차순 정렬시에는 (여기)비워도 됨
  //숫자가 들어있는 배열은 오름차순 명시해야함(인자넣어야함)
  completion.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

//변수에 넣는법
function solution(participant, completion) {
  // 적은 반복문으로도 결과값 얻어오기
  //참가자, 완주자 명단을 오름차순으로 정렬
  participant.sort(); // 문자열을 오름차순 정렬시에는 (여기)비워도 됨
  //숫자가 들어있는 배열은 오름차순 명시해야함(인자넣어야함)
  completion.sort((a, b) => (a > b ? 1 : -1));
  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break; // 찾으면 반복문종료
    }
  }
  return answer;
}

//filter메서드 사용법
function solution(participant, completion) {
  //데이터를 걸러서 해당되는 부분만 return 받아 배열에
  participant.sort();
  completion.sort();

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}

//3번째 케이스 :participant=["mislav", "stanko", "mislav", "ana"]
//completion=["stanko", "ana", "mislav"]
function solution(participant, completion) {
  //데이터를 걸러서 해당되는 부분만 return 받아 배열에
  participant.sort(); // ["ana", "mislav", "mislav", "stanko"]
  completion.sort(); // ["ana", "mislav", "stanko"]

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0]; // 알파벳 순으로 정렬했고  3번째 케이스에서 mislav와 stanko들어옴(stanko의 경우에는 짝이 안맞아 name에는 undifind가 나옴) 제일먼저 완주하지못한 사람만 리턴하면되니 0번째인덱스만 뽑아 리턴
}

// **********
const answerTable = [
  // 얘의 length는 3
  //  1번수포자 방식
  [1, 2, 3, 4, 5], // 5개의 패턴
  //2번 "
  [2, 1, 2, 3, 2, 4, 2, 5], //8개의 패턴
  //3번 "
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10개의 패턴
];

function solution(answers) {
  //정답이 들어있는 배열이 제공됨.
  // 가장 많은 문제를 맞춘사람을 리턴
  //다 같으면 오름차순정렬

  // 수포자들이 정답을 찍는 패턴
  //answers와 비교

  // 몇번의 문제가 나오든, 해당수포자가 찍는 패턴수에따라 나눠주면 해당문제에 몇번을 찍을 지 알 수 있음

  //수포자들의 점수를 저장하는배열
  const score = [0, 0, 0]; //얘도 answerTable과 length같음.따라서 같은 인덱스로 접근가능
  for (let i = 0; i < answers.length; i++) {
    //학생들이 찍는 방식과 정답을 대조
    for (let j = 0; j < answerTable.length; j++) {
      // 지금의 문제를 나타내는 i에 각각의 학생들의 패턴을 담고있는 length를 나눠줌
      //각각학생들이 가져오는 패턴의 값과 문제패턴의 값이 동일할때 학생의 점수를 저장하는 배열인 score[j] 에 즉 배열의 인덱스값에 ++해주기
      //i % answerTable[j].length =(나머지구하는것)=> 0 % 3 = 0, 1 % 3=1 , 2 % 3 = 2
      if (answerTable[j][i % answerTable[j].length] === answers[i]) {
        score[j]++; // 몇번학생이 몇문제를 맞췃는지 합산해 보여줌.
      }
    }
  }
  //제일 많이 맞춘 문제의 수를 찾아옴
  const answer = [];
  const biggest = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    // 오름차순한 효과 얻음
    if (biggest === score[i]) {
      answer.push(i + 1); // 몇번학생인지 나타냄
    }
  }
  return answer;
}
//메서드 이용-- 다시 한번봐야함. 왜인지 통과가 안됨
const answerTable = [
  // 얘의 length는 3
  //  1번수포자 방식
  [1, 2, 3, 4, 5], // 5개의 패턴
  //2번 "
  [2, 1, 2, 3, 2, 4, 2, 5], //8개의 패턴
  //3번 "
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10개의 패턴
];

function solution(answers) {
  // 학생들이 맞춘 문제수를 구함
  const soreList = answerTable.map((el, j) => {
    //배열안에 학생들의 정보가 담긴 객체형태로 만들기
    //그 전에 학생들 점수 합산
    const score = answers.reduce((acc, cur, i) => {
      //el[i % el.length] === cur ==> el[i % el.length] 가 현재정답고 동일한가. 정답이 맞으면 1을 더해줌
      return acc + (el[i % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score }; //score : score //키와 value동일해 하나만 사용(맞춘개수를 의미)
  });
  // 최대로 맞춘 문제의 수를 가져옴
  const biggest = Math.max(
    ...scoreList.map((el) => {
      //객체 데이터를 받아오게됨.score부분만 뽑아서 배열로 만들어줌(map은 배열로 만들어 리턴해줌)
      return el.score; // 결과값 : [ 5, 0, 0]
    })
  );
  //가장 많이 맞춘 사람만 거름
  const answer = scoreList
    .filter((el) => {
      return biggest === el.score;
    })
    .map((el) => el.student);
  return answer;
}

// 폰켓몬

function solution(nums) {
  // 네마리의 폰켓몬
  // 같은종류는 같은번호임
  // 가장 많은 종류의 폰켓몬 선택.
  //반복문을 사용하여 겹치지 않는경우를 카운트

  //   for(let i = 0;i < nums.length ; i ++){
  //       if(nums[i] !== nums[i+1]){
  //           count++
  //       }
  //   }
  //   return count// 첫번째 경우에서 막힘

  //nums길이는 항상 짝수
  // N/2마리까지 가능==> 배열의 길이를 2로 나눔
  // 최대한 뽑을 수 있는 폰켓몬 ==> 에서 다른 종류만
  const answer = [];
  // 폰켓몬에서 서로다른 종류만 뽑기
  for (let i = 0; i < nums.length; i++) {
    // answer에 nums[i] 가 없을때만 넣어줌
    if (
      answer.includes(nums[i]) === false && // 중복된것 제외
      // answer의 길이가 최대치와 동일하지 않을때까지즉, 최대치 까지만 푸쉬
      nums.length / 2 !== answer.length
    ) {
      answer.push(nums[i]);
    }
  }

  return answer.length; // 가질 수 있는 최댓값을 리턴
}

// 자동으로 중복값제거하는 메서드 사용하기
function solution(nums) {
  // 자동으로 중복 데이터 제거하는 문법. new Set 사용. 유니크한 값만 넣음
  const answer = new Set([]); // 배열이 아니기에 length사용 못함. 대신 size 사용
  // 데이터를 넣으려고할때 nums의 절반(최댓값)넘어가는 지를 체크
  for (let i = 0; i < nums.length; i++) {
    if (nums.length / 2 !== answer.size) {
      answer.add(nums[i]);
    }
  }
  return answer.size;
}

// for문 사용 없는 코드
function solution(nums) {
  // 자동으로 중복 데이터 제거하는 문법. new Set 사용. 유니크한 값만 넣음
  //for문 사용하지 않고 new Set만 사용
  const answer = new Set(nums).size; // 빈배열 대신 실제 배열을 넣어주면 중복되는 것은 제거된 배열이 됨.
  const limit = nums.length / 2; // 최대한 넣을 수 있는 폰켓몬 종류
  if (limit >= answer) {
    return answer; // 중복되지 않는 배열의 크기(길이)를 리턴해줌
  }

  return limit;
}

// 피보나치 수
function solution(n) {
  // 지금 n은 2이상임.
  // F(0)은 0이고 F(1)은 1,
  // 나머지는 F(n) = F(n-1) + F(n-2)
  //2이상의 n이 입력 ==> n번째 피보나치수를 1234567로 나눈 나머지를 리턴
  // 0 1 2 3 5 8 13 ...
  //n의 최솟값은 2
  let prev = 0; // 피보나치 0번째 숫자 뜻함
  let next = 1; // // 첫번째 피보나치 의미함
  let sum = 1; // F(0) + F(1)
  //최솟값 2부터 시작해 해당 피보나치 숫자들 배열로 넣기
  const answer = [];
  for (let i = 2; i <= n; i++) {
    // 해당 피보나치 숫자들을 앞에서부터 구해나감
    sum = (prev + next) % 1234567; // 이전의 값에서 합산시 나눠주기
    prev = next; //n-1을 다시 할당
    next = sum; // 이전피보나치 수의 값
    answer.push(sum);
  }

  return answer[n - 2]; // 인덱스값에 접근하기 위해 n에 2를 뺌
}

//reduce사용
function solution(n) {
  // 지금 n은 2이상임.
  // F(0)은 0이고 F(1)은 1,
  // 나머지는 F(n) = F(n-1) + F(n-2)
  //2이상의 n이 입력 ==> n번째 피보나치수를 1234567로 나눈 나머지를 리턴
  // 0 1 2 3 5 8 13 ...
  //n의 최솟값은 2
  let prev = 0; // 피보나치 0번째 숫자 뜻함
  let next = 1; // // 첫번째 피보나치 의미함
  let sum = 1; // F(0) + F(1)
  // reduce사용 ==> 배열 필요
  const answer = new Array(n - 1)
    .fill(1) // 인덱스값만큼 접근. n - 1한값
    .reduce((acc) => {
      // 현재 누적값
      sum = (prev + acc) % 1234567;
      prev = acc; // n - 1
      next = sum; // 이전 피보나치의 수
      return sum;
    }, sum);
  return answer;
}

// 숫자 문자열과 영단어
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  // 각 숫자에 대응하는 영단어를 배열에 넣어봄.
  // 문자열s는 숫자와 문자가 합쳐져 있음.
  //s 가 의미하는것을 ==> 원래의 숫자.
  // 첫글자를 비교..
  //s 에서 숫자를 전부땜..?
  // let answer = s.split("")
  // console.log(answer)
  // s는 0이나 zero로 시작되지 않음

  // 풀이
  // 영어단어가 맞다면 해당숫자에 맞게 다시 s에 저장..
  for (let i = 0; i < numbers.length; i++) {
    // 영단어들을 s라는 문자열에서 찾아 그에맞는 데이터로 변경해주기
    // replace사용! 문자열에서 사용가능한 메서드.
    // 첫인자의 단어를 두번째 인자로 들어오는 단어로 변경하기.
    //원본변경시키지 않기에 변경된값을 담아주고 싶을때는 재할당 필요
    // 단,문자열 하나만 찾아 그 문자열 하나만 바꿔줌.
    // replaceAll => 문자열 전체에서 해당문자열 전부를 다른문자열로 치환해줌
    // 최신 문법이기에 프로그래머스에서 지원안함..
    //replace를 replaceAll처럼 만들기 while문 사용
    while (s.includes(numbers[i])) {
      // numbers의 i인덱스 값이 계속 있다면 계속 반복해 사용
      s = s.replace(numbers[i], i);
    }
  }
  return Number(s); // 숫자로 리턴
}

//split과 join사용
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  numbers.forEach((el, i) => {
    s = s.split(el).join(i);
    //console.log(s.split(el).join(i))// 숫자문자기준으로 쪼개 나누어진 문자들 사이의 쉼표부분에 인덱스번호를 넣어 합침
  });
  return Number(s);
}

// 정규표현식 사용

function solution(s) {
  // 정규표현식 사용.
  // 문자열을 짧은 코드로 검증가능.
  // 표현식 사용법: 슬래시(/) 열고, 슬래시(/) 닫고
  //슬래시 안에 검증할 문자열 넣어줌.
  // 표현식 뒤에 g는 문자열 전체에서 검색하는것
  s = s.replace(/zero/g, 0);
  s = s.replace(/one/g, 1);
  s = s.replace(/two/g, 2);
  s = s.replace(/three/g, 3);
  s = s.replace(/four/g, 4);
  s = s.replace(/five/g, 5);
  s = s.replace(/six/g, 6);
  s = s.replace(/seven/g, 7);
  s = s.replace(/eight/g, 8);
  s = s.replace(/nine/g, 9);

  return Number(s);
}

// 위의 정규표현식 방법을 반복문으로 사용

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    // 정규표현식은 변수처럼 사용못함. 즉, 인덱스 넣을 수 없음. /numbers[i]/로 넣으면 하나의 문자열로 나옴
    //RegExp 이용하면 정규식문법에 변수할당할 수 있음(리젝스 라고함)
    const reg = new RegExp(numbers[i], "g"); // 첫번째 인자로는 어떤 단어를 검증할것인지.
    //두번째 인자로는 어떤 옵션값을 사용할것인지(현재 글로벌로 넣음--> 전체의미)
    //reg에는 정규표현식 문법이 들어감, 두번째 인자로는 그것을 바꿀값.
    s = s.replace(reg, i);
  }
  return Number(s);
}

// 시저암호

// 알파벳을 한번에 담아 풀기

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
  // 문자열을 밀어서다른 알파벳으로 바꾸기.
  // n만큼 밀경우 만약 n이 3이고 s가 AB이면 A는 D, B는 E가 됨.
  // 소문자와 공백도 있음.

  // 인덱스값으로 접근한다면 n-1한값이맞음...
  //알파벳 z를 한칸 밀면 처음 알파벳으로 들어감.

  // 대문자는 대문자, 소문자는 소문자, 공백은 공백
  //s길이는 8000이하

  // 모든 알파벳을 하나의 문자열에서 가져온다음. 그 문자열에서 몇칸 밀어준만큼을 뽑아올것.
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    //공백에대한 예외처리
    if (s[i] === " ") {
      // 공백과 같다면
      answer += s[i]; // 공백을 넣어줌
    } else {
      let index = alphabet.indexOf(s[i]); // 현재 s의 i인덱스가 알파벳이라는 상수의 몇번째 위치에있는지 찾아옴
      //26번째 인덱스부터 마지막까지가 대문자.
      // 소문자의 경우는 0번째부터 25인덱스까지
      const word =
        index > 25
          ? // 대문자
            alphabet.substring(26) //26번째부터 끝까지자름
          : alphabet.substring(0, 26); // 두번째 인자 앞에까지 잘라오겠다.
      // 소문자
      // 대문자 인덱스 값을 word를 이용해 뽑아오기
      index = word.indexOf(s[i]) + n; // n만큼 밀어준 인덱스
      //z의 경우에는 undefined 나옴
      if (word[index] === undefined) {
        // 26번째 넘었다면 알파벳 총 개수만큼 다시빼서 0으로 다시 돌아가게
        index -= 26;
      }
      answer += word[index];
    }
  }
  return answer;
}

//소문자와 대문자 분리되어있는 상황으로 풀기
const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자만 저장
function solution(s, n) {
  // 문자열을 밀어서다른 알파벳으로 바꾸기.
  // n만큼 밀경우 만약 n이 3이고 s가 AB이면 A는 D, B는 E가 됨.
  // 소문자와 공백도 있음.

  // 인덱스값으로 접근한다면 n-1한값이맞음...
  //알파벳 z를 한칸 밀면 처음 알파벳으로 들어감.

  // 대문자는 대문자, 소문자는 소문자, 공백은 공백
  //s길이는 8000이하

  // 모든 알파벳을 하나의 문자열에서 가져온다음. 그 문자열에서 몇칸 밀어준만큼을 뽑아올것.
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    //공백에대한 예외처리
    if (s[i] === " ") {
      // 공백과 같다면
      answer += s[i]; // 공백을 넣어줌
    } else {
      const word = lower.includes(s[i]) ? lower : upper; // lower라는 상수에서 s의 [i] 가 있다면 소문자. 그러면 word에 저장. 아니라면 upper로 저장
      let idx = word.indexOf(s[i]) + n;
      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }

  return answer;
}

//reduce사용
const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자만 저장
function solution(s, n) {
  //reduce 사용. 얘는 배열에서 사용가능하니 배열로 만들기
  const answer = s.split("").reduce((acc, cur) => {
    const word = lower.includes(cur) ? lower : upper;
    let idx = word.indexOf(cur) + n; // n만큼 밀기
    if (idx >= 26) {
      // idx가 26자 이상이라면. 즉 word의 범위 밖이라면
      idx -= 26;
    }
    return acc + (cur === " " ? " " : word[idx]); // 공백이라면 공백으로 아니라면 밀어준것만큼 idx값으로 뽑아오기
  }, ""); // acc 초기값을 빈문자열로

  return answer;
}

//아스키코드 사용(문자코드)
//아스키코드
// charCodeAt : 문자의 유니코드 데이터를(번호를)리턴해주는 메서드
// String.fromCharcode : 유니코드를(유니코드 번호를) 문자로 리턴
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i],s[i].charCodeAt())
    // 대문자의 번호: 65 ~90
    // 소문자의 경우 : 97 ~ 122
    // 코드상에서 대문자나 소문자 범위를 벗어나면 다시 처음의 알파벳으로 돌림.
    if (s[i] === " ") {
      answer += " ";
    } else {
      let idx = s[i].charCodeAt() + n; // 유니코드 번호로 변환
      // console.log(s[i],String.fromCharCode(idx))
      if (idx > 122 || (idx > 90 && idx - n < 97)) {
        // 소문자 z의 번호 122를 넘어간다거나, 또는
        //idx값이 90을 넘어가면서
        // 기존의 idx값이 소문자인경우(밀어주기 이전의 데이터가 97보다 작을때)
      }
      answer += String.fromCharCode(idx); // idx를 다시 문자열로 변환
    }
  }
  return answer;
}

// 실패율구하기. 카카오 문제...
function solution(N, stages) {
  stages.sort((a, b) => a - b); // 오름차순정렬

  const failArr = []; //스테이지에 해당하는 유저수나 실패율을 저장하는배열.
  for (let i = 1; i <= N; i++) {
    failArr.push({
      stage: i, //스테이지 번호
      users: 0, // 클리어하지못한 유저수
      fail: 0, //실패율 초기값
    });
  }
  let allUsers = stages.length; //총 유저의 수를 저장
  for (let i = 0; i < stages.length; i++) {
    if (failArr[stages[i] - 1] !== undefined) {
      //객체가 있는 스테이지만 가져옴
      // 각각의 스테이지에 머물러있는 유저정보
      failArr[stages[i] - 1].users++;
      // console.log(stages[i],failArr[stages[i]-1])// 1스테이지부터 시작하니 인덱스 값으로 접근하기위해 -1
      //유저s의정보를 담다가 현재스테이지 번호와 다음 스테이지의 번호가 다를경우를 봄// 즉 현재 스테이지의 정보가끝났을때
      if (stages[i] !== stages[i + 1]) {
        const fail = failArr[stages[i] - 1].users / allUsers; // 해당스테이지의 유저들로 나눔 -- 실패율구함
        allUsers -= failArr[stages[i] - 1].users; // 클리어하지못한 유저수를빼서 다음스테이지에 도전하는 유저가 담기게됨
        console.log(failArr[stages[i] - 1], allUsers, fail);

        failArr[stages[i] - 1].fail = fail; // 해당객체에 실패율도 저장
      }
    }
  }
  const answer = failArr
    .sort((a, b) => {
      return b.fail - a.fail; // 내림차순
    })
    .map((el) => {
      return el.stage;
    });
  return answer;
}

//
function solution(N, stages) {
  stages.sort((a, b) => a - b); // 오름차순정렬

  // map사용
  // 리턴값길이와 N의 수가 동일하기에 map도 반복문돌린 수 만큼 배열로 받아옴.따라서N을 이용.
  let allUsers = stages.length; //총 유저수
  const answer = new Array(N)
    .fill(1)
    .map((num, i) => {
      const stage = num + i;
      //현재스테이부분만 자르기
      //indexOf()가장 앞에있는데이터를 가져옴
      //lastIndexOf()뒤에서부터뽑아옴
      //arr.slice(indexOf(),lastIndexOf()) 이런식으로 적어주되 두번째인자는 그 수를 제외하고니까 반드시 1을 더해줌.그렇게되면 원하는 배열까지 잘라올 수 있음
      const arr = stages.slice(
        stages.indexOf(stage),
        stages.lastIndexOf(stage) + 1
      );
      const fail = arr.length / allUsers;
      allUsers -= arr.length;
      return { stage, fail };
    })
    .sort((a, b) => {
      return b.fail - a.fail;
    }) // 내림차순정렬
    .map((el) => el.stage); // stage만 뽑아 배열에 담아 최종적으로answer 에 담기

  return answer;
}
//예산
function solution(d, budget) {
  //1번 예시의 경우 배열의 값을 전부 더해 예산으로 나눠 반올림? 처리하면 되지 않을까 생각.
  // 2번의 예시의 경우 예산과 배열의 총 합이 갑아서 배열의 길이가 결과가됨.
  // 답은 맞았으나 속도에서? 걸리는듯
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum === budget) {
      return d.length;
    }
  }
  let result = Math.ceil(sum / budget) + 1;

  return result;
}

//for문 사용..
function solution(d, budget) {
  // 부서들이 신청한 금액을 오름차순 정렬
  d.sort((a, b) => a - b);
  // console.log(d)
  // 예산에서 빼보기.
  // 적은 예산을 요청한 부서에게 먼저 주면 최대한 많은 부서에게 제공가능
  //부서들이 신청한 금액들의 합이 budget 보다 작거나 같다면 그때까지 지원가능
  let sum = 0;
  let answer = 0; // 지원가능한 부서의 수
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) {
      // 예산보다 배열정렬한 인덱스 합이 작거나 같다면...
      answer++;
    }
  }
  return answer;
}

//while 사용
function solution(d, budget) {
  // 부서들이 신청한 금액을 오름차순 정렬
  d.sort((a, b) => a - b);

  let answer = 0;
  //while사용. 소괄호 안에 들어간 식이 true일때까지만 실행됨
  while (budget - d[answer] >= 0) {
    // 삭감했을때의 값이 0이상일때까지만 반복
    budget -= d[answer]; // 총 예산에서 깎기
    answer++; // 증감식
  }

  return answer;
}

//filter사용
function solution(d, budget) {
  const answer = d
    .sort((a, b) => a - b) // 정렬
    .filter((m) => {
      //filter사용
      //총 예산에서 신청한 지원금을 삭감
      budget -= m;
      if (budget >= 0) {
        return m; // 예산이 있을때 지원할수있는 부서까지 가져옴. 배열형태로 받아옴
      }
      // console.log(m, budget); // 각 부서가 신청한 예산m
    });

  return answer.length;
}

// 크레인 인형뽁기

function solution(board, moves) {
  // 사라진 인형의 개수 2개씩 사라짐
  //board에는 배열안에 5개의 배열. 인형이 어떤 위치에있는지 나타냄.
  let answer = 0;
  const basket = []; //인형들이 담기는 배열
  // 크레인이 이동하는 위치값을 구하는 반복문
  for (let i = 0; i < moves.length; i++) {
    //2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
    for (let l = 0; l < board.length; l++) {
      const doll = board[l][moves[i] - 1]; // 현재 배열안에 크래인이 위치해야함  . 인덱스 값으로 접근하기 위해 -1 moves[i] ==> 1
      //  moves[i]-1 ==> 0

      if (doll !== 0) {
        // 크레인이 이동하는 위치에 인형이 있다면
        board[l][moves[i] - 1] = 0; // 뽑은 인형의 위치를 빈칸으로 만들어준다.

        // 바구니에 인형을 넣을때 바구니 맨 위의 인형과 동일하다면 제거해주기
        if (basket[basket.length - 1] === doll) {
          answer += 2;
          //pop사용해 가장 마지막 데이터 제거, 들어가려했던 인형도 들어가지못하게 break
          basket.pop();
          //splice사용으로 가장 마지막 데이터 제거, 들어가려했던 인형도 들어가지못하게 break
          //  basket.splice(basket.length - 1, 1)
          break;
        }

        basket.push(doll); // 바구니에 인형을 담는다
        // 한번 인형을 뽑았다면 해당위치 크래인을 멈추기
        break;
      }
    }
  }
  return answer;
}

// 메서드 사용 리턴값없이 for문대체 반복문 forEach사용

function solution(board, moves) {
  // 사라진 인형의 개수 2개씩 사라짐
  //board에는 배열안에 5개의 배열. 인형이 어떤 위치에있는지 나타냄.
  let answer = 0;
  const basket = []; //인형들이 담기는 배열

  moves.forEach((move) => {
    let pick = false; // 반복문을 더이상 실행시키지 않게 사용하는 변수pick. false 일때만 forEach실행
    board.forEach((location) => {
      // console.log(move,location)
      const doll = location[move - 1]; // 인형의 정보
      if (pick === false) {
        //false 일때만 실행
        if (doll !== 0) {
          location[move - 1] = 0;
          pick = true; // 인형뽑았으니 이 로직은 중단

          if (basket[basket.length - 1] === doll) {
            //마지막 들어온 인형과 현재 인형이 같을때 제거하기
            answer += 2;
            basket.pop();
          } else {
            basket.push(doll);
          }

          // forEach는 for문과는 다르게 break나 return 값없음
        }
      }
    });
  });
  return answer;
}

// 3진법 뒤집기! -- 내가품. 물론 찾아서..
function solution(n) {
  // n= 10 진법의 숫자
  // console.log(n.toString(3))
  let three = n.toString(3); // toString(여기에 숫자를 넣으면 해당 진법으로 바꾸는것 가능)
  let threeReverse = three.split("").reverse().join("");
  return parseInt(threeReverse, 3);
}

// 수업중 풀이
function solution(n) {
  // n= 10 진법의 숫자

  n = n.toString(3); //1. toString(여기에 숫자를 넣으면 해당 진법으로 바꾸는것 가능)// 타입은 문자
  // 앞뒤바꾸기
  let reverse = "";
  //2. 마지막인덱스부터 시작해
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
    // n의 3진법 숫자가 뒤집혀 reverse에 담김
  }
  //3. 원래의 10진법으로 표현
  //parseInt(첫번째의 인자값을 숫자로바꿈,10진법으로 변환할 진법)
  return parseInt(reverse, 3);
}
// 메서드 사용
function solution(n) {
  // n= 10 진법의 숫자

  n = n.toString(3).split("").reverse().join("");
  return parseInt(n, 3);
}

// 이진변황 반복하기 ---*****
function solution(s) {
  let count = 0; // 변환횟수
  let remove = 0; // 0 이 제거된 수
  //for문 ==> 일정범위 안에서일경우 사용
  //문자열 1이 나올때까지니 for 반복문 말고 while문 사용
  while (s !== "1") {
    count++; // 변환 횟수는 반복횟수와 동일함.(즉 1이될때까지 변환하는 횟수)
    // 1. 0을 모두 제거
    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        // 0이 있을때를 찾음. 제거 필요. 그리고 remove에 1더하기
        remove++;
        continue; // 다음반복문으로 넘어가기.
      }
      //문자열이 1일경우만 실행됨temp 에 문자열 1만 넣기
      temp += s[i];
    }
    s = temp.length; // 1만 담겨있는 전체를 다시 s에 담음
    s = s.toString(2); // 2진법으로 변환. 결과가 1이 아니라면 다시 반복문 실행
  }

  return [count, remove];
}

//recursion함수
function solution(s) {
  let [count, remove] = [0, 0]; //비구조할당(구조분해할당 사용)

  //while대체할 수 있는 .. 해당 데이터가 나올때까지.while대체하는 문법.
  // 해당함수를 무한적으로 실행해 결과 나올때 멈추기 == 재귀함수(recursion함수)// 꼭 멈춰주는 조건문 필요!
  //while문과 동일한 방식으로 사용됨. while문 대체 가능
  //function recursion (num) {
  //if(num === 3){
  //  return num;
  //}
  //num--
  //return recursion(num)
  // }
  //recursion(10)
  function recursion(s) {
    // 여기의 리턴값을 받아
    if (s === "1") {
      return [count, remove];
    }
    count++;
    const removeList = s.split("").filter((el) => el === "0"); //문자열이 0인것만 남김
    remove += removeList.length;
    s = s.split("").filter((el) => el !== "0").length; // 0 제거된것을 s에..
    return recursion(s.toString(2)); //2진법
  }
  return recursion(s); //리턴함
}

// 다트게임

const bonus = ["S", "D", "T"]; // 보너스를 잡아내기위해 배열에 저장
const options = ["#", "*"]; // 옵션을

function solution(dartResult) {
  // dartResult에는 각 점수들. 한번에 들어가있음.
  let score = ""; // 점수를 저장하기 위해 사용하는 변수
  const answer = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (isNaN(dartResult[i]) === false) {
      // NaN값인 경우에는 true값을 리턴 false일때는 Number타입으로 제대로 받아올 수 있는경우임.
      // 숫자타입으로 변환한 데이터가 숫자가 맞는 경우
      score += dartResult[i]; // 점수만 뽑음
    } else {
      // 숫자타입으로 변환한 데이터가 NaN값인경우(숫자가 아닌경우)
      // 보너스 : S , D , T

      if (bonus.includes(dartResult[i])) {
        score = Number(score); // 점수를 숫자타입으로 변경
        if (dartResult[i] === "D") {
          // 더블일 경우에는 현재스코어에 2제곱
          score = Math.pow(score, 2); //score = score ** 2
        } else if (dartResult[i] === "T") {
          //3제곱
          score = Math.pow(score, 3); //score = score ** 3
        }
      }
      if (score !== "") {
        answer.push(score); // 연산된 값을 score에 넣기
      }

      score = ""; // 다음턴 점수넣기 위해 처음부터 넣으라고 score을 비워줌

      if (options.includes(dartResult[i])) {
        //옵션이 있는경우
        if (dartResult[i] === "#") {
          // 아차상의 경우 해당점수 *-1
          answer[answer.length - 1] *= -1;
        } else {
          // 스타상의 경우 *2
          answer[answer.length - 1] *= 2;

          if (answer.length > 1) {
            // 앞에 점수가 있으므로 앞의 점수도 2를 곱해준다.
            answer[answer.length - 2] *= 2; // 마지막 데이터의 앞에있는 데이터에도 2를 곱함
          }
        }
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < answer.length; i++) {
    sum += answer[i];
  }
  return sum;
}

//reduce 사용
const bonus = ["S", "D", "T"]; // 보너스를 잡아내기위해 배열에 저장

function solution(dartResult) {
  let score = ""; // 문자열의 점수만 저장
  let currentValue = 0; // 현재턴 점수 저장
  let last = false;
  const answer = dartResult
    .split("")
    .reduce((acc, cur, i) => {
      if (isNaN(cur) === false) {
        score += cur;
        last = false; // 새 턴의 시작을 알림
      } else if (bonus.includes(cur)) {
        // 보너스를 찾기
        score = Number(score);
        const squared = bonus.indexOf(cur) + 1; // 만약 cur의 데이터가 S라면 D라면,... 보너스 라는 배열에서 각 해당 인덱스를 가져옴. + 1 // 각각 1제곱, 2제곱 3제곱이니까 그것을 담아주는 것.

        currentValue = score ** squared;
        score = "";

        // 옵션이 없다면 다음 cur의 데이터를 보기.
        if (
          isNaN(dartResult[i + 1]) === false ||
          i + 1 === dartResult.length // 배열의 마지각데이터일경우
        ) {
          // 즉, 숫자라면
          last = true; // 현재턴이 종료됨.
        }
      } else {
        //옵션
        last = true;
        if (cur === "*") {
          currentValue *= 2;
          if (acc.length > 0) {
            acc[acc.length - 1] *= 2;
          }
        } else {
          // 아차상
          currentValue *= -1;
        }
      }
      if (last) {
        acc.push(currentValue);
      }
      return acc;
    }, [])
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  // 초기값으로 배열!
  return answer;
}

// 비밀지도

function solution(n, arr1, arr2) {
  // 각 배열의 길이만큼 돌아 각 숫자를 이진수로 바꾸기
  //  let a =[]
  //  let b =[]
  // for(let i = 0 ; i < arr1.length;i++){
  //     a.push(arr1[i].toString(2))
  //     b.push(arr2[i].toString(2))
  // }
  //  console.log(a,b)
  // 하나라도 1을 가지면 벽이 되고 둘다 0이면 공백, 둘다 벽이면 벽

  // 한 변의 길이는 n
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = ""; // 전체 지도가 의미하는 문자열로 받아오기위함
    // 지도 1의 암호를 2진법으로 환산
    const map1 = arr1[i].toString(2).padStart(n, "0"); // n만큼의 길이 나머지는 0으로 채우기
    // 지도2의 암호를 2진법으로
    const map2 = arr2[i].toString(2).padStart(n, "0");
    console.log(map1, map2); // 1의 이진수가 1 . n만큼의 길이만큼 맞춰줘야함. 앞에를 다 0 으로 체우기
    // 두지도 겹치기
    for (let l = 0; l < map1.length; l++) {
      console.log(map1, map1[l], map2, map2[l]);
      if (map1[l] === "1" || map2[l] === "1") {
        // 둘중 하나라도 벽일경우에는 무조건 벽
        answer[i] += "#";
      } else {
        // 두개모두 "0"을 가진다면 공백
        answer[i] += " ";
      }
    }
  }
  return answer;
}

//메서드 사ㅇ
function solution(n, arr1, arr2) {
  // 각 배열의 길이만큼 돌아 각 숫자를 이진수로 바꾸기
  //  let a =[]
  //  let b =[]
  // for(let i = 0 ; i < arr1.length;i++){
  //     a.push(arr1[i].toString(2))
  //     b.push(arr2[i].toString(2))
  // }
  //  console.log(a,b)
  // 하나라도 1을 가지면 벽이 되고 둘다 0이면 공백, 둘다 벽이면 벽

  // 한 변의 길이는 n
  const answer = arr1.map((map1, i) => {
    // 2진법으로 바꾸기
    map1 = map1.toString(2).padStart(n, "0"); // 매개변수재할당.단, 다른곳에서 이 매개변수 사용하지 않아야함.
    const map2 = arr2[i].toString(2).padStart(n, "0");
    return map1.split("").reduce((acc, cur, l) => {
      // console.log(acc,cur,map1[l])
      return acc + (cur === "1" || map2[l] === "1" ? "#" : " ");
    }, "");
  });
  return answer;
}

// 신규 아이디 추천
const filter = "qwertyuilopasdfghjklzxcvbnm213456789-_.";

function solution(new_id) {
  let answer = "";
  //1 단계 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();
  //2단계 소문자, 숫자, 빼기, 마침표 제외한 문자 제외
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      answer += new_id[i]; // 제거된 데이터를 answer에 담음
    }
  }
  // 마침표가 두번이상 연속되어있다면 하나로.
  // answer에서 마침표가 두번이상 있을경우를찾기
  while (answer.includes("..")) {
    answer = answer.replace("..", "."); // 연속되는 마침표가 없어질때까지 즉, 마침표가 하나일때까지 무한히 실행됨.
  }
  //4단계 마침표가 처음이나 끝에 위치하면 제거
  if (answer[0] === ".") {
    answer = answer.substr(1); // 1인덱스부터 끝까지자름.// 1부터 3까지 자르겠다(첫번째 인덱스부터 세번째까지자르겠다 ==> substr(1,3) // 두번째 인자까지 가져옴
  }
  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer = answer.slice(0, answer.length - 1); // 마지막
    }
  }
  removeLastDot();

  //5단계 빈 문자열 이라면 a를 넣어줌.
  if (answer === "") {
    answer = "a";
  }
  //6단계 길이가 16자 이상이면 15까지 자름. 그리고 마지막에 마침표있으면 제거
  if (answer.length >= 16) {
    answer = answer.substr(0, 15);
    removeLastDot();
  }
  //7단계 문자열 길이가 2이하면 3될때까지 반복해 추가
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer[answer.length - 1]); // 뒤에서부터 채워줌(마지막에 오는 문자로)
  }
  return answer;
}

//
const filter = "qwertyuilopasdfghjklzxcvbnm213456789-_.";

function solution(new_id) {
  //1 단계 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();
  //2단계 소문자, 숫자, 빼기, 마침표 제외한 문자 제외
  let answer = new_id.split("").filter((str) => filter.includes(str));
  //3단계  마침표가 두번이상 연속되어있다면 하나로.
  answer = answer.filter((str, i) => {
    return (str === "." && answer[i + 1] !== ".") || str !== ".";
  });
  //4단계 마침표가 처음이나 끝에 위치하면 제거
  if (answer[0] === ".") {
    answer.splice(0, 1); // 0번째 인덱스를 하나제거
  }
  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer.splice(answer.length - 1, 1); // 마지막데이터 부터 하나를 제거
    }
  }
  removeLastDot();

  //5단계 빈 문자열 이라면 a를 넣어줌.
  if (answer.length === 0) {
    answer = ["a"];
  }

  //6단계 길이가 16자 이상이면 15까지 자름. 그리고 마지막에 마침표있으면 제거
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }
  //7단계 문자열 길이가 2이하면 3될때까지 반복해 추가
  if (answer.length <= 2) {
    const add = new Array(3 - answer.length).fill(answer[answer.length - 1]);
    answer = answer.concat(add);
  }
  return answer.join("");
}

// 키패드 누르기

const leftNumbers = [1, 4, 7]; // 왼쪽 키패드에 해당되는 숫자
const rightNumbers = [3, 6, 9]; // 오른쪽 키패드에 해당되는 숫자

function solution(numbers, hand) {
  // 왼손 :  *,1,4,7
  // 오른손 : #,3,6,9
  // 2,5,8,0 => 현재 엄지손가락들 위치에서 더 가까운 엄지.거리 같으면 어느손잡이인지에띠리서 그 쪽 사용.
  // 대각선으로는 움직이지x

  let answer = ""; // 연속되는 손가락 위치를 담을것.

  // 현재 손가락의 위치를 저장
  const current = {
    left: 10, // 맨 위 숫자로 부터 몇칸떨어져있는지 1~9 + 1 = * 의 자리
    right: 12, // # 의 자리
  };
  for (let i = 0; i < numbers.length; i++) {
    // 왼쪽 키패드에 해당시
    if (leftNumbers.includes(numbers[i])) {
      // 누를 번호가 왼쪽부분의 경우
      answer += "L";
      // 각 현재의 위치
      current["left"] = numbers[i]; // 왼쪽 손가락 위치를 변경
    } else if (rightNumbers.includes(numbers[i])) {
      //오른쪽 부분..
      answer += "R";
      current["right"] = numbers[i]; // 오른쪽 손가락 위치를 변경
    } else {
      //가운데 번호를 누를때
      // 가운데 번호에서 가까운 손가락 찾기
      const locationObj = { ...current }; // 왼쪽과 오른쪽의 위치 차이를 차이를 저장
      for (let hand in locationObj) {
        // 객체를 반복
        // 0 번을 눌렀을 시 예외처리. = 0 번은 11위치값으로 처리한다.
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
        let location = Math.abs(numbers[i] - locationObj[hand]); // 음수로 처리된 데이터를 양수로 변경
        if (location >= 3) {
          // 상하 이동이 가능할 경우
          //Math.trunc 는 소수점을 제거함
          location = Math.trunc(location / 3) + (location % 3);
        }
        locationObj[hand] = location;
      }
      // console.log(numbers[i],locationObj)
      // 거리차이가 같은경우
      if (locationObj["left"] === locationObj["right"]) {
        // 자기 손잡이의 손가락으로 누름
        answer += hand === "left" ? "L" : "R";
        current[hand] = numbers[i];
      } else {
        if (locationObj["left"] > locationObj["right"]) {
          //오른쪽 손가락이 더 가까운경우
          answer += "R";
          current["right"] = numbers[i];
        } else {
          answer += "L";
          current["left"] = numbers[i];
        }
      }
    }
  }
  return answer;
}
// reduce라는 메서드 사용. 뭔가 잘못되어 한번 더 봐야할듯.

// const leftNumbers = [1,4,7] ; // 왼쪽 키패드에 해당되는 숫자
// const rightNumbers = [3,6,9];// 오른쪽 키패드에 해당되는 숫자

const [leftNumbers, rightNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
]; // 비구조화 할당(구조분해할당)
function solution(numbers, hand) {
  // 왼손 :  *,1,4,7
  // 오른손 : #,3,6,9
  // 2,5,8,0 => 현재 엄지손가락들 위치에서 더 가까운 엄지.거리 같으면 어느손잡이인지에따라서 그 쪽 사용.
  // 대각선으로는 움직이지x

  // 현재 손가락의 위치를 저장
  const current = {
    left: 10, // 맨 위 숫자로 부터 몇칸떨어져있는지 1~9 + 1 = * 의 자리
    right: 12, // # 의 자리
  };
  const answer = numbers.reduce((acc, cur, i) => {
    let [useFinger, target, number] = ["", "", 0];
    if (leftNumbers.includes(cur)) {
      [useFinger, target, number] = ["L", "left", cur];
    } else if (rightNumbers.includes(cur)) {
      [useFinger, target, number] = ["R", "right", cur];
    } else {
      // 가운데 키패드 누를시
      // 객체를 배열로 바꿔...
      //Object.entries(객체명) ==> 배열안에 여러 배열들이 생성됨. 한배열의 앞음 키, 뒤는 값. [[키,값],[키,값],...]
      const fingers = Object.entries(current).reduce((acc2, cur2) => {
        const targetHand = cur2[0]; // 키를 가져옴

        cur = cur === 0 ? 11 : cur; // 0번째 위치하는것을 11로 바꾸기
        let location = Math.abs(cur - cur2[i]); // 거리차 구하기(정수로)
        if (location > 2) {
          // 3이상이면
          location = Math.trunc(location / 3) + (location % 3);
        }
        acc2[targetHand] = location; // 왼쪽 손가락과 오른쪽 손가락에 해당되는 위치값을 받아올 수 있음.
        return acc2;
      }, {});
      if (fingers["left"] === fingers["right"]) {
        [useFinger, target, number] = [
          hand === "left" ? "L" : "R",
          hand === "left" ? hand : "right",
          cur,
        ];
      } else if (fingers["left"] > fingers["right"]) {
        [useFinger, target, number] = ["R", "right", cur];
      } else {
        [useFinger, target, number] = ["L", "left", cur];
      }
    }
    current[target] = number;
    return acc + useFinger; // 누적값 더하기 누른 손가락
  }, "");
  return answer;
}
