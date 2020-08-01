import TimelineListItem from "./TimeLineListItem";

export default function TimelineList({program}) {
  const timeline = {
      ftseoul: [
      {
        edu: `true`,
        name: '2기 1차 라피신',
        description: '본과정 선발을 위한 집중 교육 과정',
        startdate: '2020-06-29',
        enddate: '2020-07-24',
      },
      {
        edu: 'true',
        name: '2기 2차 라피신',
        description: '본과정 선발을 위한 집중 교육 과정',
        startdate: '2020-07-27',
        enddate: '2020-08-24',
      },
      {
        edu: 'true',
        name: '2기 본과정',
        description: '2기 1차와 2차 본과정 시작',
        startdate: '2020-09-01',
        enddate: '2022-09-01',
      },
      {
        edu: 'true',
        name: '3기 1차 라피신',
        description: '본과정 선발을 위한 집중 교육 과정',
        startdate: '2020-08-31',
        enddate: '2020-09-25',
      },
      {
        id: `5`,
        edu: 'true',
        name: '3기 2차 라피신',
        description: '본과정 선발을 위한 집중 교육 과정',
        startdate: '2020-10-05',
        enddate: '2020-10-30',
      },
      {
        edu: 'true',
        name: '3기 본과정',
        description: '3기 1차와 2차 본과정 시작',
        startdate: '2020-11-15',
        enddate: '2022-11-15',
      },
    ],
    boostcamp: [
      {
        edu: `false`,
        name: '접수기간',
        description: '4기 서류지원',
        startdate: '2020-06-01',
        enddate: '2020-06-30',
      },
      {
        edu: 'false',
        name: '1차',
        description: '온라인 코딩테스트',
        startdate: '2020-07-04',
        enddate: '2020-07-04',
      },
      {
        edu: 'false',
        name: '2차',
        description: '온라인 코딩테스트',
        startdate: '2020-07-11',
        enddate: '2020-07-11',
      },
      {
        edu: 'false',
        name: '최종 합격자 발표',
        description: '부스트캠프 챌린지 합격',
        startdate: '2020-07-20',
        enddate: '2020-07-20',
      },
      {
        edu: 'true',
        name: '부스트캠프 챌린지',
        description: '수료자 중에서 선발',
        startdate: '2020-07-27',
        enddate: '2020-08-21',
      },
      {
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
    {timeline[program].map((v, index, id) => <TimelineListItem data={v} key={index} id={index} />)}
  </>
)
}