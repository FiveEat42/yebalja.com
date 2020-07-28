import styles from "./Timeline.module.css";
import CalculateDays from "./CalculateDays";
import TimelineList from './TimelineList';
import classNames from 'classnames';

export default function TimelineListItem({data}) {
		return (
				<li className={styles.list}>
					<div className=classNames({[styles.card]: true, [styles.{data.card_style}: true]})>
						{data.name}
						<span className={styles.status_end}>
							<CalculateDays props={data.targetdate} />

						</span>
						<div className={styles.content}>
							{data.description} <br/>
							{data.date}
						</div>
					</div>
				</li>
		)
	}