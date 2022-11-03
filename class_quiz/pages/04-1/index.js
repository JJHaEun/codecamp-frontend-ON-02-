import axios from "axios";

export default function Restquiz0401() {
  const onClickAsync = async () => {
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result);
  };
  return <button onClick={onClickAsync}>REST-API 요청하기</button>;
}
