function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();

          let doOpen = document.querySelector("#open");
          doOpen.addEventListener("click", function () {

            document.querySelector("#open").style.display = "none";

            document.querySelector("#modal_2").style.right = "0%";

            document.querySelector("#modal_2").style.opacity = "1";

            document.querySelector("#exit").style.display = "block";
          })

          let doClose = document.querySelector("#exit");
          doClose.addEventListener("click", function () {

            document.querySelector("#modal_2").style.right = "-100%";

            document.querySelector("#open").style.display = "block";
          })

          $(function(){
            var $header = $('header'); //헤더를 변수에 넣기
            var $page = $('.page-start'); //색상이 변할 부분
            var $window = $(window);
            var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기

            $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
                pageOffsetTop = $page.offset().top;
            });

            $window.on('scroll', function(){ //스크롤시
                var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
                $header.toggleClass('down', scrolled); //클래스 토글
            });
            
        });

        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};   

document.addEventListener("DOMContentLoaded", function () {

  var familySiteLink = document.querySelector(".famaily_tab");
  familySiteLink.addEventListener("click", function () {
     
      var familySiteList = document.querySelector(".famaily_list");

      if (familySiteList.style.display === "none" || familySiteList.style.display === "") {
          familySiteList.style.display = "block"; // 열림
      } else {
          familySiteList.style.display = "none"; // 닫힘
      }
  });
});  
