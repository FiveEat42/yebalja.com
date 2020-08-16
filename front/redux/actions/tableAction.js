import axios from 'axios';
//액션(type을 가진 객체) 생성함수
//API를 호출해서 JSON데이터를 가져오고 리듀서에 해당 상태를 변화시키기 위한 TYPE을 지정해줌
export const getTableData =  async () => {
  //API 호출
  const tableData = await axios.get('http://localhost:5000/api/json/table');
  return {
    type: 'GET_TABLE_DATA',
    payload : tableData.data
  }
}
