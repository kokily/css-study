import { useState } from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import PageTemplate from '../components/PageTemplate';

interface BlockProps {
  none?: boolean;
}

const Index = () => {
  const [none, setNone] = useState(false);

  const onNone = () => {
    setNone(!none);
  };

  return (
    <PageTemplate>
      <h2>Display 속성</h2>

      <PaneBlock>
        <h3>none: 화면에서 보이지 않게 만든다.</h3>
        <button onClick={onNone}>None 클릭</button>
        <NoneBlock none={none}>
          <p>여기가 사라져용~</p>
        </NoneBlock>
      </PaneBlock>

      <PaneBlock>
        <h3>block: 태그만의 영역, 블럭을 만든다.</h3>
        <BlockBlock>여기는 block 태그</BlockBlock>
        <BlockBlock>여기도 block 태그</BlockBlock>
        <BlockBlock>여기또한 block 태그</BlockBlock>
      </PaneBlock>

      <PaneBlock>
        <h3>inline: 한 행에 나열 할 수 있게 한다.</h3>
        <p>inline은 'width'와 'height'를 지정할 수 없다</p>
        <p>그래서 글이 길어지면 자동으로 다음 줄로 내려감!</p>
        <InlineBlock>여기는 block 태그</InlineBlock>
        <InlineBlock>여기도 block 태그</InlineBlock>
        <InlineBlock>여기또한 block 태그</InlineBlock>
        <InlineBlock>
          여기는 줄이 길어서 넘어가는지 테스트 해보려고 딥따 길게 글 적는 중!
        </InlineBlock>

        <p>width, height를 적용하기 위해 inline-block 설정</p>
        <InlineModify>inline-block: with 50%, height 50%</InlineModify>
        <InlineModify>inline-block: with 50%, height 50%</InlineModify>
        <InlineAuto>inline-block: width, height auto</InlineAuto>
        <InlineAuto>inline-block: width, height auto</InlineAuto>
        <InlineAuto>inline-block: width, height auto</InlineAuto>
      </PaneBlock>
    </PageTemplate>
  );
};

export default Index;

// Styles
const PaneBlock = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid ${oc.cyan[9]};
`;

const NoneBlock = styled.div<BlockProps>`
  border: 1px solid ${oc.grape[9]};
  ${(props) =>
    props.none &&
    css`
      display: none;
    `};
`;

const BlockBlock = styled.div`
  display: block;
  border: 1px solid ${oc.orange[9]};
`;

const InlineBlock = styled.div`
  display: inline;
  border: 1px solid ${oc.red[9]};
`;

const InlineModify = styled.div`
  display: inline-block;
  width: 50%;
  height: 50%;
  border: 1px solid ${oc.indigo[9]};
`;

const InlineAuto = styled.div`
  display: inline-block;
  width: auto;
  height: auto;
  border: 1px solid ${oc.indigo[9]};
`;
