import styled from 'styled-components';
import oc from 'open-color';
import PageTemplate from '../components/PageTemplate';

const Overflow = () => {
  return (
    <PageTemplate>
      <h2>Overflow 속성</h2>

      <PaneBlock>
        <p>overflow는 position보다 float속성과 연관되어 있음</p>
        <p>
          overflow ↔ position: parent 밖을 벗어난 영역을 삭제(overflow: hidden)
        </p>
        <p>
          overflow부분은 '카드UI'에서 썸네일을 넣을 때 굉장히 민감한 부분이다.
          DB에서 불러온 썸네일 크기를 %로 줄여서 배치하다보면, 세로그립으로
          촬영한 사진들은 가로부분의 공백이 발생한다. 이때는
          overflow:hidden설정으로 튀어나간 이미지 부분을 모두 잘라버려야 하는데,
          이때 웹 사이트가 아마추어 실험용 디자인처럼 보일 수 있다. 이럴 경우,
          서버에서 불러온 이미지의 가로 픽셀값의 너비에 따라 세로그립이라면
          overflow:hidden을 실행하고, 정상적인 이미지라면 %로 줄이는 방식을
          적용해야 한다. 그러나 float을 레이아웃에 사용하면서, overflow의
          'hidden'은 반드시 필요한 속성이 되었다.
        </p>
      </PaneBlock>
    </PageTemplate>
  );
};

export default Overflow;

// Styles
const PaneBlock = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid ${oc.cyan[9]};
`;
