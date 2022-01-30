/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Text from "../elements/Text";
import styled from "styled-components";
const Header = (props) => {
  return (
    <>
      <Menu>
        <Link href="/about">
          <MenuItem>
            <Text size="2rem" mSize="1.5rem" smSize="1rem">
              About
            </Text>
          </MenuItem>
        </Link>
        <Link href="/project">
          <MenuItem>
            <Text size="2rem" mSize="1.5rem" smSize="1rem">
              Project
            </Text>
          </MenuItem>
        </Link>
        <Link href="/us">
          <MenuItem>
            <Text size="2rem" mSize="1.5rem" smSize="1rem">
              Us
            </Text>
          </MenuItem>
        </Link>
        <Link href="/post">
          <MenuItem>
            <Text size="2rem" mSize="1.5rem" smSize="1rem">
              Post
            </Text>
          </MenuItem>
        </Link>
        <Link href="/admin">
          <MenuItem>
            <Text size="2rem" mSize="1.5rem" smSize="1rem">
              Admin
            </Text>
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default Header;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  flex-basis: 20%;
  :hover {
    cursor: pointer;
  }
`;
