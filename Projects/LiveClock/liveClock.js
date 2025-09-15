const clock = document.querySelector('#clock')

setInterval((e)=>{
  let time = new Date();
  clock.innerHTML = time.toLocaleTimeString();
}, 2000);