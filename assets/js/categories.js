// let numberPages = document.querySelectorAll(".row-current-pagination a");

// numberPages.forEach(el => {
//   el.onclick = () => {
//     if(el != numberPages[numberPages.length-1]) {
//       numberPages.forEach(e => {
//         e.classList.remove('current-page');
//       })
//       el.classList.add('current-page');  
//     }
//   }

// })

let numberPages = $(".row-current-pagination a");

numberPages.each(function() {
  $(this).on('click', function() {
    if($(this) != numberPages.last()) {
      numberPages.removeClass('current-page');
      $(this).addClass('current-page');  
    }
  })
})