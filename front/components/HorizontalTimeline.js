import React from 'react';
import '../styles/HorizontalTimeline.css';


export default function HorizontalTimeline() {

	return (
		<div>
			<section className="timeline">
				<ol>
					<li>
					<div>
						<time>SW 마에스트로&nbsp;<span className="label label-danger">모집마감</span></time>SW마에스트로 과정은 창의도전형 SW인재 육성으로 SW산업의 미래를 선도하는 정부지원 사업입니다.
					</div>
					</li>
					<li>
					<div>
						<time>우아한테크코스&nbsp;<span className="label label-success">모집중</span></time>우아한테크코스는 프로그래밍을 배워 프로그래머로서의 삶을 살고 싶은 사람들을 대상으로 하는 프로그래밍 교육 과정입니다.
					</div>
					</li>
					<li>
					<div>
						<time>SSAFY&nbsp;<span className="label label-success">모집중</span></time>고용노동부의 취업 지원 노하우와 삼성의 소프트웨어 교육 경험을 바탕으로, 취업에 성공하도록 돕는 프로그램입니다.
					</div>
					</li>
					<li>
					<div>
						<time>42Seoul 2-1차&nbsp;<span className="label label-success">모집중</span></time>최고의 소프트웨어 개발자로 성장할 수 있는 곳, 최고의 동료와 함께 성장할 수 있는 곳, 바로 42 SEOUL입니다.
					</div>
					</li>
					<li>
					<div>
						<time>네이버 부스트캠프&nbsp;<span className="label label-default">D-43</span></time>부스트캠프는 지속 가능한 개발자 양성을 목표로 하는 소프트웨어 개발 실무 교육 프로그램입니다.
					</div>
					</li>
					<li>
					<div>
						<time>42Seoul 2-2차&nbsp;<span className="label label-default">D-55</span></time>최고의 소프트웨어 개발자로 성장할 수 있는 곳, 최고의 동료와 함께 성장할 수 있는 곳, 바로 42 SEOUL입니다.
					</div>
					</li>
					<li>
					<div>
						<time>42Seoul 3-1차&nbsp;<span className="label label-default">D-70</span></time>최고의 소프트웨어 개발자로 성장할 수 있는 곳, 최고의 동료와 함께 성장할 수 있는 곳, 바로 42 SEOUL입니다.
					</div>
					</li>
					<li>
					<div>
						<time>42Seoul 3-2차&nbsp;<span className="label label-default">D-89</span></time>최고의 소프트웨어 개발자로 성장할 수 있는 곳, 최고의 동료와 함께 성장할 수 있는 곳, 바로 42 SEOUL입니다.
					</div>
					</li>
					<li></li>
					<li></li>
				</ol>

				<div className="arrows">
					<button className="arrow arrow__prev disabled" disabled>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow" />
					</button>
					<button className="arrow arrow__next">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow" />
					</button>
				</div>
			</section>
		</div>
	);
}
