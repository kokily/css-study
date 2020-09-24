import Link from 'next/link';
import styled from 'styled-components';
import oc from 'open-color';

const Header = () => {
  return (
    <HeaderBlock>
      <Link href="/">
        <Menu>Display</Menu>
      </Link>

      <Link href="/position">
        <Menu>Position</Menu>
      </Link>

      <Link href="/overflow">
        <Menu>Overflow</Menu>
      </Link>

      <Link href="/float">
        <Menu>Float</Menu>
      </Link>

      <Link href="/masonry">
        <Menu>Masonry</Menu>
      </Link>

      <Link href="/headerbar">
        <Menu>Header</Menu>
      </Link>
    </HeaderBlock>
  );
};

export default Header;

// Styles
const HeaderBlock = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0.5rem 0;
`;

const Menu = styled.a`
  margin-right: 1rem;
  color: ${oc.indigo[8]};
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`;
