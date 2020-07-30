import React from 'react';
import styles from './FAQ.module.css';
import ListGroup from "react-bootstrap/ListGroup"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function QnA ({data}) {
    return (
        <>
            <strong>Q. {data.q}</strong>
            <br />A. {data.a}
            <br /><br />
        </>
    );
};

function FaqItem (data, key) {
    return (
        <Tab.Pane eventKey={key}>
            {data.subCategory.qna.map((v) => <QnA data={v} key={v.idx} />)}
        </Tab.Pane>
    );
}

function FaqTab (data, eventKey) {
    console.log(data);
	return (
        <Tab eventKey={eventKey} title={data.category}>
            <Row className="justify-content-md-center">
                <Tab.Container id="list-group-tabs-example" defaultActiveKey={data.subCategory.title}>
                    <Col md={3}>
                        <ListGroup className={styles.secondTab}>
                            {data.subCategory.map((v, idx) => <ListGroup.Item action href={v.title} key={idx}>{v.title}</ListGroup.Item>)}
                        </ListGroup>
                    </Col>
                    <Col md={9} className={styles.content}>
                        <Tab.Content>
                            {data.map((v, eventKey) => <FaqItem data={v} key={eventKey} />)}
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Row>
        </Tab>
	);
}


export default function Faq() {

    const dataList = [
        {
            category: "지원/선발",
            subCategory: [
                {
                    idx: "1",
                    title: "지원자격",
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
                    idx: "2",
                    title: "모집규모 및 분야",
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
                    idx: "3",
                    title: "선발과정",
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
            subCategory: [
                {
                    idx: "4",
                    title: "교육내용",
                    qna: [
                        {
                            q: "부스트캠프에서 사용하는 프로그래밍 언어는 무엇인가요?",
                            a: "웹 풀스택 과정은 JavaScript, HTML, CSS를 사용하며, 모바일 iOS는 Swift를 사용합니다.",
                        },
                    ]
                },
               {
                    idx: "5",
                    title: "교육시간 및 장소",
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
            subCategory: [
                {
                    idx: "6",
                    title: "교육비용",
                    qna: [
                        {
                            q: "부스트캠프는 무료인가요?",
                            a: "네 무료입니다.",
                        },
                    ]
                },
                {
                    idx: "7",
                    title: "교육장비",
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

    // const titleList = ['지원/선발', '교육과정', '기타'];
    const type = ['home','profile','contact'];

  return (

    <div className={styles.firstTab}>
       <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
        {dataList.map((v, idx) => <FaqTab data={v} key={idx} eventKey={type[idx]}/>)}

    {/* return (
        <div className={styles.firstTab}>
            <Tabs defaultActiveKey="1" transition={false} id="noanim-tab-example" className={styles.menu}>
                {console.log({dataList})}
                {console.log("b")}
                <FaqMid/> */}

                {/* <Tab eventKey="home" title="지원/선발">
                    <Row className="justify-content-md-center">
                        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1-1">
                            <Col md={3}>
                                <ListGroup className={styles.secondTab}>

                                    <ListGroup.Item action href="#link1-1">
                                        지원자격
                                    </ListGroup.Item>

                                    <ListGroup.Item action href="#link1-2">
                                        모집규모 및 분야
                                    </ListGroup.Item>

                                    <ListGroup.Item action href="#link1-3">
                                        선발과정
                                    </ListGroup.Item>

                                </ListGroup>
                            </Col>
                            <Col md={9} className={styles.content}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#link1-1">
                                    <strong>Q.웹이나 iOS가 아닌 다른 분야의 개발자로 경력이 있을 경우 지원이 가능한가요?</strong>
                                    <br />A.분야에 관계없이 2년 이상의 현업 개발 경력을 가진 분은 지원이 불가능합니다.
                                    <br /><br />
                                    <strong>Q.최종 학력 또는 전공과 관계없이 지원이 가능한가요?</strong>
                                    <br />A.네 가능합니다. 최종 학력이나 전공 여부와 관계없이 2020년 하반기에 풀타임으로 프로그램 참여가 가능한 분이라면 지원 가능합니다.
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link1-2">
                                    <strong>Q.웹 풀스택, 모바일 iOS 분야별 선발 인원이 정해져 있나요?</strong>
                                    <br />A.아니요, 분야별로 인원을 정해두고 선발하지 않습니다.
                                    <br /><br />
                                    <strong>Q.지원할 때 반드시 웹 풀스택, 모바일 iOS 중 하나를 선택해야 하나요?</strong>
                                    <br />A.네, 지원 시 두 분야 중 하나를 선택해야 합니다. 서로 다른 프로그래밍 언어를 사용하여 부스트캠프 기간 동안 충분한 연습이 필요하기 때문입니다.
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link1-3">
                                    <strong>Q.기타 증빙 자료는 구체적으로 어떤 것을 말하는 건가요?</strong>
                                    <br />A.무언가에 온전히 몰입해 본 경험을 자유로운 형식으로 표현하여 제출하시면 됩니다. 반드시 프로그래밍과 관련된 경험일 필요는 없으며, 관심 있는 분야에서 끈기 있게 지속하거나 성취한 것을 입증할 수 있다면 무엇이든 괜찮습니다.
                                    <br /><br />
                                    <strong>Q.코딩테스트는 어떻게 진행되나요?</strong>
                                    <br />A.코딩테스트는 온라인으로 진행합니다. 개인 노트북을 지참해야 하며, 사용 가능한 프로그래밍 언어는 C, C++, C#, Java, JavaScript, Kotlin, Python2, Python3, Swift입니다. 자세한 내용은 추후 서류 합격자에 한해 안내해 드릴 예정입니다.
                                    <br /><br />
                                    <strong>Q.면접은 따로 없나요?</strong>
                                    <br />A.이번 부스트캠프는 별도의 면접 과정이 없습니다.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Tab.Container>
                    </Row>
                </Tab> */}

                {/* <Tab eventKey="profile" title="교육과정">
                    <Row className="justify-content-md-center">
                        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link2-1">
                            <Col md={3}>
                                <ListGroup className={styles.secondTab}>
                                    <ListGroup.Item action href="#link2-1">
                                        교육내용
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2-2">
                                        교육시간 및 장소
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={9} className={styles.content}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#link2-1">
                                    <strong>Q.부스트캠프에서 사용하는 프로그래밍 언어는 무엇인가요?</strong>
                                    <br />A.웹 풀스택 과정은 JavaScript, HTML, CSS를 사용하며, 모바일 iOS는 Swift를 사용합니다.
                                    <br /><br />
                                    <strong>Q.온라인으로 진행된다면 개인이 원하는 시간대에 참여할 수 있나요?</strong>
                                    <br />A.아니요, 부스트캠프는 동료와 함께 학습하는 프로그램이기 때문에 정해진 일과 시간(월~금 10:00~19:00)에 필수로 참여해야 합니다.
                                    <br /><br />
                                    <strong>Q.현업 또는 학업으로 코어타임 중 일부 시간대에 참여할 수 없는데 괜찮을까요?</strong>
                                    <br />A.정해진 일과 시간에 풀타임으로 참여가 가능한 사람만 참가 가능합니다.
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link2-2">
                                    <strong>Q.하루 일과 시간이 정해져 있나요?</strong>
                                    <br />A.네. 정해져 있습니다. 월~금 10:00~19:00에 필수로 참여해야 합니다.
                                    <br /><br />
                                    <strong>Q.현업 또는 학업으로 코어타임 중 일부 시간대에 참여할 수 없는데 괜찮을까요?</strong>
                                    <br />A.정해진 일과 시간에 풀타임으로 참여가 가능한 사람만 참가 가능합니다.
                                    <br /><br />
                                    <strong>Q.오프라인 활동이 있다면 어디서 진행되나요?</strong>
                                    <br />A.오프라인 활동은 주로 커넥트재단 교육장(서울 강남)에서 진행되며 운영 상황에 따라 추후 변동이 있을 수 있습니다.
                                    <br /><br />
                                    <strong>Q.온라인으로 진행된다면 개인이 원하는 시간대에 참여할 수 있나요?</strong>
                                    <br />A.아니요, 부스트캠프는 동료와 함께 학습하는 프로그램이기 때문에 정해진 일과 시간(월~금 10:00~19:00)에 필수로 참여해야 합니다.            
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Tab.Container>
                    </Row>
                </Tab> */}

                {/* <Tab eventKey="contact" title="기타">
                    <Row className="justify-content-md-center">
                        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link3-1">
                            <Col md={3}>
                                <ListGroup className={styles.secondTab}>
                                    <ListGroup.Item action href="#link3-1">
                                        교육비용
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link3-2">
                                        교육장비
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={9} className={styles.content}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#link3-1">
                                    <strong>Q.부스트캠프는 무료인가요?</strong>
                                    <br />A.네 무료입니다.
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link3-2">
                                    <strong>Q.참가자에게 노트북 대여가 가능한가요?</strong>
                                    <br />A.대여하지 않습니다. 개인 노트북을 지참해야 합니다.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Tab.Container>
                    </Row>
                </Tab>
                 */}
            </Tabs>
        </div>
  );
}