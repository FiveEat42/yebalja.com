import styles from "./LogoBar.module.css";
import Logo from "./Logo";
import Link from "next/link";
import RollingNotice from "./RollingNotice";

const TextLogo = () => {
  return (
    <div className={styles.box}>
      <Link href="/">
        <a className={styles.logo}>
          <span>
            <Logo />
          </span>
          <span>예발자닷컴</span>
        </a>
      </Link>
      <span className={styles.content}>예비개발자에게 필요한 정보를 제공합니다</span>
      <RollingNotice />
    </div>
  );
};

export default TextLogo;
