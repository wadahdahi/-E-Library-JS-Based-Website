// const ulNav = document.getElementById("ulNav");

const ulNavAnimation = () => {
  const logo = document.querySelector(".logo");
  const inputWrapper = document.querySelector(".input-wrapper");
  const ulNav = document.getElementById("ulNav");
  const btnLanguage = document.getElementById("btn-language");
  if (ulNav && inputWrapper) {
    setTimeout(() => {
      logo.style.visibility = "visible";
      logo.style.opacity = "1";
      inputWrapper.style.visibility = "visible";
      inputWrapper.style.opacity = "1";
      btnLanguage.style.visibility = "visible";
      btnLanguage.style.opacity = "1";
      ulNav.style.gap = "2.8rem";
    }, 100);
  }
};

ulNavAnimation();

// console.log(ulNav);
