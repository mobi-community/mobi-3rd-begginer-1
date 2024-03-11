//재사용이 되는 컴포넌트일때

import { styled } from "styled-components";

const OneMovieContent = () => {
  return (
    <Wrapper>
      <Poster img="" />
      <HoverReveal>
        <Content>
          <ContentScore>
            <span>★</span>
            <span>9.0</span>
            <hr />
          </ContentScore>

          <ContentTitle>
            <div> Title : {title}</div>
            <div> Info : {movie.overview}</div>
          </ContentTitle>
        </Content>
      </HoverReveal>
    </Wrapper>
  );
};
export default OneMovieContent;
const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;

const Poster = styled.img`
  width: 245px;
  height: 352px;
  border-radius: 5px;
`;

const Content = styled.div`
  padding: 30px;
`;
const ContentScore = styled.div`
  font-size: 20px;
  span:first-child {
    margin-right: 10px;
    color: #ffd600;
  }
`;
const ContentTitle = styled.div`
  & > div {
    padding-top: 20px;
  }
  div:first-child {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 10px;
  }
`;

const HoverReveal = styled.div`
  width: 245px;
  height: 352px;

  border-radius: 5px;
  line-height: 20px;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  overflow: hidden;

  ${Wrapper}:hover & {
    display: block;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
