const getData = (dt, mvList, gubun) => {
  let testApiKey = '82ca741a2844c5c180a208137bb92bd7';
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testApiKey}&targetDt=${dt.value.replaceAll('-', '')}`;
  if (gubun != 'T') url = `${url}&repNationCd=${gubun}`;

  console.log('url=', url)

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data.boxOfficeResult.dailyBoxOfficeList);
      let mv = data.boxOfficeResult.dailyBoxOfficeList;
      let mvLi = '';
      for (let item of mv) {
        mvLi = mvLi + `<li>${item.rank} - ${item.movieNm}</li>`;
      }
      mvList.innerHTML = mvLi;
    })
    .catch(err => console.err(err));

}

const getGubun = (radios) => {
  let gubun;
      for (let item of radios) {
        if (item.checked) {
          gubun = item.value;
          break;
        }
      }

  return gubun ;
}

document.addEventListener('DOMContentLoaded', () => {
  //요소 가져오기 
  const dt = document.querySelector('input[type=date]');
  const mvList = document.querySelector('#mvList');
  const radios = document.getElementsByName('gubun');

  //어제 날짜 구하기
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  //어제 년월일 구하기 yyyy-mm-dd
  const year = yesterday.getFullYear();
  //getMonth() : 0월 ~ 11월
  // const month = (yesterday.getMonth() + 1) > 9 
  //               ? (yesterday.getMonth() + 1) 
  //               : '0'+(yesterday.getMonth() + 1) ;
  const month = String(yesterday.getMonth() + 1).padStart(2, '0');
  const day = String(yesterday.getDate()).padStart(2, '0');
  const maxDate = `${year}-${month}-${day}`;
  console.log(maxDate)

  dt.max = maxDate;

  //구분변경
  for (let radio of radios) {
    radio.addEventListener('click', () => {
      
      getData(dt, mvList,getGubun(radios));
    });
  }

  //데이터 가져오기
  dt.addEventListener('change', () => {
    let gubun;
    for (let item of radios) {
      if (item.checked) {
        gubun = item.value;
        break;
      }
    }
    console.log('gubun =', gubun)
    getData(dt, mvList, getGubun(radios));

  });
});