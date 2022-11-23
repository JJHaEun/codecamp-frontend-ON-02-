import { DataSource } from "typeorm";
import { CreateProduct } from "./CreateProduct.postgres";
import { DeleteProduct } from "./DeleteProduct.postgres";
import { FetchProduct } from "./FetchProduct.postgres";
import { FetchProducts } from "./FetchProducts.postgres";
import { UpdateProduct } from "./UpdateProduct.postgres";

// const { ApolloServer, gql } = require("apollo-server"); => 옛날방식(commonjs)
import { ApolloServer, gql } from "apollo-server"; //      => 요즘방식(module)
// The GraphQL schema
const typeDefs = gql`


input CreateProductInput { # 입력에 들어가는 타입은 반드시 input이라고 바꾸기
    writer: String
    title: String
    contents: String
  }
  input UpdateProductInput {
   name:String,
   detail:String,
   price:Int
  }

  input DeleteProductInput {
   number:Int,
  }
type fetchProducts{
  _id:ID,
  seller:String,
  name:String,
  detail:String,
  price:Int
}

  type Query {
    fetchProduct(number:Int),
    fetchProducts:[fetchProducts]
  },
  type Mutation {
    createProduct(seller:String,createProductInput:CreateProductInput!):String,
    updateProduct(updateProductInput: UpdateProductInput!):String,
    deleteProduct(deleteProductInput:DeleteProductInput!):String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchProducts: async () => {
      const result = await FetchProducts.find();
      return result;
    },
    fetchProduct: async () => {
      FetchProduct.findOne({ where: { number: 3 } });
    },
  },
  Mutation: {
    createProduct: async (parent: any, args: any, context: any, info: any) => {
      await CreateProduct.insert({
        ...args.createProductInput,
      });
      return "게시글 등록에 성공하였습니다~";
    },
    // updateProduct: async (parent: any, args: any, context: any, info: any) => {
    //   await UpdateProduct.update({ number: 3 }, { detail: "즐거운 점심시간" });
    //   return "게시글 수정에 성공하였습니다";
    // },
    // deleteProduct: async (parent: any, args: any, context: any, info: any) => {
    //   await DeleteProduct.update({ number: 3 }, { deletedAt: new Date() });
    //   return "게시글이 삭제되었습니다";
    // },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
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
  entities: [
    CreateProduct,
    DeleteProduct,
    FetchProduct,
    FetchProducts,
    UpdateProduct,
  ],
});
AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다!!!");
    server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다");
    console.log("원인: ");
    console.log(error);
  });
