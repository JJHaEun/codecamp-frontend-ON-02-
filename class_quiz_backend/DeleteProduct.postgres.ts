import {
  BaseEntity,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class DeleteProduct extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @DeleteDateColumn()
  deletedAt!: Date;
}
