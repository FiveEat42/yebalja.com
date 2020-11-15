import Link from "next/link";
import styles from "./Landing1.module.css";
import useScrollFadeIn from "./hooks/useScrollFadeIn.js";
import useScrollClipPath from "./hooks/useScrollClipPath";
import { useEffect } from "react";

const BootCampsSection = () => {
  const fadeInAnimation = useScrollFadeIn();
  const clipPathAnimation = useScrollClipPath();
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.max_width_bootcamp_wrapper}>
        <div className={styles.bootCamps_image_section} {...fadeInAnimation}>
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
  const fadeInAnimation = useScrollFadeIn();
  const initPositionX = 0;
  const clipPathAnimation = useScrollClipPath(initPositionX);
  useEffect(() => {
    console.log('Rendering');
  },[])
  return (
    <section className={styles.reviews_wrapper}>
      <div className={styles.max_width_card_wrapper}>
        <div className={styles.reviews_contents_wrapper}>
          <h1 className={styles.reviews_title}>
            참여후기 읽고
            <br />
            내게 맞는 부트캠프 선택하기
          </h1>
          <span className={styles.reviews_subtitle}>
            예발자들의 생생한 후기를 읽고
            <br />
            미리 경험해보세요.
          </span>
        </div>
        <div className={styles.bootcamp_card_wrapper}  {...clipPathAnimation}>
          <div className={styles.bootcamp_card} >
            <div className={styles.bootcamp_card_image_wrapper}>
              <img
                className={styles.bootcamp_card_image}
                src={require("../src/image/ftLOGO.png")}
              ></img>
            </div>
            <div className={styles.bootcamp_card_contents_wrapper}>
              <span>
                42 SEOUL
                <br />
              </span>
              <a href="#">자세히 보기 ></a>
            </div>
          </div>
          <div className={styles.bootcamp_card}>
            <div className={styles.bootcamp_card_image_wrapper}>
              <img
                className={styles.bootcamp_card_image}
                src={require("../src/image/somaLOGO.png")}
              ></img>
            </div>
            <div className={styles.bootcamp_card_contents_wrapper}>
              <span>
                소프트웨어 마에스트로
                <br />
              </span>
              <a href="#">자세히 보기 ></a>
            </div>
          </div>{" "}
          <div className={styles.bootcamp_card}>
            <div className={styles.bootcamp_card_image_wrapper}>
              <img
                className={styles.bootcamp_card_image}
                src={require("../src/image/utecoLOGO.png")}
              ></img>
            </div>
            <div className={styles.bootcamp_card_contents_wrapper}>
              <span>
                우아한 테크코스
                <br />
              </span>
              <a href="#">자세히 보기 ></a>
            </div>
          </div>{" "}
          <div className={styles.bootcamp_card}>
            <div className={styles.bootcamp_card_image_wrapper}>
              <img
                className={styles.bootcamp_card_image}
                src={require("../src/image/boostcampLOGO.png")}
              ></img>
            </div>
            <div className={styles.bootcamp_card_contents_wrapper}>
              <span>
                네이버 부스트캠프
                <br />
              </span>
              <a href="#">자세히 보기 ></a>
            </div>
          </div>{" "}
          <div className={styles.bootcamp_card}>
            <div className={styles.bootcamp_card_image_wrapper}>
              <img
                className={styles.bootcamp_card_image}
                src={require("../src/image/ssafyLOGO.png")}
              ></img>
            </div>
            <div className={styles.bootcamp_card_contents_wrapper}>
              <span>
                삼성 SSAFY
                <br />
              </span>
              <a href="#">자세히 보기 ></a>
            </div>
          </div>{" "}
          <div className={styles.bootcamp_card}>
            <div className={styles.bootcamp_card_image_wrapper}>
              <img
                className={styles.bootcamp_card_image}
                src={require("../src/image/likelionLOGO.png")}
              ></img>
            </div>
            <div className={styles.bootcamp_card_contents_wrapper}>
              <span>
                멋쟁이 사자처럼
                <br />
              </span>
              <a href="#">자세히 보기 ></a>
            </div>
          </div>
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
