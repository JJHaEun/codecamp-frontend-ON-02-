export default fuction Qqq(){
    //타입추론
    let aaa = "안녕하세요"
    aaa = 3

    //타입명시
    let bbb: string ="반가워요"

    //문자타입 (선언과 할당 분리)
    let ccc: string
    ccc="반가워요"
    ccc=5
    
    //숫자타입
    let ddd: number = 9
    ddd = "철수"

    //불린타입
    let eee: boolean
    eee = false
    eee = "false" //==> 문자열이라 true. 그러나 지금 문자열이기에 타입안맞음
    eee = "철수"
    eee = 9
    eee = true 

    //배열타입
    let fff: number[] = [1 , 2 , 3 , 4 , 5, "안녕"]
    let ggg: string[] = ["철수","형희","훈이",1]
    let golden: (string | number)[] = ["우리집","강아지는","복슬","강아지",1,2,3,5]

    let hhh: (string | number)[] = ["철수","영희","훈이",10]//타입을 추론하여 어떤 타입이 들어가는지 알아보기(마우스올리면 보임)
   //객체타입
   interface IProfile {
    name: string
    age: number | string
    school: string
   }
   
   const profile:IProfile = {
    name: "철수",
    age:7,
    school: "다람쥐초등학교"
   }
   profile.age = "8살"

   //함수타입// ==> 어디서 몇번이든 호출 가능하므로 타입추론 할 수 없음 . so, 반드시 타입명시필요.
   
   const add = (number1: number,number2: number,unit: string):string => {
        return number1 + number2 + unit
   }
   const result = add(1000,2000,"원")//결과의 리턴타입도 예측 가능
   const result2 = add(53,50000,"만원")
   
   //any타입
    let qqq: any = "철수" //자바스크립트와 동일(타입정해지지 않음)



    return <div > </div>
}