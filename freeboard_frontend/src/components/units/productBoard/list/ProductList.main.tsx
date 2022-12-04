import { IProductListMainUIProps } from "./ProductsList.types";

export default function ProductListMainUI(props: IProductListMainUIProps) {
  return (
    <>
      <div key={props.el._id}>
        <div>{props.el?.name}</div>
        <div>{props.el?.remarks}</div>
        <div>{props.el?.createdAt}</div>
        <div>
          <div>{props.el?.seller?.name}</div>
          <div>{props.el?.pickedCount}</div>
        </div>
      </div>
    </>
  );
}
