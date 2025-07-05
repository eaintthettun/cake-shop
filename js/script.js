if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('🎉 Service Worker registered with scope:', registration.scope);
        })
        .catch(err => {
          console.error('❌ Service Worker registration failed:', err);
        });
    });
  }

  const menuBtn=document.querySelector('.menu');
  // console.log('menuBtn',menuBtn);
  const navItem=document.querySelector('.nav-items');
  // console.log('navItem',navItem);
  menuBtn.addEventListener('click',function(){
    // alert('Menu btn clicked');
    // console.log('hello click');
    navItem.classList.toggle('show');
    if(navItem.classList.contains('show')){
      menuBtn.src='./photos/icons/cross.svg';
    }
    else{
      menuBtn.src='./photos/icons/menu.svg';
    }
  })


  