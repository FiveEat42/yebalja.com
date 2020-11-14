import st from "./BootCamp.module.css";

const ConfirmBootCamp = () => {
  return (
    <section className={st.mainWrapper}>
      <div className={st.imageSection}>
		<div className={st.bootcampsImage}>
			이미지 들어갈 부분
		{/* // src={require("../src/image/bootcamps.png")}> */}
		</div>
      </div>

      <div className={st.border}>right</div>
    </section>
  );
};

const LogoBootCamp = () => {
  return <section className={st.mainWrapper}>more</section>;
};

const TempComponent = () => {
  return <section className={st.mainWrapper}>Temp</section>;
};

const BootCamp = () => {
  return (
    <div id={st.landingWrapper}>
      <TempComponent />
      <ConfirmBootCamp />
      <LogoBootCamp />
    </div>
  );
};

export default BootCamp;
