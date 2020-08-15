import TimelineListItem from "./TimelineListItem";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTimelineListData } from "../redux/actions/timelineListAction";
import React, { useEffect } from 'react';

export default function TimelineList({program}) {
//   const timeline = {
//       ftseoul: [
//       {
//         edu: `false`,
//         name: '2기 1차 라피신',
//         description: '본과정 선발을 위한 집중 교육 과정',
//         startdate: '2020-06-29 00:00:00',
//         enddate: '2020-07-24 00:00:00',
//       },
//       {
//         edu: 'false',
//         name: '2기 2차 라피신',
//         description: '본과정 선발을 위한 집중 교육 과정',
//         startdate: '2020-07-27 00:00:00',
//         enddate: '2020-08-24 00:00:00',
//       },
//       {
//         edu: 'true',
//         name: '2기 본과정',
//         description: '2기 1차, 2차 본과정 (최대 2년)',
//         startdate: '2020-09-01 00:00:00',
//         enddate: '2022-09-01 00:00:00',
//       },
//       {
//         edu: 'false',
//         name: '3기 1차 라피신',
//         description: '본과정 선발을 위한 집중 교육 과정',
//         startdate: '2020-08-31 00:00:00',
//         enddate: '2020-09-25 00:00:00',
//       },
//       {
//         edu: 'false',
//         name: '3기 2차 라피신',
//         description: '본과정 선발을 위한 집중 교육 과정',
//         startdate: '2020-10-05 00:00:00',
//         enddate: '2020-10-30 00:00:00',
//       },
//       {
//         edu: 'true',
//         name: '3기 본과정',
//         description: '3기 1차, 2차 본과정 (최대 2년)',
//         startdate: '2020-11-15 00:00:00',
//         enddate: '2022-11-15 00:00:00',
//       },
//     ],
//     ssafy: [
//       {
//         edu: `false`,
//         name: '접수기간',
//         description: '4기 서류 접수',
//         startdate: '2020-05-11 09:00:00',
//         enddate: '2020-05-25 17:00:00',
//       },
//       {
//         edu: 'false',
//         name: '1차 선발과정',
//         description: '온라인 SW 적성진단',
//         startdate: '2020-06-06 11:00:00',
//         enddate: '2020-06-06 00:00:00',
//       },
//       {
//         edu: 'false',
//         name: '2차',
//         description: '현장 인터뷰',
//         startdate: '2020-06-17 00:00:00',
//         enddate: '2020-06-19 00:00:00',
//       },
//       {
//         edu: 'true',
//         name: '교육 시작',
//         description: '입과 및 교육 (1년)',
//         startdate: '2020-07-07 00:00:00',
//         enddate: '2021-07-07 00:00:00',
//       },
//     ],
//     boostcamp: [
//       {
//         edu: `false`,
//         name: '접수기간',
//         description: '4기 서류지원',
//         startdate: '2020-06-01 11:00:00',
//         enddate: '2020-06-30 23:59:00',
//       },
//       {
//         edu: 'false',
//         name: '1차',
//         description: '온라인 코딩테스트',
//         startdate: '2020-07-04 14:00:00',
//         enddate: '2020-07-04 00:00:00',
//       },
//       {
//         edu: 'false',
//         name: '2차',
//         description: '온라인 코딩테스트',
//         startdate: '2020-07-11 00:00:00',
//         enddate: '2020-07-11 00:00:00',
//       },
//       {
//         edu: 'false',
//         name: '최종 합격자 발표',
//         description: '부스트캠프 챌린지 합격자 선발',
//         startdate: '2020-07-20 00:00:00',
//         enddate: '2020-07-20 00:00:00',
//       },
//       {
//         edu: 'false',
//         name: '부스트캠프 챌린지',
//         description: '수료자 중에서 멤버쉽 합격자 선발',
//         startdate: '2020-07-27 00:00:00',
//         enddate: '2020-08-21 00:00:00',
//       },
//       {
//         edu: 'true',
//         name: '부스트캠프 멤버쉽',
//         description: '선발자만 부스트캠프 멤버쉽 참가 가능',
//         startdate: '2020-08-31 00:00:00',
//         enddate: '2020-12-21 00:00:00',
//       },
//     ],
//     soma: [
//       {
//         edu: `false`,
//         name: '접수기간',
//         description: '11기 서류 접수',
//         startdate: '2020-01-22 10:00:00',
//         enddate: '2020-02-21 17:00:00',
//       },
//       {
//         edu: `false`,
//         name: '1차 전형',
//         description: '온라인 코딩테스트',
//         startdate: '2020-03-14 14:00:00',
//         enddate: '2020-03-14 00:00:00',
//       },
//       {
//         edu: `false`,
//         name: '인적성 검사',
//         description: '온라인 AI 인적성 검사',
//         startdate: '2020-04-08 00:00:00',
//         enddate: '2020-05-06 00:00:00',
//       },
//       {
//         edu: `false`,
//         name: '2차 전형',
//         description: '온라인 코딩테스트',
//         startdate: '2020-04-26 14:00:00',
//         enddate: '2020-04-26 00:00:00',
//       },
//       {
//         edu: `false`,
//         name: '심층면접',
//         description: '오프라인 심층면접',
//         startdate: '2020-05-08 00:00:00',
//         enddate: '2020-05-09 00:00:00',
//       },
//       {
//         edu: `true`,
//         name: '본과정',
//         description: '6개월 연수과정',
//         startdate: '2020-06-01 00:00:00',
//         enddate: '2020-11-30 00:00:00',
//       },
//     ],
//     woowa: [
//       {
//         edu: 'false',
//         name: '2기 선발 마감',
//         description: '3기 2021년 시작 예정',
//         startdate: '2019-10-25 00:00:00',
//         enddate: '2020-1-03 00:00:00',
//       },
//     ],
//     likelion: [
//       {
//         edu: `false`,
//         name: '2020년 선발 마감',
//         description: '선발절차는 대학별 상이',
//         startdate: '2020-03-17 00:00:00',
//         enddate: '2020-03-17 00:00:00',
//       },
//     ]
// }
const timelineListData = useSelector((state) => state.timelineListReducer.data);
const dispatch = useDispatch();
useEffect(() => {
  getTimelineListData().then(function(result){
    dispatch(result)
  });
}, []);

  return (
    <>
    {timelineListData[program]?.map((v, index, id) => <TimelineListItem data={v} key={index} id={index} />)}
  </>
)
}