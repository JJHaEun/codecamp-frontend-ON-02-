console.log("반갑습니다");

const aaa: number = 2;

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

new DataSource({
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
