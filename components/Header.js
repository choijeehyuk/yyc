import Link from "next/link";
import Image from "next/image";
import Text from "../elements/Text";
import Box from "../elements/Box";
import styles from "../styles/Header.module.css";
import styled from "styled-components";
const Header = (props) => {
  return (
    <>
      <Head>
        <Box width="300" height="120">
          <Text
            size="60"
            lineheight="30"
            onClick={() => {
              console.log("하하");
            }}
          >
            노생
          </Text>
        </Box>
      </Head>
      <hr style={{ width: "95%" }} />
      <nav className={styles.navigator}>
        <Link href="/about">Abuot</Link>
        <Link href="/project">Project</Link>
        <Link href="/us">Us</Link>
        <Link href="/post">Post</Link>
        <Link href="/admin">Admin</Link>
      </nav>
      <hr style={{ width: "95%" }} />
    </>
  );
};

export default Header;

const Head = styled.div`
  display: flex;
  justify-content: center;
`;

const A = styled.a``;
