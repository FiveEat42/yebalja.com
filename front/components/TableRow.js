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
            <div className={styles[data.aptitude]}><Badge type="Aptitude"/></div>
            <div className={styles[data.coding]}><Badge type="Coding"/></div>
            <div className={styles[data.interview]}><Badge type="Interview"/></div>
            <div className={styles[data.tryout]}><Badge type="Tryout"/></div>
          </div>
        </td>
      </tr>
    </>
  );
}