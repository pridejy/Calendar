document.addEventListener("DOMContentLoaded", function() {
  const menuLinks = document.querySelectorAll(".menu-bar .index h3");
  
  // 각 메뉴 항목을 순환하면서 클릭 이벤트를 추가
  menuLinks.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault();
          
          const sectionId = link.innerText.toLowerCase();
          
          const section = document.querySelector(`.${sectionId}`);
          if (section) {
              section.scrollIntoView({ behavior: "smooth" });
          }
      });
  });
});