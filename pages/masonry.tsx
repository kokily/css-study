import styled from 'styled-components';
import oc from 'open-color';
import PageTemplate from '../components/PageTemplate';
import { shadow, media } from '../styles';

const Masonry = () => {
  return (
    <PageTemplate>
      <PaneBlock>
        <Wrapper>
          <Card
            width="350"
            height="150"
            title="메롱"
            body="메렁메렁메렁메렁메렁"
          />
          <Card
            width="350"
            height="230"
            title="메롱2"
            body="메렁메렁메렁메렁메렁"
          />
          <Card
            width="350"
            height="350"
            title="메롱3"
            body="메렁메렁메렁메렁메렁"
          />
          <Card
            width="350"
            height="100"
            title="메롱4"
            body="메렁메렁메렁메렁메렁"
          />
        </Wrapper>
      </PaneBlock>
    </PageTemplate>
  );
};

const Card = ({
  title,
  body,
  width,
  height,
}: {
  title: string;
  body: string;
  width: string;
  height: string;
}) => (
  <CardBlock>
    <img src={`https://via.placeholder.com/${width}x${height}`} alt="" />
    <div className="content">
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="footer">
        <p>웅얼웅얼</p>
      </div>
    </div>
  </CardBlock>
);

export default Masonry;

// Styled Components
const PaneBlock = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid ${oc.cyan[9]};
`;

const Wrapper = styled.div`
  display: box;
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  -ms-flex-line-pack: justify;
  padding: 30px;
`;

const CardBlock = styled.div`
  width: 23%;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  ${media.large} {
    width: 30%;
    margin: 10px 10px;
  }

  ${media.medium} {
    width: 46%;
    margin: 10px 10px;
  }

  ${media.small} {
    width: 100%;
    margin: 10px 0px;
  }

  &:hover {
    transition: 0.3s all;
    transform: translateY(-2%);
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 200px;
    display: block;
  }

  .content {
    display: block;
    margin: 0;
    padding: 5px 15px 15px 15px;
    background: ${oc.gray[1]};

    &:hover {
      background: white;
    }
  }

  .footer {
    display: flex;

    p {
      margin-left: auto;
      color: ${oc.gray[5]};
    }
  }
`;
