import { getDate } from "../../../commons/utils/utils";
import { ICommentWritListUIProps } from "./CommentsList.types";
import * as S from "./CommentsList.styles";
export default function CommentWritListUI(props: ICommentWritListUIProps) {
  return (
    <S.CommentList>
      {props.data?.fetchBoardComments.map((el: any) => (
        <S.All id={el.writer} onClick={props.OnClickCommentsBody}>
          <S.Img src="/messenger.png"></S.Img>

          <div>
            <div>{el?.rating}</div>
            <S.Writer>{el?.writer}</S.Writer>
            <S.Contents>{el?.contents}</S.Contents>
            <S.Date>{getDate(el?.createdAt)}</S.Date>
            <S.ButtonGroup>
              <div>
                <S.Button>수정</S.Button>
              </div>
              <div>
                <S.Button2 id={el._id} onClick={props.OnclickDeleteComment}>
                  <S.ButtonImg
                    id={el._id}
                    src="/delete-button.png"
                  ></S.ButtonImg>
                </S.Button2>
              </div>
            </S.ButtonGroup>
          </div>
        </S.All>
      ))}
    </S.CommentList>
  );
}
