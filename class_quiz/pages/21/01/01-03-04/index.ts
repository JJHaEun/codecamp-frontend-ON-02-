import { useState } from "react";

["철수", "영희", "훈이", "맹구"].map((_, index) =>
  console.log(`영희는 ${index}번째 칸에 들어있습니다.`)
);

//   ————————
const [state, setState] = useState(0);

setState((qwer) => qwer + 1);
