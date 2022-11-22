import { DataSource } from "typeorm";
import { CreateProduct } from "./CreateProduct.postgres";
import { DeleteProduct } from "./DeleteProduct.postgres";
import { FetchProduct } from "./FetchProduct.postgres";
import { FetchProducts } from "./FetchProducts.postgres";
import { UpdateProduct } from "./UpdateProduct.postgres";

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
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다");
    console.log("원인: ");
    console.log(error);
  });
