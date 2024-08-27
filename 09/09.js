document.addEventListener('DOMContentLoaded', ()=>{
  //요소 가져오기
  const numSec = document.querySelector('#numSec') ;
  const bt = document.querySelector('button') ;

  bt.addEventListener('click', (e)=>{
    e.preventDefault();
    let arr = [] ;

    while(arr.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1 ;

      if(!arr.includes(n)) arr.push(n);
    }

    let tags = arr.map( item => `<span class='sp${Math.floor(item / 10)}'>${item}</span>`);
    tags.splice(6,0,`<span class='spplus'>+</span>`);
    tags = tags.join('');

    // console.log(tags)
    numSec.innerHTML = tags ;

  });
});