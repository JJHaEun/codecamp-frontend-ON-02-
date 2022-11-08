export default function ProductWriteUI(props) {
  return (
    <>
      판매자: <input type="text" onChange={props.onChangeSeller} />
      상품명: <input type="text" onChange={props.onChangeName} />
      상품내용: <input type="text" onChange={props.onChangeDetail} />
      상품가격 <input type="text" onChange={props.onChangePrice} />
      <button onClick={props.onClickButton}>상품 등록</button>
    </>
  );
}
