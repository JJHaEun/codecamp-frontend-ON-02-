import styled from "@emotion/styled";

const Banner = styled.div`
  height: 300px;
  background: pink;
`;

const ImgDD = styled.img`
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
export default function LayOutBanner() {
  return (
    <Div>
      <Banner>
        <ImgCenter>
          <ImgDD src="/DD.jpeg" />
        </ImgCenter>
      </Banner>
    </Div>
  );
}
