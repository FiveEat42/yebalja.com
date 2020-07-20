import styles from './Review.module.css';
import React from "react";
import classNames from 'classnames';
import Link from 'next/link';
import Head from 'next/head';

export default function Review() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.comment_block}>
          <img className={styles.comment_image} src="https://user-images.githubusercontent.com/37580034/87907843-53ef6f00-caa0-11ea-97a0-51865427a4db.png"/>
          <div className={styles.comment_dialog}>
            <div className={classNames({[styles.menu]: true, [styles.menu__adsila]: true})}>
              <a className={styles.menu__item} href="https://gamjatwigim.tistory.com/81?category=667070" target="_black">
                <span className={styles.menu__item_name}>부스트캠프동안 내가 배운것들</span>
              </a>
            </div>
            <i class="fa fa-quote-left" style={{ color: `white` }} aria-hidden="true"></i>
            <p className={styles.text}>부스트캠프는 최고의 서포터와 함께 하는 게임이었습니다. 저는 부스트캠프를 하면서, 각종 모든 트렌디한 기술을 시도하려는 개발자들과 함께 개발을 할 수 있었습니다.</p>
            <div className={styles.date}>
              <i class="fa fa-minus" style={{ color: `#white` }} aria-hidden="true"></i>
              <span>   2020. 06. 06.</span>
            </div>
          </div>
        </div>
      </div>
    </>
);
}

// export default function Review() {
//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
//       </Head>
//         <div className={styles.card}>
              
//               <div className={classNames({[styles.menu]: true, [styles.menu__adsila]: true})}>
//                 <a className={styles.menu__item} href="https://m.blog.naver.com/PostView.nhn?blogId=boostcamp_official&logNo=222009704397&navType=tl">
//                   <span className={styles.menu__item_name}>부스트캠프 생생후기</span>
//                 </a>
//               </div>
//               <div className={styles.quote_message}>
//                   <i class="fa fa-quote-left" style={{ color: `#4A91F5` }} aria-hidden="true"></i>
//                   <span>sdsdsd asdddasd</span>
//               </div>
//               <div className={styles.author_area}>
//                   <i class="fa fa-minus" style={{ color: `#4A91F5` }} aria-hidden="true"></i>
//                   <span>2020. 06. 06.</span>
//               </div>
//         </div>
//     </>
// );
//  }

// export default function Review() {
//     return (
//       <>
//       <div className={styles.wrapper}>
//           <nav className={classNames({[styles.menu]: true, [styles.menu__adsila]: true})}>
//             <a className={styles.menu__item} href="https://m.blog.naver.com/PostView.nhn?blogId=boostcamp_official&logNo=222009704397&navType=tl">
//               <span className={styles.menu__item_name}>부스트캠프 생생후기</span>
//               <span className={styles.menu__item_label}>2020. 06. 23.</span>
//             </a>
//             <a className={styles.menu__item} href="https://hzoou.tistory.com/286?category=807989">
//               <span className={styles.menu__item_name}>부스트캠프의 협업</span>
//               <span className={styles.menu__item_label}>2019. 12. 24.</span>
//             </a>
//             <a className={styles.menu__item} href="https://velog.io/@red/부스트-캠프-2019-참여-후기">
//               <span className={styles.menu__item_name}>부스트캠프 멤버쉽 코스 후기</span>
//               <span className={styles.menu__item_label}>2019. 08. 13.</span>
//             </a>
//             <a className={styles.menu__item} href="https://velog.io/@wan088/2019-08-12-2108-작성됨-gzjz8d1wqz">
//               <span className={styles.menu__item_name}>개인적으로 뽑은 부스트캠프 장단점</span>
//               <span className={styles.menu__item_label}>2019. 08. 13.</span>
//             </a>
//             <a className={styles.menu__item} href="https://gamjatwigim.tistory.com/81?category=667070">
//               <span className={styles.menu__item_name}>부스트캠프동안 내가 공부한 것들</span>
//               <span className={styles.menu__item_label}>2019. 2. 28.</span>
//             </a>
//           </nav>
//         </div>
//       </>
//   );
// }