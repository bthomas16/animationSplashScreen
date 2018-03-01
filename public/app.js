if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then((registration) => {
      console.log("Service Worker registered at", registration.scope)
    }), function(err) {
      console.log('SW registration failed', err)
    }
}

document.addEventListener('DOMContentLoaded', () => {
  // document.querySelector('#splash').addEventListener('transitionend', (event) => {
  //   event.target.remove();
  // });
  // requestAnimationFrame(() => {
  //   document.querySelector('#splash').classList.add('animate');
  // });
  $('#title').animate({
    fontSize: '3em',
    backgroundColor: 'white',
    fontWeight: '2em',
    opcity: 1
  }, 1500).animate({
    fontSize: '2em',
    color: 'red',
    fontWeight: '1em',
    opacity: 1
  }, 1500, () => {
    // change window.location to route page
    // createBubArr();
    // document.body.append(bubArr);
    // animateBubArr(bubArr);
    console.log('made it here')
  })
  $('img').animate({
    opacity: 1
  }, 4000);
});

// function makeRand(min, max) {
//   return Math.floor(Math.random() * (max - min) + min )
// }
