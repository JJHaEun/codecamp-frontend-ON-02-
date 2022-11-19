import { getDate } from "../../../commons/utils/utils";
import { ICommentWritListUIProps } from "./CommentsList.types";
import * as S from "./CommentsList.styles";
import { Rate, Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentWritListUI(props: ICommentWritListUIProps) {
  return (
    <div>
      {props.isOpenDelete && (
        <Modal
          title="삭제"
          visible={true}
          onOk={props.OnclickDeleteComment}
          onCancel={props.handleCancel}
        >
          <div>비밀번호를 입력후,ok버튼을 누르시면 삭제됩니다</div>
          <div> 비밀번호 입력</div>
          <input type="password" onChange={props.onChangeDeletePassword} />
        </Modal>
      )}
      <S.CommentList>
        <S.Scroll>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchBoardComments.map((el, index) => (
              <S.All key={el._id} id={el.writer}>
                <S.Img src="/messenger.png"></S.Img>

                <div>
                  <Rate allowHalf disabled value={el?.rating} />
                  <S.Writer>{el?.writer}</S.Writer>
                  <S.Contents>{el?.contents}</S.Contents>
                  <S.Date>{getDate(el?.createdAt)}</S.Date>
                  <S.ButtonGroup>
                    <div>
                      <S.Button>수정</S.Button>
                    </div>
                    <div>
                      <S.Button2
                        id={el._id}
                        onClick={props.onClickcheckPermissionDeleteModal}
                      >
                        <S.ButtonImg
                          id={el._id}
                          src="/delete-button.png"
                        ></S.ButtonImg>
                      </S.Button2>
                    </div>
                  </S.ButtonGroup>
                </div>
              </S.All>
            )) ?? <div></div>}
          </InfiniteScroll>
        </S.Scroll>
      </S.CommentList>
    </div>
  );
}
