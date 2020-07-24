import styles from './Members.module.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import classNames from 'classnames';

export default function Members() {

  return (
      <>
        <section className={styles.default}>
            <Container>
                <Row className={classNames({[styles.flex_center]: true, [styles.sm_no_flex]: true})}>
                    <Col md={8} className={styles.sm_no_float}>
                        <ul className={styles.team_members}>
                            <li className={styles.clearfix}>
                                
                                    <div className={styles.member_details}>
                                        <div>
                                        </div>
                                    </div>
        
                                    <div className={styles.member_details}>
                                        <div>
                                            <img src="https://user-images.githubusercontent.com/60066472/88357088-05461b80-cda5-11ea-8ea7-272d7e4a9bdf.jpg" alt="UI Designer" />
                                            <div className={styles.member_info}>
                                                <h3>John Doe</h3>
                                                <p>UI Designer</p>
                                            </div>
                                        </div>
                                    </div>
                            </li>
                            
                            <li className={styles.clearfix}>
                                <div className={styles.member_details}>
                                    <div>
                                        <img src="https://user-images.githubusercontent.com/60066472/88357087-04ad8500-cda5-11ea-9cb1-89507a66f918.jpg" alt="UI Designer" />
                                        <div className={styles.member_info}>
                                            <h3>John Doe</h3>
                                            <p>UI Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.member_details}>
                                    <div>
                                        <img src="https://user-images.githubusercontent.com/60066472/88357089-05461b80-cda5-11ea-9e6c-bb7b39c83ede.jpg" alt="UI Designer" />
                                        <div className={styles.member_info}>
                                            <h3>John Doe</h3>
                                            <p>UI Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.clearfix}>
                                <div className={styles.member_details}>
                                    <div>
                                        <img src="https://user-images.githubusercontent.com/60066472/88357086-0414ee80-cda5-11ea-9cf6-9d94c2353c1f.jpg" alt="UI Designer" />
                                        <div className={styles.member_info}>
                                            <h3>John Doe</h3>
                                            <p>UI Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.member_details}>
                                    <div>
                                        <img src="https://user-images.githubusercontent.com/60066472/88357091-05deb200-cda5-11ea-9c2e-56d69d8d7e95.jpg" alt="UI Designer" />
                                        <div className={styles.member_info}>
                                            <h3>John Doe</h3>
                                            <p>UI Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Col>
                    
                    <Col md={4} className={styles.sm_text_center}>
                        <div className={styles.team_overview}>
                            <h2>Who Are We?</h2>
                            <a href="#">5E 그들의 개발 히스토리</a>
                            <p><div>솔직히 저희도 이렇게 잘될 줄 몰랐어요 솔직히 저희도 이렇게 잘될 줄 몰랐어요 솔직히 저희도 이렇게 잘될 줄 몰랐어요</div></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
        <div className={styles.copyright}>
            <p>
                Me On:
                <a href="https://www.upwork.com/o/profiles/users/_~0195eb53c731b0e159/" target="_blank" className={styles.upwork}>UpWork</a>
                <a href="https://www.fiverr.com/thenahidul" target="_blank" className={styles.fiverr}>Fiverr</a>
                <a href="https://triplebyte.com/iv/a35URkk/cp/header" className={styles.triplebyte} target="_blank">Jobs</a>
            </p>
        </div>
    </>
    );
}