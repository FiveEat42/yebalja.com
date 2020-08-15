import TimelineListItem from "./TimelineListItem";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTimelineListData } from "../redux/actions/timelineListAction";
import React, { useEffect } from 'react';

export default function TimelineList({program}) {

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