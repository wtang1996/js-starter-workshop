import $ from 'jquery';

import './style.scss';

let sec = 0;

setInterval(() => {
  sec++;
  $('#main').html('You have been on this page for '+ sec + ' seconds');
}, 1000);
