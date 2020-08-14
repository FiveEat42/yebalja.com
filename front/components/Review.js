import React , {useEffect} from "react";
import styles from './Review.module.css';
import classNames from 'classnames';
import Head from 'next/head';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { getData } from '../redux/actions/reviewAction';

function CommentList({data, id}) {
  return (
    <>
      { (id % 2) ? <RightCommentItem data={data}/> : <LeftCommentItem data={data}/> }
    </>
  )
}

function LeftCommentItem({data}) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.comment_block}>
          <img className={styles.comment_image} src="https://user-images.githubusercontent.com/37580034/89393019-37606180-d745-11ea-87f7-93a71ca3b152.png"/>
          <div className={styles.comment_dialog}>
            <div className={classNames({[styles.link]: true, [styles.link_adsila]: true})}>
              <a className={styles.link_item} href={data.link} target="_black">
                <span className={styles.link_item_name}>{data.title}<span className={styles.cta}>  ></span></span>
              </a>
            </div>
            <div className={styles.comment_body}>
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              <p className={styles.text}>{data.content}</p>
              <div className={styles.date}>
                <i className="fa fa-minus" aria-hidden="true"></i>
                <span className={styles.text}> {data.posted_date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function RightCommentItem({data}) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.comment_block_r}>
          <div className={styles.comment_dialog_r}>
            <div className={classNames({[styles.link]: true, [styles.link_adsila]: true})}>
              <a className={styles.link_item} href={data.link} target="_black">
                <span className={styles.link_item_name}>{data.title}<span className={styles.cta}>  ></span></span>
              </a>
            </div>
            <div className={styles.comment_body}>
              <i className={"fa fa-quote-left"} style={{ color: `white` }} aria-hidden="true"></i>
              <p className={styles.text_r}>{data.content}</p>
              <div className={styles.date}>
                <i className={"fa fa-minus"} style={{ color: `#white` }} aria-hidden="true"></i>
                <span className={styles.text_r}>  {data.posted_date}</span>
              </div>
            </div>
          </div>
          <img className={styles.comment_image_r} src="https://user-images.githubusercontent.com/37580034/89393019-37606180-d745-11ea-87f7-93a71ca3b152.png"/>
        </div>
      </div>
    </>
  )
}

export default function Review() {
  const program = useSelector((state) => state.programsReducer.data);
  const reviewData = useSelector((state) => state.reviewReducer.data);
  const dispatch = useDispatch();
  useEffect(()=>{
    getData().then(function(result){
      dispatch(result)    
    });
  },[]);
  const programData = reviewData[program] ?? [];
  console.log(reviewData[program])
  console.log(programData)
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <div className={styles.box}>
        {programData?.map((v, idx, id) => <CommentList data={v} key={idx} id={idx}/>)}
      </div>
    </>
  );
}