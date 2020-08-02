import Link from "next/link";
import Aptitude from "./BadgeAptitude";
import CodingTest from "./BadgeCoding";
import Interview from "./BadgeInterview";
import Tryout from "./BadgeTryout";
import styles from './Table.module.css';
import Badge from './BadgeAptitude';

export default function TableRow({data}) {
  let Aptitude_TF = +data.badge.substring(0, 1) ? 'true' : 'false';
  let Coding_TF = +data.badge.substring(1, 2) ? 'true' : 'false';
  let Interview_TF = +data.badge.substring(2, 3) ? 'true' : 'false';
  let Tryout_TF = +data.badge.substring(3, 4) ? 'true' : 'false';

  return (
    <>
      <tr className={styles.row}>
        <td className={styles.cell}><Link href={data.link}><a className={styles.cellheader}>{data.name}</a></Link></td>
        <td className={styles.cell}>{data.number_of_recruits}</td>
        <td className={styles.cell}>{data.edu_period}</td>
        <td className={styles.cell}>{data.grant}</td>
        <td className={styles.cell}>
          <div className={styles.cellbadges}>
            <div className={styles[Aptitude_TF]}><Aptitude /></div>
            <div className={styles[Coding_TF]}><CodingTest/></div>
            <div className={styles[Interview_TF]}><Interview /></div>
            <div className={styles[Tryout_TF]}><Tryout /></div>

          </div>
        </td>
      </tr>
    </>
  );
}