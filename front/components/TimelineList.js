import TimelineListItem from "./TimeLineListItem";

export default function TimelineList({program}) {
  const timeline = {
    boostcamp: [
      {
        id: `1`,
        type: 'now',
        name: '접수기간',
        description: '4기 서류지원',
        startdate: '2020-06-01',
        enddate: '2020-06-30',
      },
      {
        id: `2`,
        type: 'now',
        name: '1차',
        description: '온라인 코딩테스트',
        startdate: '2020-07-04',
        enddate: '2020-07-04',
      },
      {
        id: `3`,
          type: 'now',
        name: '2차',
        description: '온라인 코딩테스트',
        startdate: '2020-07-11',
        enddate: '2020-07-11',
      },
      {
        id: `4`,
        type: 'now',
        name: '최종 합격자 발표',
        description: '부스트캠프 챌린지 참가 자격 부여',
        startdate: '2020-07-20',
        enddate: '2020-07-20',
      },
      {
        id: `5`,
        type: 'edu',
        name: '부스트캠프 챌린지',
        description: '수료자 중에서 합격자 선발',
        startdate: '2020-07-27',
        enddate: '2020-08-21',
      },
      {
        id: `6`,
        type: 'edu',
        name: '부스트캠프 멤버쉽',
        description: '챌린지 합격자만 멤버쉽 참가 자격 부여',
        startdate: '2020-08-31',
        enddate: '2020-12-21',
      },
    ]
}

  return (
    <>
    {timeline[program].map((v, index) => <TimelineListItem data={v} key={index} />)}
  </>
)
}