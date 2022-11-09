import * as s from "./FetchDeleteProducts.styles";

export default function FetchProductsUI(props) {
  return (
    <>
      {props.data?.fetchProducts.map((el) => (
        <s.Row key={el._id}>
          <div>
            <input type="checkbox" />
          </div>
          <s.Column>판매자: {el.seller}</s.Column>
          <s.Column>판매물건: {el.name}</s.Column>
          <s.Column>상품설명: {el.detail}</s.Column>
          <s.Column>가격: {el.price}</s.Column>
          <s.Column>
            <button id={el._id} onClick={props.onClickDelete}>
              삭제
            </button>
          </s.Column>
        </s.Row>
      ))}
    </>
  );
}
