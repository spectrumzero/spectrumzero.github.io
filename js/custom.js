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
      navbarWidget.style.top = '-100px'; // 调整为导航栏高度
    }
    prevScrollPos = currentScrollPos;
  });
}

window.onload = function () {
  toggleNavbar();
};
