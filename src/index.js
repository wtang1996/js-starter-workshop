import $ from 'jquery';

import './style.scss';

function* counter() {
  let sec = 0;
  while (sec < 1000) {
    yield sec++;
  }
}

const gen = counter();

setInterval(() => {
  $('#main').html('You have been on this page for ' + gen.next().value + ' seconds');
}, 1000);
