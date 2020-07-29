export default function CalculateDays() {
  let currentdate = new Date();
  let targetdate = new Date('2020-07-31');
  {/* new Date()함수는 현재 날짜를 생성 */}
  {/* new Date(`MM/DD/YY`)는 입력한 날짜를 생성 */}
  {/* +는 js언어로 integer로 변환하라는 명령어의 약자 */}


  let difference =  targetdate.getTime() - currentdate.getTime();
  {/* getTime()함수는 날짜를 총 시간으로 표기 */}

  let timeLeft;
  {/* 남은 날짜를 담을 변수 */}


  // if (difference >= 0) {
    timeLeft = (Math.floor(difference / (1000 * 60 * 60 * 24))) + 1;
  //   {/* 시간의 차를 반내림하면 며칠 차이 나는지 구할 수 있다 */}
  // }
  // else {
  //   timeLeft = -1;
  //   {/* 지난 날은 무조건 -1로 표시하기로 정함 */}
  // }




  return (
    <>
    {timeLeft}
    </>
  );
}
