import * as St from "./Comments.styles";
import { ICommentsWriteUIProps } from "./Comments.types";

export default function CommentsWriteUI(props: ICommentsWriteUIProps) {
  return (
    <>
      <St.Max>
        <St.Under>
          {!props.isEdit && (
            <St.Com>
              <St.CommentImg src="/comments.png" />

              <St.CommentTitle>댓글달기</St.CommentTitle>
            </St.Com>
          )}
          <div>
            <St.InputGroup>
              <St.InPut
                id="writer"
                type="text"
                placeholder="작성자"
                onChange={props.onChangeWriter}
                value={props.writer || (props.el?.writer ?? "")}
              />
              <St.InPut
                id="password"
                type="text"
                placeholder="비밀번호"
                onChange={props.onChangePassWord}
                value={props.password}
              />
            </St.InputGroup>
            <St.Star
              allowHalf
              onChange={props.onChangeStar}
              value={props.value || props.el?.rating || 0}
            />
            <div>
              <St.TextArea
                placeholder="여기에서 댓글을 작성하세요"
                onChange={props.onChangeComment}
                value={
                  props.isEdit
                    ? props.contents || props.el?.contents
                    : props.contents
                }
              ></St.TextArea>
            </div>
          </div>
        </St.Under>
        <St.Bt>
          <St.Button3
            onClick={
              props.isEdit
                ? props.onClickEditFinish
                : props.onClickCommentSubmit
            }
          >
            {props.isEdit ? "수정" : "등록"}하기
          </St.Button3>
        </St.Bt>
      </St.Max>
    </>
  );
}
