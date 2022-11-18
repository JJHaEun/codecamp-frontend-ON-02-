import { MouseEvent, useState } from "react";
import Pagenation01UI from "./pagenation01.presenter";
import { IPaginations01Props } from "./pagenation01.types";

export default function Pagenation01(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [visitPage, setVisitPage] = useState(1);

  const lastPage = props.countBoards ? Math.ceil(props.countBoards / 10) : 0;

  const onClickPage = async (event: MouseEvent<HTMLSpanElement>) => {
    const visitPage = Number(event.currentTarget.id);
    setVisitPage(visitPage);
    await props.refetch({ page: visitPage });
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setVisitPage((prev) => prev - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      setVisitPage((prev) => prev + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };
  return (
    <Pagenation01UI
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickPage={onClickPage}
      visitPage={visitPage}
      lastPage={lastPage}
      startPage={startPage}
    />
  );
}
