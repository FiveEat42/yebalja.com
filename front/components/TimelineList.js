import TimelineListItem from "./TimeLineListItem";

export default function TimelineList({program}) {
  const timeline = {
    boostcamp: [
      {
        id: `1`,
        edu: `false`,
        name: '접수기간',
        description: '4기 서류지원',
        startdate: '2020-06-01',
        enddate: '2020-06-30',
      },
      {
        id: `2`,
        edu: 'false',
        name: '1차',
        description: '온라인 코딩테스트',
        startdate: '2020-07-04',
        enddate: '2020-07-04',
      },
      {
        id: `3`,
        edu: 'false',
        name: '2차',
        description: '온라인 코딩테스트',
        startdate: '2020-07-11',
        enddate: '2020-07-11',
      },
      {
        id: `4`,
        edu: 'false',
        name: '최종 합격자 발표',
        description: '부스트캠프 챌린지 합격',
        startdate: '2020-07-20',
        enddate: '2020-07-20',
      },
      {
        id: `5`,
        edu: 'true',
        name: '부스트캠프 챌린지',
        description: '수료자 중에서 선발',
        startdate: '2020-07-27',
        enddate: '2020-08-21',
      },
      {
        id: `6`,
        edu: 'true',
        name: '부스트캠프 멤버쉽',
        description: '선발자만 부스트캠프 멤버쉽 참가 가능',
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