import styles from './Footer.module.css'

const Footer = () => {

	return (
		<div className={styles.footer}>
			<div className={styles.list}>
				<ul className={styles.item}>
					<li><p className={styles.wave}>👋</p></li>
					<li><a href="/about">About</a></li>
					<li><a href="#">Github</a></li>
					<li><p className={styles.wave}>👋</p></li>
				</ul>
			</div>
			<div className={styles.copyright}>
				Copyright 2020. 예발자닷컴 All Rights Reserved.
			</div>
		</div>
	);
}

export default Footer;



