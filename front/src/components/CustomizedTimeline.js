import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import TimelineCard from './TimelineCard';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            1월 21일
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
		  <TimelineCard
			  title={'SW 마에스트로'}
			  content={'내용1'}
			  cardImage={'http://bitly.kr/jwo55'}>
		  </TimelineCard>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            4월 15일
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
		  <TimelineCard
			  title={'SSAFY'}
			  content={'내용2'}
			  cardImage={'http://bitly.kr/jwo55'}>
		  </TimelineCard>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
	    <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            6월 30일
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
		  <TimelineCard
			  title={'네이버 부스트캠프'}
			  content={'내용3'}
			  cardImage={'http://bitly.kr/jwo55'}>
		  </TimelineCard>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
	  	<TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            7월 15일
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
		  <TimelineCard
			  title={'42Seoul'}
			  content={'내용1'}
			  cardImage={'http://bitly.kr/jwo55'}>
		  </TimelineCard>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
