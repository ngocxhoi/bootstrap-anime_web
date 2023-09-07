$("#owl-demo").owlCarousel({
  loop: true,
  nav : true, 
  items: 1,
  // autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
});

let owlInfo = [
  {
    nameAnime: 'Demon Slayer',
    titleAnime: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, ad.'
  },
  {
    nameAnime: 'Naruto',
    titleAnime: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, ad.'
  },
  {
    nameAnime: 'One Piece',
    titleAnime: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, ad.'
  },
];

let index = 1;
$('.owl-stage').on('transitionstart', () => {
  index++;
  if(index > owlInfo.length) index = 1;
  $('.anime-name').text(owlInfo[index-1].nameAnime);
})
