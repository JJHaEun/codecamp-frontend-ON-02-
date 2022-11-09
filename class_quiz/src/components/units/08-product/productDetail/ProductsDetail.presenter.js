import * as s from "./ProductsDetail.styles";

export default function FetchProductsUI(props) {
  return (
    <>
      <s.Row>
        <s.Column>판매자: {props.data?.fetchProduct?.seller}</s.Column>
        <s.Column>상품명: {props.data?.fetchProduct?.name}</s.Column>
        <s.Column>상품내용: {props.data?.fetchProduct?.detail}</s.Column>
        <s.Column>상품가격: {props.data?.fetchProduct?.price}</s.Column>
        <s.Column>
          <button onClick={props.onClickMoveEdit}>수정하기</button>
        </s.Column>
      </s.Row>
    </>
  );
}
