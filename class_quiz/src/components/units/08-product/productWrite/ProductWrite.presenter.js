import * as s from "./ProductWrite.styles";

export default function ProductWriteUI(props) {
  return (
    <>
      판매자:
      <s.Input
        type="text"
        color="yellow"
        border="2px solid green "
        onChange={props.onChangeSeller}
      />
      상품명:
      <s.Input
        type="text"
        color="yellow"
        border="2px solid green "
        onChange={props.onChangeName}
      />
      상품내용:
      <s.Input
        type="text"
        color="yellow"
        border="2px solid green "
        onChange={props.onChangeDetail}
      />
      상품가격
      <s.Input
        type="text"
        color="yellow"
        border="2px solid green "
        onChange={props.onChangePrice}
      />
      <s.Bt
        clicked={props.bt}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickButton}
      >
        {props.isEdit ? "상품 수정" : "상품 등록"}
      </s.Bt>
    </>
  );
}
