import { getDate } from "../../../commons/utils/utils";
import { IProductListMainUIProps } from "./ProductsList.types";

export default function ProductListMainUI(props: IProductListMainUIProps) {
  return (
    <>
      <div key={props.el._id}>
        <div>
          {props.el.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <img key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </div>
        <div onClick={props.onClickProductDetail} id={props.el._id}>
          {props.el?.name}
        </div>
        <div>{props.el?.remarks}</div>
        <div>{getDate(props.el?.createdAt)}</div>
        <div>
          <div>{props.el?.seller?.name}</div>
          <div>{props.el?.pickedCount}</div>
        </div>
      </div>
    </>
  );
}
