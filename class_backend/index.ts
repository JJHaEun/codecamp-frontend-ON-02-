// console.log("반갑습니다");

// const aaa: number = 2;

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

// const { ApolloServer, gql } = require("apollo-server"); => 옛날방식(commonjs)
import { ApolloServer, gql } from "apollo-server"; //      => 요즘방식(module)
// Docs
const typeDefs = gql`
  input CreateBoardInput { # 입력에 들어가는 타입은 반드시 input이라고 바꾸기
    writer: String
    title: String
    contents: String
  }

  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }
  type Query {
    fetchBoards: [MyBoard]
  }
  type Mutation {
    # 연습용 (example방식)
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용(backend 방식) ==> 하나로 묶기 !붙이면 필수 , 안붙이면 선택
    # 이름 달라도 됨. 그리고 : 뒤는 타입이기에 앞쪽과 뒤쪽 이름도 달라도됨...
    createBoard(createBoardInput: CreateBoardInput!): String
  }
`;

// API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 모두꺼내기
      const result = await Board.find();
      // 한개만 골라 꺼내기
      //  Board.findOne({where: {number:3}})
      return result; // 배열안의 객체 형태[{number:1,writer:"철수",title:"안녕하세요~",contents:"반갑습니다~~"},{},{}...]
    },
  },
  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        // 데이터 넣기. 등록되는동안 기다려야함

        // 하나하나 모두 입력하는 방식
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,

        ...args.createBoardInput, // 가운데 알맹이만 뽑으면 스프레드로 한번에 표현가능, 위와 동일함
      });
      return "게시글 등록에 성공하였습니다~";
    },
    // updateBoard: async () => {
    //   // 수정하기   앞에께 조건, 뒤에가 바꿔줘
    //   //          3번 개시물 작성자를 유리로 바꿔줘
    //   await Board.update({ number: 3 }, { writer: "유리" });
    //   return "게시글 수정에 성공하였습니다";
    // },
    // deleteBoard: async () => {
    //   await Board.delete({ number: 3 }); // 3번 게시글을 삭제해줘

    //두가지 방법 중 하나 사용
    //  실제 삭제 안하고 삭제한것처럼꾸밈    //isDeleted라는 컬럼 만들고 타입은 boolean.
    // await Board.update({number:3},{isDeleted:true})// 실무에서는 실제로 삭제하지않고 isDeleted라는 컬럼이 true면 삭제되었다고 가정.
    // await Board.update({number:3},{deletedAt: new Date()})// => deletedAt이 null이면 삭제 안된게시글 .new Date() 시간이 들어가있으면 그 시간에 삭제된 게시글
    // return "게시글 삭제에 성공하였습니다";
    // },
  },
};

//Docs와 API합쳐 서버 만듬
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  //선택한 사이트만 cors풀어주고 싶을때
  // cors:{
  //   origin:["http://naver.com","http://qqq.com"]
  // }
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.114.80",
  port: 5052,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});
AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다!!!");

    //DB연결까지 모두 끝나고 가장 마지막에 실행. 다른사람들의 접속을 기다리기 위해서
    server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다");
    console.log("원인: ");
    console.log(error);
  });
