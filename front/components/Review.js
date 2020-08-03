import React from "react";
import styles from './Review.module.css';
import classNames from 'classnames';
import Head from 'next/head';


function CommentList({data, id}) {
  return (
    <>
      {
        (id % 2) ? <RightCommentItem data={data}/> : <LeftCommentItem data={data}/>
      }
    </>
  )
}

function LeftCommentItem({data}) {
  return (
    <>
      <div className={styles.wrapper}>
              <div className={styles.comment_block}>
                <img className={styles.comment_image} src="https://user-images.githubusercontent.com/37580034/89162051-75774d00-d5ae-11ea-8ba2-89cf1fbb3c18.png"/>
                <div className={styles.comment_dialog}>
                  <div className={classNames({[styles.menu]: true, [styles.menu__adsila]: true})}>
                    <a className={styles.menu__item} href={data.link} target="_black">
                      <span className={styles.menu__item_name}>{data.title}</span>
                    </a>
                  </div>
                  <i className="fa fa-quote-left" style={{ color: `white` }} aria-hidden="true"></i>
                  <p className={styles.text}>{data.content}</p>
                  <div className={styles.date}>
                    <i className="fa fa-minus" style={{ color: `#white` }} aria-hidden="true"></i>
                    <span>  {data.posted_date}</span>
                  </div>
                </div>
              </div>
      </div>
    </>
  )
}

function RightCommentItem({data}) {
  return (
    <>
      <div className={styles.wrapper_r}>
        <div className={styles.comment_block_r}>
          <div className={styles.comment_dialog_r}>
            <div className={classNames({[styles.menu]: true, [styles.menu__adsila]: true})}>
              <a className={styles.menu__item} href={data.link} target="_black">
                <span className={styles.menu__item_name}>{data.title}</span>
              </a>
            </div>
            <i class="fa fa-quote-left" style={{ color: `white` }} aria-hidden="true"></i>
            <p className={styles.text_r}>{data.content}</p>
            <div className={styles.date_r}>
              <i class="fa fa-minus" style={{ color: `#white` }} aria-hidden="true"></i>
              <span>  {data.posted_date}</span>
            </div>
          </div>
          <img className={styles.comment_image_r} src="https://user-images.githubusercontent.com/37580034/89162148-96d83900-d5ae-11ea-9b3c-62e91aed0084.png"/>
        </div>
      </div>
    </>
  )
}


export default function Review({program}) {
  
  const ProgramData = {
    ftseoul: [
      {
        link: "https://gamjatwigim.tistory.com/81?category=667070",
        title: "부스트캠프동안 내가 배운것들",
        content: "부스트캠프는 최고의 서포터와 함께 하는 게임이었습니다. 저는 부스트캠프를 하면서, 각종 모든 트렌디한 기술을 시도하려는 개발자들과 함께 개발을 할 수 있었습니다.",
        posted_date: "2020-06-06",
      },
      {
        link: "https://velog.io/@red/부스트-캠프-2019-참여-후기",
        title: "부스트캠프 챌린지 후기",
        content: "또한 협업이 얼마나 중요한 의미를 갖는지, 동료들이 얼마나 중요한지도 충분히 체감할 수 있었습니다.",
        posted_date: "2020-08-13",
      },
    ],
    ssafy : [
      

    ],
    boostcamp: [
      {
        link: "https://gamjatwigim.tistory.com/81?category=667070",
        title: "부스트캠프동안 내가 배운것들",
        content: "부스트캠프는 최고의 서포터와 함께 하는 게임이었습니다. 저는 부스트캠프를 하면서, 각종 모든 트렌디한 기술을 시도하려는 개발자들과 함께 개발을 할 수 있었습니다.",
        posted_date: "2020-06-06",
      },
      {
        link: "https://velog.io/@red/부스트-캠프-2019-참여-후기",
        title: "부스트캠프 챌린지 후기",
        content: "또한 협업이 얼마나 중요한 의미를 갖는지, 동료들이 얼마나 중요한지도 충분히 체감할 수 있었습니다.",
        posted_date: "2020-08-13",
      },
      {
        link: "https://velog.io/@red/부스트-캠프-2019-참여-후기",
        title: "부스트캠프 챌린지 후기",
        content: "또한 협업이 얼마나 중요한 의미를 갖는지, 동료들이 얼마나 중요한지도 충분히 체감할 수 있었습니다.",
        posted_date: "2020-08-13",
      },
      {
        link: "https://velog.io/@red/부스트-캠프-2019-참여-후기",
        title: "부스트캠프 챌린지 후기",
        content: "또한 협업이 얼마나 중요한 의미를 갖는지, 동료들이 얼마나 중요한지도 충분히 체감할 수 있었습니다.",
        posted_date: "2020-08-13",
      },
      {
        link: "https://velog.io/@red/부스트-캠프-2019-참여-후기",
        title: "부스트캠프 챌린지 후기",
        content: "또한 협업이 얼마나 중요한 의미를 갖는지, 동료들이 얼마나 중요한지도 충분히 체감할 수 있었습니다.",
        posted_date: "2020-08-13",
      },
    ],
    soma : [

    ],
    woowa : [

    ],
    likelion : [

    ],
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      {ProgramData[program].map((v, idx, id) => <CommentList data={v} key={idx} id={idx} />)}
    </>
);
}