import React from "react";
import styles from './TeamMembers.module.css';

export default function TeamMembers() {
  return (
    <>
      <section className={styles.container}>
        <div className="container">
          <div className={styles.sm_no_flex}>
            <div className={styles.sm_no_float}>
              <ul className={styles.cardset}>

                <li className="clearfix">

                  <div className={styles.card}>
                    <div>
                      <img src={require('../../srcs/teams/tag_mihykim.png')} alt="mihykim" />
                      <div className={styles.description}>
                        <h3>Front-End</h3>
                        <p className={styles.txt}>Developer</p>
                          <p>
                          <a target="_blank" rel="noopener noreferrer" href="https://github.com/365kim">
                            <img alt="github" src={require('../../srcs/teams/link_github.png')}/></a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div>
                      <img src={require('../../srcs/teams/tag_secho.png')} alt="secho" />
                      <div className={styles.description}>
                        <h3>Back-End</h3>
                        <p className={styles.txt}>Developer</p>
                          <p>
                          <a target="_blank" rel="noopener noreferrer" href="https://github.com/SeongsangCHO">
                            <img alt="github" src={require('../../srcs/teams/link_github.png')}/></a>
                            &nbsp;
                          <a target="_blank" rel="noopener noreferrer" href="https://velog.io/@secho">
                            <img alt="velog" src={require('../../srcs/teams/link_velog.png')}/></a>
                        </p>
                      </div>
                    </div>
                  </div>

              </li>


              <li className="clearfix">

                <div className={styles.card}>
                    <div>
                      <img src={require('../../srcs/teams/tag_taelee.png')} alt="taelee" />
                      <div className={styles.description}>
                          <h3>Back-End</h3>
                          <p className={styles.txt}>Developer</p>
                          <p>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/taelee42">
                              <img alt="github" src={require('../../srcs/teams/link_github.png')}/></a>
                              &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://velog.io/@taelee">
                              <img alt="velog" src={require('../../srcs/teams/link_velog.png')}/></a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div>
                      <img src={require('../../srcs/teams/tag_jehong.png')} alt="jehong" />
                      <div className={styles.description}>
                          <h3>Front-End</h3>
                          <p className={styles.txt}>Developer</p>
                          <p>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/kirrikirri42">
                              <img alt="github" src={require('../../srcs/teams/link_github.png')}/></a>
                              &nbsp;
                            <a target="_blank" rel="noopener noreferrer" href="https://velog.io/@jehjong">
                              <img alt="velog" src={require('../../srcs/teams/link_velog.png')}/></a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </li>


                <li className="clearfix">

                  <div className={styles.card}>
                    <div>
                      <img src={require('../../srcs/teams/tag_daelee.png')} alt="daelee" />
                      <div className={styles.description}>
                        <h3>Front-End</h3>
                        <p className={styles.txt}>Developer</p>
                        <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/hidaehyunlee">
                          <img alt="github" src={require('../../srcs/teams/link_github.png')}/></a>
                          &nbsp;
                        <a target="_blank" rel="noopener noreferrer" href="https://velog.io/@hidaehyunlee">
                          <img alt="velog" src={require('../../srcs/teams/link_velog.png')}/></a>
                      </p>
                      </div>
                    </div>
                  </div>

                </li>
          
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
);
}