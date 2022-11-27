// 머쓱이보다 키 큰사람
function solution(array, height) {
  //머쓱이 반의 애들 키가 정해짐. array에 담겨있음,
  // 머쓱이의 키가 height로 주어짐.
  // array의 인덱스를 돌아 height와 비교하여 큰사람 수를 리턴
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      //배열의 i 번째가 크면 answer에 1씩 더함.
      answer += 1;
    }
  }
  return answer;
}
//배열 뒤집기
function solution(num_list) {
  const answer = num_list.reverse();
  return answer;
}

//문자열 뒤집기
function solution(my_string) {
  // 문자열을 split하여 배열로만듬. 그 배열의 요소들을 거꾸로, 그리고 ""로 joint사용해 배열의 요소들을 합쳐주면 배열이 문자열로 다시 바뀜
  let answer = my_string.split("").reverse().join("");
  return answer;
}

// isCute
/*
   
    
    세준 멘토는 멘토팀에서 귀여움을 담당하고 있다고 생각하고 있습니다.
    하지만 아라 멘토가 볼 때 그 의견은 뭔가 좀 잘못된 것 같습니다.
    그렇기에 설문조사를 하여 세준이 귀여운지 아닌지 알아보기로 했습니다.
    
    함수 isCute에는 수강생들이 설문 조사에 어떤 의견을 표명했는지를 나타내는 정수가 담긴 배열 array가 주어집니다. 
    0은 세준이 귀엽지 않다고 했다는 뜻이고, 1은 세준이 귀엽다고 했다는 뜻입니다.
    세준이 귀엽지 않다는 의견이 더 많을 경우 "Junny is not cute!"를 리턴하고 
    귀엽다는 의견이 많을 경우 "Junny is cute!"를 리턴해주세요.

    입출력 예시 )
    input           output
    ----------------------------------
    [1, 0, 0]   "Junny is not cute!"
    [0, 0, 0]   "Junny is not cute!"
    [1, 1, 0]   "Junny is cute!"
    [1, 1, 1]   "Junny is cute!"

    제한사항 )
    설문조사를 한 사람의 수, 즉 배열 array의 길이는 홀수이면서
    1보다 크거나 같고, 11보다 작거나 같습니다. 
*/

function isCute(array) {
  return array.filter((cur) => cur).length > Math.floor(array.length / 2)
    ? "Junny is cute!"
    : "Junny is not cute!";
}
//
function isCute(array) {
  return array.filter((cur) => cur).length >= Math.ceil(array.length / 2)
    ? "Junny is cute!"
    : "Junny is not cute!";
}
//
function isCute(array) {
  const arr1 = array.filter((el) => el === 1);
  if (arr1.length >= Math.ceil(array.length / 2)) {
    return "Junny is cute!";
  } else {
    return "Junny is not cute!";
  }
}
//
function isCute(array) {
  const arr1 = array.filter((el) => el === 1);
  if (arr1.length > Math.floor(array.length / 2)) {
    return "Junny is cute!";
  } else {
    return "Junny is not cute!";
  }
}

///*
// 사용자의 입력을 받아 그 값을 저장하고 있는 객체 inputs가 있습니다.
// inputs 객체의 키로는 title, contents, price, writer만 들어갑니다.
// value로는 string, number 타입만 들어갑니다.

// 이때, inputs의 value들이 ("" 과 0)이 아니라면 true, 하나의 value라도 ("" 또는 0)이라면 false를 리턴해주세요.

// 예시 )
// inputs = {title : "", contents : "내용"} 이라면 title의 value가 빈 문자열이기 때문에 false를 리턴합니다.
// inputs = {title : "제목", writer : "작성자", price : 1500} 이라면 빈 문자열이거나 0인 값이 없기 때문에, true를 리턴해주세요.

// HINT )
// Object.keys(), Object.values(), Array.filter(), Array.every(), Array.some(), for ... in 등 을 활용할 수 있습니다.
// */
function validateInputs(inputs) {
  let arr1 = Object.values(inputs); //객체의 값들을 배열로 가져옴
  for (let i = 0; i < arr1.length; i++) {
    //배열을 돌면서 비어있는 문자열도 아니고, 0도 아니면 true
    if (arr1[i] !== "" && arr1[i] !== 0) {
      return true;
    } else if (arr1[i] === "" || arr1[i] === 0) {
      //비어있거나 0이거나 하면 false를 리턴
      return false;
    }
  }

  return;
}
//
function validateInputs(inputs) {
  let arr = Object.values(inputs); //객체의 값들을 배열로 가져옴

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "" && arr[i] !== 0) {
      return true;
    } else if (arr[i] === "" || arr[i] === 0) {
      return false;
    }
  }
  return;
}
//
function validateInputs(inputs) {
  return Object.values(inputs).every((el) => el);
  //  input이라는 객체의 모든 values를 가져와 그 모든것을 every로 받아 el이 false같은값이면 false를 아니라면 true를. true 또는 false로 반환됨.
}

//
/*
    직각삼각형

    함수 triangle에 세변의 길이(a, b, c)가 주어집니다. 
    a의 제곱 + b의 제곱이 c의 제곱이면 직각 삼각형입니다. 

    삼각형이 직각삼각형이라면 "right", 아니라면 "wrong"을 리턴하세요.

*/
//
function triangle(a, b, c) {
  // 여기에서 작업해 주세요.
  if (a * a + b * b === c * c) {
    return "right";
  } else {
    return "wrong";
  }
}
//
function triangle(a, b, c) {
  return a * a + b * b === c * c ? "right" : "wrong";
}
//
/*
    가장 긴 중복 문자

    여러 개의 문자열이 담긴 배열 strs에서,
    가장 긴 중복 문자를 찾아 리턴하는 함수를 완성하세요.
    만약, 중복되는 문자열이 없다면 빈 문자열을 리턴해주세요.
    
    단, strs 배열은 1 이상 200 이하의 요소를 가집니다.
    strs 안의 각 문자열의 길이는 0 이상 200 이하입니다.
    각 문자열은 오직 소문자 알파벳으로만 이루어져 있습니다.
*/
//레퍼코드. 난 틀렸었음.
function prefix(strs) {
  const standard = strs[0]; // 우선 비교 대상을 strs의 0번째껄로 잡고 변수에 담아줌

  for (let i = 0; i < standard.length; i++) {
    // 그 변수의 길이만큼 반복문을 사용해 변수 temp에 0번째부터 모든 인덱스를 잘라넣은 새로운 변수를 만듬.
    const temp = standard.slice(0, standard.length - i);

    for (let j = 0; j < strs.length; j++) {
      // 이제 strs를 반복문으로 돌림.
      if (!strs[j].includes(temp)) break; // 위에서 만든 temp가 strs[j]에 포함되는지 여부를 검증. 만약 포함시 중단하고 다음 으로.
      if (j === strs.length - 1) return temp; // strs의 길이-1이면 마지막 인덱스를 의미. 여기까지 왔다면 가장 긴 중복문자열이 되니 이것을 리턴
    }
  }
  return ""; // 중복 문자열이 없는 경우 빈문자열
}

//피자 나눠 먹기 (3)
function solution(slice, n) {
  // 피자는 최대 10조각. 최소 두조각.
  // 원하는 조각으로 잘라줌. 사람에게 달려있음.
  // n이 10 명인데, 조각은 7조각으로 원한다고하면 최소 2판이 있어야 10명이서 한조각씩 먹을 수 있음.
  // 사람수에대해 피자 조각으로 나누고, 나머지는 올림처리
  return Math.ceil(n / slice);
}

//피자 나눠 먹기 (1)
function solution(n) {
  //피자는 한판에 일곱조각
  // n명의 사람이 최소 한조각씩은 먹어야함.
  //사람들이 다 한조각씩 먹는다면 피자의 개수는 꼭 그 사람들 수에 맞출 필요 없음
  //7명이면 피자한판, 1명도 한판, 15명의경우 7*2 는 한명이 못먹으니 3판.
  // 인명수 / 피자수 +나머지

  return Math.ceil(n / 7);
}

//삼각형의 완성조건 (1)
function solution(sides) {
  // 세변의 길이중 가장긴변의 길이는 다른두 변 합보다 작음.
  // 세변은 sides라는 배열에 들어있음
  // 조건에 만족한다면 1 아니라면 2를 리턴
  // 오름차순으로 정렬해 가장긴값을 맨 마지막 인덱스로

  sides.sort((a, b) => {
    return a - b;
  });

  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
//
/*
    
    로마 숫자를 아라비아 숫자로 변환하기

    로마 숫자는 I,V,X,L,C,D,X 총 일곱 가지로 숫자를 표현합니다.
    
    Symbol      Value
    ------------------
    I           1
    V           5
    X           10
    L           50
    C           100
    D           500
    M           1000

    예를 들어, 2를 로마 숫자로 표현하면 1을 표현하는 I를 두 개 더해서 II 로 표현할 수 있습니다.
    12는 10을 표현하는 X와 2를 표현하는 II를 더해 XII 로 표현할 수 있습니다.
    27은 20을 표현하는 XX와 5를 표현하는 V와 2를 표현하는 II를 모두 더해 XXVII로 표현됩니다.

    로마 숫자는 보통 큰수에서 작은수 순으로 왼쪽에서 오른쪽으로 표현됩니다. 하지만, 숫자를 4개 이상 붙여 표현하지는 않습니다.
    예를 들어, 4를 표현하고 싶다면 1을 표현하는 I를 4개 더한 IIII가 아닌, IV로 표현합니다.
    이렇게 표현하면 5를 표현하는 V 앞의 I가 1을 빼서 숫자 4를 만들게 됩니다.
    같은 방식으로 9를 표현하기 위해서는 VIIII가 아니라, 10을 표헌하는 X앞에 I를 붙여 1을 빼준 IX로 표현할 수 있습니다.
    이러한 방식으로 사용되는 예시는 다음과 같습니다.

    - I 를 V(5)나 X(10) 앞에 붙여서 4 혹은 9를 표현합니다.
    - X 를 L(50)이나 C(100) 앞에 붙여서 40 혹은 90을 표현합니다.
    - C 를 D(500)나 M(1000) 앞에 붙여서 400 혹은 900을 표현합니다.

    로마 숫자로 구성된 문자열 s가 주어질 떄, 이 수를 정수로 변환하여 반환해주세요.

    단, 문자열 s의 길이는 1 이상 15 이하입니다.
    s의 요소에는 I,V,X,L,C,D,M 이외의 다른 문자는 들어오지 않습니다.
    로마숫자 s를 정수로 변환하여 반환한 수의 범위는 1에서 3999까지 들어옵니다.

    input       output
    ------------------
    s
    ------------------
    III         3
    LVIII       58
    MCMXCIV     1994

*/

function romanArabic(s) {
  // - I 를 V(5)나 X(10) 앞에 붙여서 4 혹은 9를 표현합니다.
  // - X 를 L(50)이나 C(100) 앞에 붙여서 40 혹은 90을 표현합니다.
  // - C 를 D(500)나 M(1000) 앞에 붙여서 400 혹은 900을 표현합니다.
  // 여기에서 작업하세요
  // let result = "";
  // // 각요소를 숫자로 변환하기.
  // s.toUpperCase(); // 문자 전부 대문자로 변경
  // for (let i = 0; i < s.length; i++) {
  //   // 각요소를 인덱스로 받아와서
  //   if (s[i] === "I") {
  //     return (result += 1);
  //   } else if (s[i] === "V") {
  //     return (result += 5);
  //   } else if (s[i] === "VI") {
  //     return (result += 6);
  //   } else if (s[i] === "IV") {
  //     return (result += 4);
  //   } else if (s[i] === "IX") {
  //     return (result += 9);
  //   } else if (s[i] === "XL") {
  //     return (result += 40);
  //   } else if (s[i] === "XC") {
  //     return (result += 90);
  //   } else if (s[i] === "CD") {
  //     return (result += 400);
  //   } else if (s[i] === "CM") {
  //     return (result += 900);
  //   } else if (s[i] === "X") {
  //     return (result += 10);
  //   } else if (s[i] === "L") {
  //     return (result += 50);
  //   } else if (s[i] === "C") {
  //     return (result += 100);
  //   } else if (s[i] === "D") {
  //     return (result += 500);
  //   } else if (s[i] === "M") {
  //     return (result += 1000);
  //   }
  // }
  // return result;
  // Symbol      Value
  // ------------------
  // I           1
  // V           5
  // X           10
  // L           50
  // C           100
  // D           500
  // M           1000
  // let result = "";
  // // 아라비아 심볼과 값을 어디에 담아놓고 꺼내 사용..
  // for (let i = 0; i < s.length; i++) {
  //   // 각 요소의왼쪽에 있으면 뺄셈, 오른쪽이면 덧셈실행.
  // }
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return s.split("").reduce((ac, cu, i) => {
    let number = roman[cu]; // cu에는 현재값 즉, 객체의 키가 들어가 그 값을 받아옴
    if (cu === "I") {
      number = s[i + 1] === "V" || s[i + 1] === "X" ? -number : number; // I가 앞쪽에 위치하고 그 뒤에 V나 X가 있는경우는 -값
    } else if (cu === "X") {
      number = s[i + 1] === "L" || s[i + 1] === "C" ? -number : number;
    } else if (cu === "C") {
      number = s[i + 1] === "D" || s[i + 1] === "M" ? -number : number;
    }
    return ac + number; // 누적값에 number을 더함.
  }, 0);
}

/*
    팩토리얼
    
    함수 factorial에는 0보다 크거나 같은 정수 num이 주어집니다. 
    이때, num의 팩토리얼을 리턴해주세요.
    팩토리얼은 그 수보다 작거나 같은 모든 양의 정수의 곱을 말합니다.
    예를 들어 3의 경우 (3 * 2 * 1) 이므로 6이 됩니다.
    제한사항 ) 
    정수 num
    (0 ≤ num ≤ 12)
    단, 0의 팩토리얼은 1입니다.
    입출력 예시 )
    input   output
    ---------------
    3       6
    10      3628800
    
*/
//

function factorial(num) {
  // 여기에서 작업하세요
  //num보다 작거나 같은 모든 양의 정수의 곱
  //num은 0보다 크거나 같음. 0의 펙토리얼은 1
  // let answer = 1;
  // if (num <= 12) {
  //   // 나머지의 경우 answer 에 담아 곱해줌
  //   answer *= num;
  // }
  // return num === 0 ? 1 : answer; // num이 0 일 경우에는 1을리턴, 아니면 answer을 리턴
  if (num == 0) return 1; //0의 펙토리얼은 1(먼저 예외처리)
  let answer = 1; // answer에 곱한것 넣기위해 초기값은 1로
  for (let i = 1; i <= num; i++) {
    //그 수보다 작거나같은 모든숫자를 i에 넣기위해 num보다 크거나 같다는 반복문 사용
    answer *= i; // answer에 담아 곱해나감
  }
  return answer; // answer을 리턴
}

//점의 위치 구하기
function solution(dot) {
  // dot은 [x,y]를 담은 배열.
  //각인덱스로 판별가능.
  //0은 없음
  if (dot[0] > 0 && dot[1] > 0) return 1;
  if (dot[0] < 0 && dot[1] > 0) return 2;
  if (dot[0] < 0 && dot[1] < 0) return 3;
  if (dot[0] > 0 && dot[1] < 0) return 4;
}

//편지
function solution(message) {
  // 공백 등도 합쳐야함.
  return message.length * 2;
}

//********** */
/*
    filter 함수를 구현해보세요.
    🚨 filter 메소드를 사용하시면 안됩니다!!

    함수 myFilter는 배열 array와 함수 callbackFn을 매개변수로 받습니다.

    callbackFn은 두 가지 매개변수를 받습니다. 
        callbackFn(element, index)
    주어진 element와 index를 가지고 조건에 맞는지 판별해 
    true 또는 false를 리턴하는 함수입니다. 

    myFilter 함수에 주어진 array의 각 요소와 그 인덱스를 callbackFn에 넘겨주어 
    callbackFn 함수가 true를 리턴하는 요소들만 모아서 
    새로운 배열을 리턴해주세요.

    element는 배열에서 판별할 한개의 요소를 주어야합니다.
    index는 그 요소의 인덱스 값을 주어야합니다. 

    입출력 예시 )
    input 
    -----------------------------------------------
    const array = [0, 1, 2, 3]
    const callbackFn = (element, index) => {
        return element % 2 === 0
    }
    - element가 짝수일 경우 true를 리턴, 그 외는 false 리턴
    
    output
    ------
    [0, 2]
    
    제한조건 ) 
    Array의 filter() 함수를 사용하지 마세요.
    callbackFn의 조건은 테스트 케이스마다 달라집니다. 
*/

function myFilter(array, callbackFn) {
  // 여기에서 작업하세요.

  // callbackFn = array.map((el) => {
  //   // 배열을 맵으로 뿌림.
  //   return el % 2 === 0 ? true : false; // el이 짝수면 true 아니면 false
  // });
  // return callbackFn;
  const result = []; //***** */
  array.forEach((element, index) => {
    if (callbackFn(element, index)) result.push(element);
  });

  return result;
}

//****** */
function myFilter(array, callbackFn) {
  const myArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i], i)) myArray.push(array[i]);
  }
  console.log(myArray);
  return myArray;
}

//
/*
    
    하나 더하기

    우리는 매우 큰 정수를 가지고 있으며, 이 숫자는 arr 배열 안에 각각 쪼개져 있습니다.
    arr 배열이 표현하고 있는 정수에 1을 더한 수를 arr 같이 배열로 리턴해주세요.

    예를 들어, 123이라는 숫자를 가진다면, arr 배열에 [1,2,3]으로 쪼개져 들어옵니다.
    이 배열은 정수 123을 표현하고 있으므로 이 수에 하나를 더해준 수는 124가 됩니다.
    이 수를 배열 타입인 [1,2,4]를 반환해주세요.
    
    단, arr 배열이 0으로 시작되는 경우는 없습니다.
    arr 배열의 길이는 1 이상 100 이하입니다.
    arr 배열 안의 요소는 0 이상 9 이하인 정수입니다.
    자바스크립트 정수로 표현할 수 있는 최대 수는 6145390195186705000입니다.
    테스트케이스에 유의하여 문제를 풀어주세요.

    input       output
    ------------------
    arr
    ------------------
    [1,2,3]     [1,2,4]
    [3,4,5,1]   [3,4,5,2]

*/ /*********** */

function plusOne(arr) {
  // 여기에서 작업하세요
  // 배열의 맨 마지작부분에 1을 더해 리턴. 9일경우 1,0리턴.
  // const result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   // 배열의 맨마지막 값에 +1
  //   if (arr[arr.length - 1]) {
  //     arr[arr.length - 1] + 1;
  //   }
  //   return arr[arr.length - 1] === 9 ? [1, 0] : result.push(arr[i]);
  //   // 맨 마지막값이 9일 경우에는 배열에 1과 0을 담고, 아닐경우 result에 담아 출력

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i]++;
    if (arr[i] < 10) return arr;
    arr[i] = 0;
  }
  arr.unshift(1); //unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
  return arr;
}

//************* */
function plusOne(arr) {
  digits[arr.length - 1] = arr.at(-1) + 1;

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] > 9) {
      arr[i] = 0;
      arr[i - 1] === undefined ? arr.unshift(1) : (arr[i - 1] = arr[i - 1] + 1);
    }
  }

  return arr;
}

//주사위의 개수
function solution(box, n) {
  // box = [가로, 세로 , 높이]
  // n은 주사위 모서리길이
  // Math.floor(가로 / 모서리)
  // // 세로
  // // 높이
  let a = Math.floor(box[0] / n);
  let b = Math.floor(box[1] / n);
  let c = Math.floor(box[2] / n);
  let answer = a * b * c;
  return answer;
}
