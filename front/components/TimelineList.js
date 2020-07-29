import TimelineListItem from "./TimeLineListItem";

export default function TimelineList() {
  const dataList = {
    [
      boostcamp:
      {
        card_style: 'card_end',
        name: '접수기간',
        description: '4기 서류지원',
        targetdate: '2020-07-28',
        date: '6.1 11:00 ~ 6.30 23:59',
      },
      {
        card_style: 'card_end',
        name: '1차',
        description: '온라인 코딩테스트',
        targetdate: '2020-07-29',
        date: '7.4',
      },
      {
        card_style: 'card_end',
        name: '2차',
        description: '온라인 코딩테스트',
        targetdate: '2020-07-30',
        date: '7.11',
      },
      {
        card_style: 'card_end',
        name: '최종 합격자 발표',
        description: '',
        targetdate: '08/20/2020',
        date: '7.20',
      },
      {
        card_style: 'card_edu',
        name: '부스트캠프 챌린지',
        description: '수료자 선발',
        targetdate: '07/27/2020',
        date: '7.27 ~ 8.21',
      },
      {
        card_style: 'card_edu',
        name: '부스트캠프 멤버',
        description: '챌린지 과정 수료자',
        targetdate: '08/31/2020',
        date: '8.31 ~ 12.21',
      },
  ],
}

	return (
		<>
			{dataList.boostcamp.map((v, index) => <TimelineListItem data={v} key={index} />)}
		</>
	)
}