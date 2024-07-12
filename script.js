window.onscroll = function () {
  scrollHamNav();
  scrollHeader();
};

const scrollHamNav = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".ham-nav").classList.add("scroll");
  } else {
    document.querySelector(".ham-nav").classList.remove("scroll");
  }
};
const scrollHeader = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").classList.add("scroll");
  } else {
    document.querySelector("header").classList.remove("scroll");
  }
};
