// import styles from './Table.module.css';
//
// export default function BadgeDescription() {
//
//   return (
//     <>
//   {[
//     {
//       png: '../src/image/tryout badge.png',
//       text: '사전집중교육',
//     },
//     {
//       png: '../src/image/interview badge.png',
//       text: '면접',
//     },
//     {
//       png: '../src/image/coding test badge.png',
//       text: '코딩테스트',
//     },
//     {
//       png: '../src/image/aptitude badge.png',
//       text: '적성검사',
//     },
//   ]}.map((v, idx) => {
//               return (
//               <div className = {styles.badge}>
//                   <img src = {require({v.png})} width = "27" />
//                   <span className = {styles.tooltip}>{v.text}</span>
//                   </div>
//               );
//             })}
//             </>
//   );
// }