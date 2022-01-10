import Link from "next/link";

import styles from "../styles/Header.module.css";

const Header = (props) => {
  return (
    <>
      <div className={styles.div}>
        <div>icon</div>
        <div>
          <div
            style={{
              width: "200px",
              height: "140px",
              backgroundColor: "#fff1ff",
              margin: "auto",
            }}
          >
            MainLogo
          </div>
        </div>
        <div>icon</div>
      </div>
      <hr />
      <navigator className={styles.navigator}>
        <Link href="/about">About</Link>
        <Link href="/project">Project</Link>
        <Link href="/us">Us</Link>
        <Link href="/post">Post</Link>
        <Link href="/admin">Admin</Link>
      </navigator>
      <hr />
    </>
  );
};

export default Header;
