import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FetchProducts extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;

  //   @Column({ type: "int" })
  //   page!: number;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "int" })
  price!: number;
}
