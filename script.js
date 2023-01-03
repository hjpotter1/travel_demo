const ACTIVE = 'active';
const active_video = document.querySelectorAll(
  '.main-structure .contect video '
);

const main_header = document.querySelector('.contect .text-description h1');
const second_header = document.querySelector('.contect .text-description h2');
const paragraph_header = document.querySelector(
  '.contect  .text-description p'
);
const text_link = document.querySelector('.contect  .text-description a');

active_video[0].classList.remove(ACTIVE);
active_video[0].classList.add(ACTIVE);

main_header.innerHTML = CONTENT_INFO.island.h1;
second_header.innerHTML = CONTENT_INFO.island.h2;
paragraph_header.innerHTML = CONTENT_INFO.island.p;
text_link.innerHTML = 'Explore';
