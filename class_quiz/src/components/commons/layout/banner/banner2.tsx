import styled from "@emotion/styled";

const Banner = styled.div`
  height: 300px;
  background: pink;
`;

const ImgTT = styled.img`
  width: 150px;
  height: 200px;
  justify-content: center;
  align-items: center;
`;
const ImgCenter = styled.div`
  display: flex;
  justify-content: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function LayOutBanner2() {
  return (
    <Div>
      <Banner>
        <ImgCenter>
          <ImgTT src="/TT.jpeg" />
        </ImgCenter>
      </Banner>
    </Div>
  );
}
