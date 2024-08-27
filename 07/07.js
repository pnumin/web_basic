document.addEventListener('DOMContentLoaded', ()=>{
  //DOM 생성후 img, input, button 가져오기
  const upDownImg = document.querySelector("img") ;
  const numInput = document.querySelector("#num1") ;
  const bt = document.querySelector("button") ;

  //input focus
  numInput.focus();

  //랜덤변수
  let n ; 
  //flag변수
  let flag = false ;

  //button 클릭시
  bt.addEventListener('click', (e)=>{
    e.preventDefault() ;
    //랜덤수 생성
    if (!flag) {
      n = Math.floor(Math.random() * 100) + 1 ; //1~100까지 랜덤수
      console.log(n);
      flag = true ;

      //입력초기화
      if (numInput.style.display == "none" ){
        numInput.style.display = "inline";
        numInput.value='' ;
        numInput.focus();
        bt.innerHTML = '확인' ;
        upDownImg.setAttribute('src', '../img/what.png') ;
        return ;
      }
    }

    console.log(parseInt(numInput.value))
    //숫자비교
    if ( n === parseInt(numInput.value)) {
      //맞춘경우
      upDownImg.setAttribute('src', '../img/good.png') ;
      numInput.style.display = "none";
      bt.innerHTML = '숫자를 다시 생성하세요.' ;
      flag = false;
    }
    else if (n > parseInt(numInput.value)) {
      //up
      upDownImg.setAttribute('src', '../img/up.png') ;
    }
    else {
      //down
      upDownImg.setAttribute('src', '../img/down.png') ;
    }
  });

});