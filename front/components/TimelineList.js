import TimelineListItem from "./TimeLineListItem";

export default function TimelineList({program}) {
	const timeline = {
		boostcamp: [
			{
				id: `one`,
				card_style: 'card_now',
				status: 'status',
				name: '접수기간',
				description: '4기 서류지원',
				startdate: '2020-06-01',
				date: '6.1 11:00 ~ 6.30 23:59',
			},
			{
				id: `two`,
				card_style: 'card_now',
				status: 'status',
				name: '1차',
				description: '온라인 코딩테스트',
				startdate: '2020-07-04',
				date: '7.4',
			},
			{
				id: `three`,
				card_style: 'card_now',
				status: 'status',
				name: '2차',
				description: '온라인 코딩테스트',
				startdate: '2020-07-11',
				date: '7.11',
			},
			{
				id: `four`,
				card_style: 'card_now',
				status: 'status',
				name: '최종 합격자 발표',
				description: '',
				startdate: '2020-07-20',
				date: '7.20',
			},
			{
				id: `five`,
				card_style: 'card_edu',
				status: 'status_edu',
				name: '부스트캠프 챌린지',
				description: '수료자 선발',
				startdate: '2020-07-27',
				date: '7.27 ~ 8.21',
			},
			{
				id: `six`,
				type: 'edu',
				name: '부스트캠프 멤버',
				description: '챌린지 과정 수료자',
				startdate: '2020-08-31',
				date: '8.31 ~ 12.21',
			},
		]
	}

	return (
		<>
		{timeline[program].map((v, index) => <TimelineListItem data={v} key={index} />)}
	</>
)
}