import Link from "next/link";
import styles from "./Landing1.module.css";

const BootCampsSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.max_width_wrapper}>
        <div className={styles.bootCamps_image_section}>
          <img src={require("../src/image/InfoImage.png")}></img>
          {/* 핸드폰 이미지 넣어서 768크기 이하일 때 display, 위에건 none */}
        </div>
        <div className={styles.bootCamps_contents_wrapper}>
          <h1 className={styles.bootCamps_title}>
            6개 SW 부트캠프
            <br />
            한번에, 한눈에 확인하기
          </h1>
          <span>
            일정, 규모, 선발과정, 혜택
            <br />
            예발자닷컴에서 확인하세요.
          </span>
          <a href="#" className={styles.more_info_link}>
            자세히 알아보기 >
          </a>
        </div>
      </div>
    </section>
  );
};

const BootCampReviewsSection = () => {
  return (
    <section className={styles.reviews_wrapper}>
      <div className={styles.max_width_wrapper}>
        <div className={styles.reviews_contents_wrapper}>
          <h1 className={styles.reviews_title}>
            참여후기 읽고
            <br />
            내게 맞는 부트캠프 선택하기
          </h1>
          <span className={styles.reviews_subtitle}>예발자들의 생생한 후기를 읽고<br/>미리 경험해보세요.</span>
        </div>
      </div>
    </section>
  );
};

const Landing1 = () => {
  return (
    <div>
      <section className={styles.temp}></section>
      <BootCampsSection />
      <BootCampReviewsSection />
    </div>
  );
};

export default Landing1;
