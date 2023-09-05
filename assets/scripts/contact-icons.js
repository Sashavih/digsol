
let up = document.querySelector(".up");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
}

$('body').on('click', '.up', function(e){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
