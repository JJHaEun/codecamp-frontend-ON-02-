import * as St from "./Comments.styles";
import { ICommentsWriteUIProps } from "./Comments.types";
import { Rate } from "antd";

export default function CommentsWriteUI(props: ICommentsWriteUIProps) {
  return (
    <>
      <St.Max>
        <St.Under>
          <St.Com>
            <St.CommentImg src="/comments.png" />

            <St.CommentTitle>댓글달기</St.CommentTitle>
          </St.Com>
          <div>
            <St.InputGroup>
              <St.InPut
                type="text"
                placeholder="작성자"
                onChange={props.onChangeWriter}
              />
              <St.InPut
                type="text"
                placeholder="비밀번호"
                onChange={props.onChangePassWord}
              />
            </St.InputGroup>
            <Rate allowHalf onChange={props.onChangeStar} />
            <div>
              <St.TextArea
                placeholder="여기에서 댓글을 작성하세요"
                onChange={props.onChangeComment}
              ></St.TextArea>
            </div>
          </div>
        </St.Under>
        <St.Bt>
          <St.Button3 onClick={props.onClickCommentSubmit}>등록하기</St.Button3>
        </St.Bt>
      </St.Max>
    </>
  );
}
