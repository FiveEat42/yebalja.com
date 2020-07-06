import React from 'react';
import './Table.module.css'
import Typography from '@material-ui/core/Typography';

export default function Table() {

	return (
		<div>
		<section class="tableBox">
			<div class="row intro">
				<div class="medium-12 columns">
					<h1>한눈에 보는 부트캠프</h1>
					<p>지금 나, '예발자'에게 필요한 부트캠프 코스는?</p>
				</div>
			</div>
		</section>
		<div className="contentColumns">
			<div className="colName">
				<div className="itemNull"></div>
				<div className="item"><h4>주관</h4></div>
				<div className="item"><h4>선발과정</h4></div>
				<div className="item"><h4>지원자격</h4></div>
				<div className="item"><h4>모집인원</h4></div>
				<div className="item"><h4>교육기간</h4></div>
				<div className="item"><h4>혜택</h4></div>
				<div className="item"><h4>교육지역</h4></div>
			</div>
			<div className="col">
				<div className="itemTitle"><h4>42Seoul</h4></div>
				<div className="item"><p>이노베이션 아카데미</p></div>
				<div className="item"><p>온라인테스트 -> 4주 집중교육과정</p></div>
				<div className="item"><p>해당년도 1월 1일 기준 성인 </p></div>
				<div className="item"><p>기수당 250여명</p></div>
				<div className="item"><p>최대 2년</p></div>
				<div className="item"><p>월 100만원(세전)</p></div>
				<div className="item"><p>강남구 개포디지털혁신파크</p></div>
			</div>
			<div className="col">
				<div className="itemTitle"><h4>SSAFY</h4></div>
				<div className="item"><p>삼성</p></div>
				<div className="item"><p>1차 온라인 CBT <br/>2차 현장 CBT, 면접</p></div>
				<div className="item"><p>만29세 이하의 대졸, 미취업자, 군필</p></div>
				<div className="item"><p>1000여명</p></div>
				<div className="item"><p>1년</p></div>
				<div className="item"><p>월 100만원(세후)</p></div>
				<div className="item"><p> - </p></div>
			</div>
			<div className="col">
				<div className="itemTitle"><h4>SW마에스트로</h4></div>
				<div className="item"><p>한국정보산업연합회</p></div>
				<div className="item"><p>서류심사<br/>온라인코딩테스트<br/>인적성검사<br/>심층면접</p></div>
				<div className="item"><p>SW개발 능력을 갖춘 미취업자</p></div>
				<div className="item"><p>150명</p></div>
				<div className="item"><p>6개월</p></div>
				<div className="item"><p>월 100만원<br/>IT기기 구입비 최대 150만원</p></div>
				<div className="item"><p>서울 강남구</p></div>
			</div>
			<div className="col">
				<div className="itemTitle"><h4>네이버 부스트캠프</h4></div>
				<div className="item"><p>네이버</p></div>
				<div className="item"><p>1차 온라인코딩테스트<br/>2차 온라인코딩테스트<br/>4주 부스트캠프 챌린지</p></div>
				<div className="item"><p>개발 경력 2년 미만</p></div>
				<div className="item"><p>미정-챌린지 과정 수료자</p></div>
				<div className="item"><p>4개월</p></div>
				<div className="item"><p> - </p></div>
				<div className="item"><p>역삼역/뚝섬역 베이스캠프</p></div>
			</div>
			<div className="col">
				<div className="itemTitle"><h4>우아한테크코스</h4></div>
				<div className="item"><p>우아한형제들</p></div>
				<div className="item"><p>온라인코딩테스트<br/>3주 프리코스<br/>최종 코딩테스트</p></div>
				<div className="item"><p>약 300라인의 프로그래밍 구현 가능/함수, 변수, 데이터타입, 조건문, 반복문 활용 가능/git 사용 가능</p></div>
				<div className="item"><p>약 50명</p></div>
				<div className="item"><p>약 10개월</p></div>
				<div className="item"><p>월 100만원</p></div>
				<div className="item"><p>잠실역 한국루터회관</p></div>
			</div>
    	</div>
		</div>
	);
  }
