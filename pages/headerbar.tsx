import styled from 'styled-components';
import oc from 'open-color';
import PageTemplate from '../components/PageTemplate';
import { shadow, media } from '../styles';
import { useState } from 'react';

const Headerbar = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <PageTemplate>
      <PaneBlock>
        <Header>
          <AlignPane>
            <HeaderContent>
              <Logo>Header</Logo>
              <Spacer />
              <SearchBar
                type="text"
                className={toggle ? 'focused' : ''}
                placeholder={`${toggle}`}
              />
              <Button onClick={onToggle}>검색</Button>
              <Button>메뉴</Button>
            </HeaderContent>
          </AlignPane>
          <HrBar />
        </Header>
      </PaneBlock>
    </PageTemplate>
  );
};

export default Headerbar;

// Styled Components
const PaneBlock = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid ${oc.cyan[9]};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  /*
    position: fixed;
    top: 0px;
   */
  width: 100%;
  ${shadow(1)};
`;

const AlignPane = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const HeaderContent = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.medium} {
    width: 992px;
  }
  ${media.small} {
    width: 100%;
  }
`;

const Logo = styled.a`
  font-size: 1.512rem;
  font-weight: 600;
  color: ${oc.indigo[7]};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-shadow: 5px 2px ${oc.gray[4]};
  }
  &:active {
    transform: translateY(3px);
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const HrBar = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.indigo[5]}, ${oc.cyan[4]});
`;

const SearchBar = styled.input`
  margin-right: 0.1rem;
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  width: 0px;
  height: 31px;
  transition: 0.2s all;

  &.focused {
    width: 250px;
    border: 1px solid ${oc.cyan[5]};
    background: ${oc.cyan[3]};
    color: white;
    font-size: 1rem;
    padding: 0px 4px;

    ${media.medium} {
      width: 120px;
    }

    ${media.small} {
      width: 60px;
    }
  }
`;

const Button = styled.button`
  margin-right: 0.3rem;
  width: 50px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: ${oc.cyan[8]};
  background: white;
  border: 1px solid ${oc.cyan[6]};
  border-radius: 4px;
  padding: 0.4rem;
  padding-bottom: 0.3rem;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background: ${oc.cyan[6]};
    color: white;
    ${shadow(1)};
  }
  
  &:active {
    transform: translateY(3px);
  }
`;
