import {
  BaseEntity,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class DeleteProduct extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  productId!: string;
  @DeleteDateColumn()
  deletedAt!: Date;
}
