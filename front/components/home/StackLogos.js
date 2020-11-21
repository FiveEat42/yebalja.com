import classNames from 'classnames';
import Link from 'next/link';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTableData } from '../../redux/actions/tableAction';
import Head from 'next/head';
import {useRef, useEffect, useState, createRef} from 'react';
import { gsap } from "gsap/dist/gsap";
import React from 'react';
import styles from './StackLogos.module.css';

export default function StackLogos() {
  /*
  hover
   */
  let zero, one, two, three, four, five, six, seven = useRef(false);
  // let icon = useRef(false);
  // icon = [zero, one, two, three, four, five, six, seven];
  // let logo;
  //
//   useEffect(() => {
//     let hover = gsap.to(icon, {
//         scale: 1.5,
//         duration: 0.3,
//         paused: pause
//       });
//     let grid = [3, 4]
//
//     // this.animation = hover();
//
//     icon.addEventListener('mouseover', function() {
//       hover.play();
//     });
//     icon.addEventListener('mouseleave', function () {
//       hover.reverse();
//     })
// }, [])
  /*
  hover
   */

  //
	// constructor() {
	// 	this.canvas = document.createElement('canvas');
	// 	document.body.appendChild(this.canvas);
	// 	this.ctx = this.canvas.getContext('2d');
  //
  //
	// 	window.addEventListener('resize', this.resize.bind(this), false);
	// 	this.resize();
  //
	// 	this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
  //
	// 	window.requestAnimationFrame(this.animate.bind(this));
	// }
  //
	// function resize() {
	// 	this.stageWidth = document.body.clientWidth;
	// 	this.stageWidth = document.body.clientHeight;
  //
	// 	this.canvas.width = this.stageWidth * 2;
	// 	this.canvas.height = this.stageHeight * 2;
	// 	this.ctx.scale(2, 2);
	// }
  //
	// function animate(t) {
  //   window.requestAnimationFrame(this.animate.bind(this));
  //
  //   this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
  // }
  //
  // window.onload = () => {
  //   new App();
  // };





  return (
    <div className={styles.logos}>
      <div className={styles.logo}>
        <div><img src={require('../../srcs/stack_logos/python.png' )} ref={el => zero = el} /></div>
        <div><img src={require('../../srcs/stack_logos/php.png' )} ref={el => one = el} /></div>
        <div><img src={require('../../srcs/stack_logos/c.png' )} ref={el => two = el} /></div>
        <div><img src={require('../../srcs/stack_logos/js.png' )} ref={el => three = el} /></div>
        <div><img src={require('../../srcs/stack_logos/r.png' )} ref={el => four = el} /></div>
        <div><img src={require('../../srcs/stack_logos/c++.png' )} ref={el => five = el} /></div>
        <div><img src={require('../../srcs/stack_logos/java.png' )} ref={el => six = el} /></div>
        <div><img src={require('../../srcs/stack_logos/c#.png' )} ref={el => seven = el} /></div>
      </div>
    </div>
  );
}