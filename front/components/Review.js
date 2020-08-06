import React from "react";
import styles from './Review.module.css';
import classNames from 'classnames';
import Head from 'next/head';


function CommentList({data, id}) {
  return (
    <>

      {
         (id % 2) ? <RightCommentItem data={data}/> : 
        <LeftCommentItem data={data}/>
      }

    </>
  )
}

function LeftCommentItem({data}) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.comment_block}>
          <img className={styles.comment_image} src="https://user-images.githubusercontent.com/37580034/89393019-37606180-d745-11ea-87f7-93a71ca3b152.png"/>
          <div className={styles.comment_dialog}>
            <div className={classNames({[styles.menu]: true, [styles.menu__adsila]: true})}>
              <a className={styles.menu__item} href={data.link} target="_black">
                <span className={styles.menu__item_name}>{data.title + "   >"} </span>
              </a>
            </div>
            <div className={styles.comment_body}>
              <i className="fa fa-quote-left" style={{ color: `white` }} aria-hidden="true"></i>
              <p className={styles.text}>{data.content}</p>
              <div className={styles.date}>
                <i className="fa fa-minus" style={{ color: `#white` }} aria-hidden="true"></i>
                <span className={styles.text}> {data.posted_date}</span>
              </div>
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
      <div className={styles.wrapper}>
        <div className={styles.comment_block_r}>
          <div className={styles.comment_dialog_r}>
            <div className={classNames({[styles.menu]: true, [styles.menu__adsila]: true})}>
              <a className={styles.menu__item} href={data.link} target="_black">
                <span className={styles.menu__item_name}>{data.title + "   >"}</span>
              </a>
            </div>
            <div className={styles.comment_body}>
              <i className={"fa fa-quote-left"} style={{ color: `white` }} aria-hidden="true"></i>
              <p className={styles.text_r}>{data.content}</p>
              <div className={styles.date}>
                <i className={"fa fa-minus"} style={{ color: `#white` }} aria-hidden="true"></i>
                <span className={styles.text_r}>  {data.posted_date}</span>
              </div>
            </div>
          </div>
          <img className={styles.comment_image_r} src="https://user-images.githubusercontent.com/37580034/89393019-37606180-d745-11ea-87f7-93a71ca3b152.png"/>
        </div>
      </div>
    </>
  )
}


export default function Review({program}) {
  
  const ProgramData = {
    ftseoul: [
      {
        link: "https://yechoi.tistory.com/15",
        title: "42는 동료학습을 어떻게 구현했을까",
        content: "남들한테 물어 배운 건 책을 보며 익히는 것보다 빨랐다. '이 부분을 제대로 아는 게 아닌 것 같다'며 책을 붙잡고 있던 누군가는 어느 순간 보니 뒤쳐져 있었다.", //max-length: 94글자 혹은 159byte
        posted_date: "2020-07-19",
      },
      {
        link: "https://wannabedev.tistory.com/21",
        title: "1차 온라인테스트 지원 후기와 팁",
        content: "코딩을 할 줄 몰라도 머리만 짜낸다면 문제를 풀 수는 있는 유형이다. 서울42의 통과기준은 레벨10이라고 들은 것 같다. 참고로 나는 레벨 13.",
        posted_date: "2019-11-13",
      },
      {
        link: "https://wannabedev.tistory.com/101",
        title: "본과정 교육생이 답해주는 궁금한 점들",
        content: "제 생각이지만, 일단 라 피씬의 경우엔 피씬에(주말 포함) 완전히 전념하시는 게 좋습니다.",
        posted_date: "2019-06-12",
      },
      {
        link: "https://nadarm.tistory.com/27",
        title: "SSAFY, 42 Seoul 후기 / 비교",
        content: "정해진 진도가 없이 하는 만큼 진도가 나가게 된다. 옆 사람과 비교하다간 멘탈 나갈 확률 90%",
        posted_date: "2020-02-16",
      },
      {
        link: "https://watermelonlike.tistory.com/31?category=823857",
        title: "42seoul 본과정 최종결과",
        content: "단 하나의 오타에 0점을 맞는다는건 너무나도 슬프고 가혹한 일이다. 그 가혹한 일을 몇번이고 겪었다.",
        posted_date: "2020-02-25",
      },
    ],
    ssafy : [
      {
        link: "http://blog.naver.com/PostView.nhn?blogId=suntouch&logNo=221731936322",
        title: "SSAFY를 추천하는 가장 큰 이유 2가지",
        content: "대기업에 들어가려면 자소서나 면접도 매끄럽게 진행할 수 있어야 하는데, 취업지원센터에서 내가 부족한 점이나 잡아야 하는 컨셉을 맞춤형으로 잘 피드백 해주셨다.",
        posted_date: "2019-12-09",
      },
      {
        link: "https://watermelonlike.tistory.com/31?category=823857",
        title: "3기 선발 전형 후기-서류부터 면접까지",
        content: "지원자가 정말 꾸준히 SW 분야에 관심을 두어온 것이 맞는지, 이 과정이 정말 절실한지 정도를 보는 듯했다.",
        posted_date: "2020-06-20",
      },
      {
        link: "https://eun-jeong.tistory.com/5",
        title: "3기가 말하는 SSAFY, 이렇게 합격했다",
        content: "구체적으로 이 분야에서 하고 싶은 것과 SSAFY를 위해서 준비를 얼마나 했는지 등을 어필했어요.",
        posted_date: "2020-04-04",
      },
      {
        link: "https://watermelonlike.tistory.com/31?category=823857",
        title: "전공자반 1학기 후기",
        content: "기본부터 알려주고 뒤에 프레임워크나 실무에서 사용하는 팁들을 알려주며 짜짠하는 느낌이었다. '적용시키며 웹을 공부하자'의 느낌이 강했다.",
        posted_date: "2020-06-09",
      },
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
        link: "https://velog.io/@wan088/2019-08-12-2108-작성됨-gzjz8d1wqz",
        title: "개인적으로 뽑은 부스트캠프 장단점",
        content: "그래서일까, 개인적으로 이번 부스트 캠프는 단순 교육의 의미보단 진로에 대해 한번 더 고민할 수 있게 도와준 좋은 기회이자 체험이었다.",
        posted_date: "2020-08-13",
      },
      {
        link: "https://hzoou.tistory.com/286?category=807989",
        title: "부스트캠프2019를 회고하며",
        content: "네이버, 라인, 카카오 등 이름있는 기업들과 마이리얼트립, 호갱노노 등 성장하고 있는 스타트업과의 채용 연계 기회가 주어진다는 것만으로도 엄청난 메리트이다.",
        posted_date: "2019-12-24",
      },
      {
        link: "https://m.blog.naver.com/PostView.nhn?blogId=boostcamp_official&logNo=222009704397&navType=tl",
        title: "공식 블로그 생생후기",
        content: "개발 문화에 대해 알게 되었을 때, 부스트캠프에 지원하길 잘했다고 생각했습니다.",
        posted_date: "2020-06-23",
      },
    ],
    soma : [
      {
        link: "https://tmdahr1245.tistory.com/112?category=732190",
        title: "SW마에스트로, 경험에서 우러나온 팁",
        content: "사무국분들은 매우 친절하고 잘 활용해라. 행사 때마다 유용한 굿즈를 많이 준다. 다만 전부 소마 로고가 각인되어있다.",
        posted_date: "2020-01-15",
      },
      {
        link: "https://tmdahr1245.tistory.com/112?category=732190",
        title: "'스펙 한 줄' 이상의 의미",
        content: "어떻게 하면 나 자신에게 스스로 가치를 느낄 수 있을 지 생각해본 결과, 답은 내가, 내가 만든 것들이 사람들에게 도움이 되는 것이었다. 그건 분명 가치 있는 일이니까.",
        posted_date: "2019-12-17",
      },
      {
        link: "https://medium.com/@claudiajkang/소프트웨어-마에스트로-11기-지원-과정-합격-후기-11db193e659a",
        title: "'SW마에스트로 11기 지원과정 후기",
        content: "긴 지원 과정을 거치면서 결과에 대한 불안함과 초조함을 이미 겪었기에 최대한 자세히 작성하려고 한다.",
        posted_date: "2020-01-14",
      },
      {
        link: "https://m.blog.naver.com/jhc9639/221853453301",
        title: "2020 SW마에스트로 11기 코딩테스트 후기",
        content: "SQL은 어느정도 구글링하면 되는 수준이고 웹은 웹의 기초, html, css, js를 정확히 알고 있어야 풀 수 있는 문제가 출제 되었습니다.",
        posted_date: "2020-03-14",
      },
    ],
    woowa : [
      {
        link: "https://velog.io/@codemcd/우아한테크코스-Level-1-2-회고",
        title: "우아한테크코스 1기 회고",
        content: "TDD는 테스트 주도 개발로 프로던셕 코드보다 테스트 코드를 먼저 작성하는 것이다. 우테코의 미션 개발방식은 기본적으로 TDD로 진행한다.",
        posted_date: "2019-09-14",
      },
      {
        link: "https://blog.naver.com/10040171_/221740613814",
        title: "우테코 3주 프리코스 후기",
        content: "프리코스를 진행하는 동안 가장 중요하게 생각한 것은 객체를 객체답게 사용하는 것이었다. 절차 지향적으로 코드를 작성하는 버릇을 개선하고자 했다.",
        posted_date: "2019-12-17",
      },
      {
        link: "https://pjh3749.tistory.com/236",
        title: "우테코 지원하게 된 동기와 마음가짐",
        content: "우아한테크코스가 목표가 아니라 좋은 개발자로 성장하는 것을 목표로 하면서 성장해 나가는 과정으로 생각하고 도전했으면 합니다.",
        posted_date: "2019-04-10",
      },
      {
        link: "https://blog.naver.com/spring1a/221490064807",
        title: "웹 백엔드 온라인 코딩테스트 문제 후기",
        content: "유명한 369 문제가 나왔고 해당 알고리즘은 구글링해보니 바로 찾을 수 있어서 가져다 썼다. 출처는 주석에 적어 두었다.",
        posted_date: "2019-03-17",
      },
      {
        link: "https://velog.io/@kouz/우아한-테크코스-2기-오프라인-코딩테스트-리뷰-반성-3dk4pax3p7",
        title: "2기 오프라인 코딩테스트 리뷰와 반성",
        content: "프리코스 만으로도, 자신도 모르게 몰입하게 되고 많이 성장할 수 있는 과정입니다. 의심할 여지가 없이 좋은 경험을 할 수 있을 것입니다.",
        posted_date: "2019-12-28",
      },
    ],
    likelion : [
      {
        link: "https://itchipmunk.tistory.com/91",
        title: "멋사 4, 5기 회고록",
        content: "사실 웹 개발 비중보다 직접 문제를 만들고 기획하는 것이 주된 일이었다. 작년에는 앉아서 개발만 했다면 이제는 발로 뛰어 다니면서도 개발을 해야 했다.",
        posted_date: "2018-02-26",
      },
      {
        link: "https://classicismist.blogspot.com/2017/10/blog-post.html",
        title: "오랫동안 잊지 못할 멋사 활동을 마무리하며",
        content: "실제로 멋쟁이 사자처럼 이후로 코딩에 대한 열정이 많이 커져서 스스로 코딩을 하는 시간이 많이 늘어났다.",
        posted_date: "2017-10-02",
      },
      {
        link: "https://wogud6792.tistory.com/42",
        title: "컴공 복전생이 멋사를 하게 된 이유",
        content: "그동안 학부 안에서만 활동하다가 다른 학부 사람들도 만나면서 오직 코딩 하나 공통점을 가지고 서로 물어보고 공부하는 거 자체가 의미 있는 경험이었다.",
        posted_date: "2020-06-06",
      },
      {
        link: "https://deepinsight.tistory.com/12",
        title: "멋쟁이사자처럼 중앙 해커톤을 마치며",
        content: "어쩌면 이번 멋쟁이사자처럼 활동은 제게 실패였다고 생각합니다. 그런데 왜인지 이번 실패에는 쓴맛이 느껴지지 않습니다.",
        posted_date: "2018-09-08",
      },
      {
        link: "https://brunch.co.kr/magazine/likelionwork",
        title: "[멋사 직장인] 퇴근하고 코딩 배우는 직장인들",
        content: "이 글은 스타트업 인사담당자가 '멋사 직장인'에서 코딩을 배워 해커톤에서 우승하는 작은 성취에 대한 이야기입니다.",
        posted_date: "2019-12-11",
      },
    ],
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
    <div className={styles.box}>
      {ProgramData[program].map((v, idx, id) => <CommentList data={v} key={idx} id={idx}/>)}
    </div>
    </>
);
}