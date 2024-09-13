document.addEventListener('DOMContentLoaded', ()=>{
  //요소가져오기
  const txt1 = document.querySelector('input[type=text]');
  const bt1s = document.querySelectorAll('.objBt1') ;
  const bt2s = document.querySelectorAll('.objBt2') ;
  const bt3s = document.querySelectorAll('.objBt3') ;
  const bt4s = document.querySelectorAll('.objBt4') ;

  //오브젝트 이모지
  const emoji = {'사과' : '🍎',
                '바나나' : '🍌',
                '오렌지' : '🍊',
                '수박' : '🍉',
                '당근' :'🥕',
                '오이' : '🥒', 
                '브로콜리' : '🥦',

  }

  //추가 
  for(let bt of bt1s) {
    bt.addEventListener('click', (e) => {
      e.preventDefault() ;

      btkey = bt.innerHTML.replace('추가','') ;
      txt1.value = txt1.value + emoji[btkey] ;

    }) ;
  }

  //삭제
  for(let bt of bt2s) {
    bt.addEventListener('click', (e) => {
      e.preventDefault() ;

      btkey = bt.innerHTML.replace('삭제','') ;
      let tmArr = Array.from(txt1.value) ; 
      // console.log(tmArr)
      // console.log(emoji[btkey])
      tmArr = tmArr.filter( item => item != emoji[btkey]) ;

      txt1.value = tmArr.join('') ;

    }) ;

  }

  //수정
  for(let bt of bt3s) {
    bt.addEventListener('click', (e) => {
      e.preventDefault() ;
      //사과→오이 : btkey[0] 사과 btkey[1] 오이
      btkey = bt.innerHTML.split('→') ;
      let tmArr = Array.from(txt1.value) ;  
      tmArr = tmArr.map(item => item == emoji[btkey[0]] ? emoji[btkey[1]] : item);

      txt1.value = tmArr.join('') ;
    }) ;
  }

  //오브젝트 병합
  bt4s[0].addEventListener('click', (e)=>{
    e.preventDefault();

    let obj1 = {'수박' : '🍉'} ;
    let obj2 = { ...emoji, ...obj1} ;

    console.log(obj2) ;
    
  });

  //  json -> 객체
  bt4s[1].addEventListener('click', (e)=>{
    e.preventDefault();

    let jsonEmoji = JSON.stringify(emoji) ;
    console.log(jsonEmoji) ;

    let objEmoji = JSON.parse(jsonEmoji) ;
    console.log(objEmoji) ;
    
  });

  // 객체 -> json
  bt4s[2].addEventListener('click', (e)=>{
    e.preventDefault();

    let jsonEmoji = JSON.stringify(emoji) ;

    console.log(jsonEmoji) ;
    
  });

});