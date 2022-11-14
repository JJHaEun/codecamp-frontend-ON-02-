export default function TypescriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }
  type IProfile2 = {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  };
  //1.Pick 타입

  type aaa = Pick<IProfile, "name" | "age">;

  //2.Omit 타입
  type bbb = Omit<IProfile, "school">;

  //3.Partial 타입 // 앞에 물음표 붙은 형태
  type ccc = Partial<IProfile>;

  //4.Required 타입
  type ddd = Required<IProfile>;

  //5.Record 타입
  //   유니온타입
  type r = "철수" | "유리" | "짱구";
  let child: r;
  child = "유리";

  type fff = Record<r, IProfile>;

  // type 과 interface차이
  //   선언병합

  interface IProfile {
    candy: number;
  }
  let profile: Partial<IProfile> = {}; //?가 붙지 않으면 초기값 필요. 초기값쓰지 않으려면 Partial타입으로 바꾸기.
  profile.candy = 24;
}
