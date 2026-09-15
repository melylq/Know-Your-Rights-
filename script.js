function showPage(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.remove("hidden");
    window.scrollTo(0, 0);
  }
}

function comingSoon() {
  alert("This section is coming soon!");
}

showPage("home");