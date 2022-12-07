import Dompurify from "dompurify";
import { IDetailBoardPagUIProps } from "./detail.types";

export default function DetailBoardPagUI(props: IDetailBoardPagUIProps) {
  return (
    <>
      <div>작성자: {props.data?.fetchBoard.writer}</div>
      <div>제목: {props.data?.fetchBoard.title}</div>
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(props.data?.fetchBoard.contents)),
          }}
        ></div>
      )}
    </>
  );
}
