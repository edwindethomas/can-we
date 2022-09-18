  const btnNo = document.querySelector('#no');
  const btnSi = document.querySelector('#si');

  function yes() {
    alert('Graciaaaaaaaaaaaaaaaass!!!❤️🥰');
  }
  const no = () =>{
    const randNum = Math.floor(Math.random()*screen.width);
    const randNum2 = Math.floor(Math.random()*screen.height);
    btnNo.style.top = randNum2+'px';
    btnNo.style.left = randNum+'px';
  }
  btnSi.addEventListener('click',yes);
  btnNo.addEventListener('mouseover',no);
  btnNo.addEventListener('click',no);