import React from 'react';
import styles from './Faq.module.css';
import ListGroup from "react-bootstrap/ListGroup"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import classNames from 'classnames';


function QnA ({list}) {
	return (
		<>
			<strong>Q. {list.q}</strong>
			<br />A. {list.a}
			<br /><br />
		</>
	);
};

function TabLeft({sub}) {
	return (
		<ListGroup.Item action href={sub.href}>
			{sub.title}
		</ListGroup.Item>
	)
}

function TabRight ({sub}) { 
	return (
		<Tab.Pane eventKey={sub.href}>
			{sub.qna.map((v, idx) => <QnA list={v} key={idx} />)}
		</Tab.Pane>
	);
}

function FaqTab({subList}) {
	return (
		<div className={classNames({["row"]: true, ["justify-content-md-center"]: true})}>
			<Tab.Container id="list-group-tabs-example" defaultActiveKey={subList[0].href}>
				<div className={"col-md-3"}>
					<ListGroup className={styles.secondTab}>
						{subList.map((v, idx) => <TabLeft sub={v} key={idx} />)}
					</ListGroup>
				</div>

				<div className={classNames({["col-md-9"]: true, [styles.content]: true})}>
					<Tab.Content>
						{subList.map((v, idx) => <TabRight sub={v} key={idx} />)}
					</Tab.Content>
				</div>
			</Tab.Container>
		</div>
	);
}

export default function Faq() {
	
	const dataList = [
		{
				category: "지원/선발",
				eventKey: "apply",
				subCategory: [
						{
								title: "지원자격",
								href: "#apply1",
								qna: [
										{
												q: "웹이나 iOS가 아닌 다른 분야의 개발자로 경력이 있을 경우 지원이 가능한가요?",
												a: "분야에 관계없이 2년 이상의 현업 개발 경력을 가진 분은 지원이 불가능합니다.",
										},
										{
												q: "최종 학력 또는 전공과 관계없이 지원이 가능한가요?",
												a: "네 가능합니다. 최종 학력이나 전공 여부와 관계없이 2020년 하반기에 풀타임으로 프로그램 참여가 가능한 분이라면 지원 가능합니다.",
										},
								]
						},{
								title: "모집규모 및 분야",
								href: "#apply2",
								qna: [
										{
												q: "웹 풀스택, 모바일 iOS 분야별 선발 인원이 정해져 있나요?",
												a: "아니요, 분야별로 인원을 정해두고 선발하지 않습니다.",
										},
										{
												q: "지원할 때 반드시 웹 풀스택, 모바일 iOS 중 하나를 선택해야 하나요?",
												a: "네, 지원 시 두 분야 중 하나를 선택해야 합니다. 서로 다른 프로그래밍 언어를 사용하여 부스트캠프 기간 동안 충분한 연습이 필요하기 때문입니다.",
										},
								]
						},{
								title: "선발과정",
								href: "#apply3",
								qna: [
										{
												q: "코딩테스트는 어떻게 진행되나요?",
												a: "코딩테스트는 온라인으로 진행합니다. 개인 노트북을 지참해야 하며, 사용 가능한 프로그래밍 언어는 C, C++, C#, Java, JavaScript, Kotlin, Python2, Python3, Swift입니다. 자세한 내용은 추후 서류 합격자에 한해 안내해 드릴 예정입니다.",
										},
										{
												q: "면접은 따로 없나요?",
												a: "이번 부스트캠프는 별도의 면접 과정이 없습니다.",
										},
								]
						},
				],
		},{
				category: "교육과정",
				eventKey: "learn",
				subCategory: [
						{
								title: "교육내용",
								href: "#learn1",
								qna: [
										{
												q: "부스트캠프에서 사용하는 프로그래밍 언어는 무엇인가요?",
												a: "웹 풀스택 과정은 JavaScript, HTML, CSS를 사용하며, 모바일 iOS는 Swift를 사용합니다.",
										},
								]
						},
					 {
								title: "교육시간 및 장소",
								href: "#learn2",
								qna: [
										{
												q: "온라인으로 진행된다면 개인이 원하는 시간대에 참여할 수 있나요?",
												a: "아니요, 부스트캠프는 동료와 함께 학습하는 프로그램이기 때문에 정해진 일과 시간(월~금 10:00~19:00)에 필수로 참여해야 합니다.",
										},{
												q: "현업 또는 학업으로 코어타임 중 일부 시간대에 참여할 수 없는데 괜찮을까요?",
												a: "정해진 일과 시간에 풀타임으로 참여가 가능한 사람만 참가 가능합니다.",
										},{
												q: "오프라인 활동이 있다면 어디서 진행되나요?",
												a: "오프라인 활동은 주로 커넥트재단 교육장(서울 강남)에서 진행되며 운영 상황에 따라 추후 변동이 있을 수 있습니다.",
										},
								]
						},
				],
		},{
				category: "기타",
				eventKey: "etc",
				subCategory: [
						{
								title: "교육비용",
								href: "#etc1",
								qna: [
										{
												q: "부스트캠프는 무료인가요?",
												a: "네 무료입니다.",
										},
								]
						},
						{
								title: "교육장비",
								href: "#etc2",
								qna: [
										{
												q: "참가자에게 노트북 대여가 가능한가요?",
												a: "대여하지 않습니다. 개인 노트북을 지참해야 합니다.",
										},
								]
						},
				],
		},
]

	return (
    <div className={styles.firstTab}>
			<Tabs defaultActiveKey={dataList[0].eventKey} transition={false}>
				<Tab eventKey={dataList[0].eventKey} title={dataList[0].category}>
					<FaqTab subList={dataList[0].subCategory} />
				</Tab>

				<Tab eventKey={dataList[1].eventKey} title={dataList[1].category}>
					<FaqTab subList={dataList[1].subCategory} />
				</Tab>

				<Tab eventKey={dataList[2].eventKey} title={dataList[2].category}>
					<FaqTab subList={dataList[2].subCategory} />
				</Tab>
			</Tabs>
    </div>
	);
}