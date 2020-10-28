var elem = document.querySelector('.sidenav');
  var instance = new M.Sidenav(elem);

   // with jquery

//   $(document).ready(function(){
//    $('.sidenav').sidenav();
//   });
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.scrollspy');
//     var instances = M.ScrollSpy.init(elems, options);
//   });

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });