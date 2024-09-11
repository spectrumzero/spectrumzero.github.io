var navbarWidget = document.getElementById("navbar");

function toggleNavbar() {
  var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (prevScrollPos > currentScrollPos) {
      // 向上滚动，显示导航栏
      navbarWidget.style.top = '0';
    } else {
      // 向下滚动，隐藏导航栏
      navbarWidget.style.top = '-100px'; // 这里的 -100px 是一个示例，你可以根据导航栏的高度调整
    }
    prevScrollPos = currentScrollPos;
  });
}

window.onload = function () {
  toggleNavbar();
};
