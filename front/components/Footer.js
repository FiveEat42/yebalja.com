import styles from './Footer.module.css'

const Footer = () => {

	return (
		<div className={styles.footer}>
			<div className={styles.copyright}>
				Copyright 2020. 이름 All Rights Reserved.
			</div>
			<div className={styles.list}>
				<ul>
					<li><a href="#">부트캠프란?</a></li>
					<li><a href="#">예발자란?</a></li>
					<li><a href="#">About 5E</a></li>
					<li><a href="#">Email</a></li>
					<li><a href="#">Github</a></li>
					<li>
					<p>👋</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;



