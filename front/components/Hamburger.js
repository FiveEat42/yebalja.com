import styles from './Hamburger.module.css';

const Hamburger = () => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <nav>
          <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
          <ul className="nav-list">
            <li>
              <a href="list">Services</a>
              <ul className="nav-dropdown">
                <li>
                  <a href="list">Web Design</a>
                </li>
                <li>
                  <a href="list">Web Development</a>
                </li>
                <li>
                  <a href="list">Graphic Design</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Hamburger;