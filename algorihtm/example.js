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
