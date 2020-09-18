import styled from 'styled-components';
import oc from 'open-color';
import PageTemplate from '../components/PageTemplate';

const Position = () => {
  return (
    <PageTemplate>
      <h2>Position 속성</h2>

      <p>
        relative는 상대적, absolute는 절대적 다시 말해 움직인다면
        상대적(relative)
      </p>
      <p>문제는 하위 태그에 absolute가 적용되면 상위 태그의 좌표값이 무시됨</p>

      <PaneBlock>
        <TestPane>
          <h2>공간은 전부 position: absolute</h2>

          <PositionPane>공간을 차지하는 영역1</PositionPane>
          <PositionPane>공간을 차지하는 영역1</PositionPane>
          <PositionPane>공간을 차지하는 영역1</PositionPane>

          <h2>푸터 태그태그</h2>
        </TestPane>

        <p>
          이런 상황을 정리하려면 아래 법칙
          <ul>
            <li>
              children position: absolute → parent height 속성을 사용해야 부모
              공간 확보
            </li>
            <li>
              children position: absolute → parent position: relative하면
              parent의 좌표 기준점으로 children이 움직임
            </li>
          </ul>
        </p>

        <TestPane>
          <h2>공간은 전부 position: absolute</h2>

          <PositionModify>
            <PositionPane style={{ left: '30px' }}>
              공간을 차지하는 영역1
            </PositionPane>
            <PositionPane style={{ left: '200px' }}>
              공간을 차지하는 영역1
            </PositionPane>
            <PositionPane style={{ left: '370px' }}>
              공간을 차지하는 영역1
            </PositionPane>
          </PositionModify>

          <h2>푸터 태그태그</h2>
        </TestPane>
      </PaneBlock>
    </PageTemplate>
  );
};

export default Position;

// Styles
const PaneBlock = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid ${oc.cyan[9]};
`;

const TestPane = styled.div`
  display: block;
  border: 1px solid ${oc.orange[9]};
`;

const PositionModify = styled.div`
  position: relative;
  height: 30px;
  border: 1px solid ${oc.green[9]};
`;

const PositionPane = styled.div`
  position: absolute;
  border: 1px solid ${oc.red[9]};
`;
