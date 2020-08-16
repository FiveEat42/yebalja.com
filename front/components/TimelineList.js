import TimelineListItem from "./TimelineListItem";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTimelineListData } from "../redux/actions/timelineListAction";

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