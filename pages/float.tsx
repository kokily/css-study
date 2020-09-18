import styled from 'styled-components';
import oc from 'open-color';
import PageTemplate from '../components/PageTemplate';

const Float = () => {
  return (
    <PageTemplate>
      <h2>Float 속성</h2>

      <p>Float은 원래 이미지를 띄워 정렬하기 위한 목적으로 만들어진 속성</p>
      <p>하지만 float 속성으로 레이아웃을 설계할 수 있음</p>
      <p>float을 사용할 때 마지막에 자동으로 붙는 div는 clear: both 적용</p>

      <PaneBlock>
        <hr />

        <Image src="/user.png" alt="" />
        <Ptag>여기는 p 태그 입니당.</Ptag>
        <Ptag>여기도 p 태그 입니당. 조금 더 길게 뽑기</Ptag>

        <hr />
      </PaneBlock>

      <PaneBlock>
        <hr />

        <ImageLeft src="/user.png" alt="" />
        <Ptag>여기는 img에 float: left</Ptag>
        <Ptag style={{ clear: 'both' }}>
          여기도 p 태그 입니당. 조금 더 길게 뽑기
        </Ptag>

        <hr />
      </PaneBlock>
    </PageTemplate>
  );
};

export default Float;

// Styles
const PaneBlock = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid ${oc.cyan[9]};
  overflow: hidden;
`;

const Image = styled.img`
  border: 1px solid ${oc.red[9]};
`;

const ImageLeft = styled.img`
  float: left;
  border: 1px solid ${oc.red[9]};
`;

const Ptag = styled.p`
  border: 1px solid ${oc.green[9]};
`;
