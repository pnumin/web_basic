const handleChange = (t1, t2, lb1, lb2, s1, s2) => {
  t1.value = '' ;
  t2.value = '' ;
  lb1.innerHTML = sel1.value ;

  if (s1.value ==='℃') s2.value = '℉' ;
  else s2.value = '℃'

  lb2.innerHTML = sel2.value ;
}

document.addEventListener('DOMContentLoaded', ()=>{
  //select 요소 가져오기
  const sel1 = document.getElementById('sel1') ;
  const sel2 = document.getElementById('sel2') ;

  //input 요소 가져오기
  const txt1 = document.querySelector('#txt1') ;
  const txt2 = document.querySelector('#txt2') ;

  //label 요소 가져오기
  const labels = document.querySelectorAll('label') ;


  txt1.addEventListener('input', ()=>{
    if (sel1.value === '℃') {
      //섭씨온도 -> 화씨온도
      txt2.value = (parseFloat(txt1.value) * (9/5)) + 32 ;
    }
    else {
      //화씨온도 -> 섭씨온도
      txt2.value = (parseFloat(txt1.value) - 32 ) * (5/9);
    }
  });


  sel1.addEventListener('change', ()=>{
    handleChange(txt1, txt2, labels[0], labels[1],sel1,sel2 );
  });

  sel2.addEventListener('change', ()=>{
    handleChange(txt1, txt2, labels[1], labels[0],sel2,sel1 );
  });
});