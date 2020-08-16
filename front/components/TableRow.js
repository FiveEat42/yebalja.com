import Link from "next/link";
import styles from './Table.module.css';
import Badge from './Badge';

export default function TableRow({data}) {

  return (
    <>
      <tr className={styles.row}>
        <td className={styles.cell}><Link href={data.link}><a className={styles.cellheader}>{data.program}</a></Link></td>
        <td className={styles.cell}>{data.number_of_recruits}</td>
        <td className={styles.cell}>{data.edu_period}</td>
        <td className={styles.cell} dangerouslySetInnerHTML={{__html: data.grant}}></td>
        <td className={styles.cell}>
          <div className={styles.cellbadges}>
            <div className={styles[data.aptitude ? true : false]}><Badge type="Aptitude"/></div>
            <div className={styles[data.coding ? true : false]}><Badge type="Coding"/></div>
            <div className={styles[data.interview ? true : false]}><Badge type="Interview"/></div>
            <div className={styles[data.tryout ? true : false]}><Badge type="Tryout"/></div>
          </div>
        </td>
      </tr>
    </>
  );
}