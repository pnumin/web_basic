document.addEventListener('DOMContentLoaded', ()=>{
  //요소 가져오기
  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');
  const bts = document.querySelectorAll('.bt1') ;

  //회문버튼
  bts[0].addEventListener('click', (e)=>{
    e.preventDefault();

    //문자열
    let t1 = txt1.value.replaceAll(' ','') ;
    let t2 = txt1.value.replaceAll(' ','').split('').reverse().join('') ;

    console.log('t1 =', t1);
    console.log('t2 =', t2);

    if (t1 === t2) txt2.value = '회문입니다.' ;
    else txt2.value = '회문이 아닙니다.' ;
  }) ;

  //숫자합계 버튼
  bts[1].addEventListener('click', (e)=>{
    e.preventDefault();

    let total = 0;
    //전체 문자열 순회하면서 숫자 찾기
    for(let c of txt1.value) {
      //숫자구분 : 0~9 까지 
      if (!isNaN(c)) {
        total = total + parseInt(c) ;
      }
    }

    txt2.value = total ;
  }) ;

});