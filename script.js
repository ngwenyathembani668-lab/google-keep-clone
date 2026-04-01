// sidebar function
const sideBar = document.getElementById("sideBar");
// const active = document.querySelector(".active");
const sideBarBtn = document.querySelector(".sideBarBtn");
const firstSideBtn = document.querySelector(".firstSideBtn");
const secSideBtn = document.querySelector(".secSideBtn");
const thirdSideBtn = document.querySelector(".thirdSideBtn");
const fourthSideBtn = document.querySelector(".fourthSideBtn");
const fithSideBtn = document.querySelector(".fithSideBtn");
const sideBarBtn_t = document.querySelector(".sideBarBtn_t");
const sideBarBtn_th = document.querySelector(".sideBarBtn_th");
const sideBarBtn_f = document.querySelector(".sideBarBtn_f");
const sideBarBtn_fi = document.querySelector(".sideBarBtn_fi");

sideBar.addEventListener("mouseover", () => {

    sideBar.style.width = "350px";
    firstSideBtn.style.marginLeft = "0";
    secSideBtn.style.marginLeft = "0";
    thirdSideBtn.style.marginLeft = "0";
    fourthSideBtn.style.marginLeft = "0";
    fithSideBtn.style.marginLeft = "0";
    sideBarBtn.style.paddingLeft = "20px";
    sideBarBtn_t.style.paddingLeft = "20px";
    sideBarBtn_th.style.paddingLeft = "20px";
    sideBarBtn_f.style.paddingLeft = "20px";
    sideBarBtn_fi.style.paddingLeft = "20px";

});

sideBar.addEventListener("mouseout", () => {

    sideBar.style.width = "120px";
    firstSideBtn.style.marginLeft = "20px";
    secSideBtn.style.marginLeft = "20px";
    thirdSideBtn.style.marginLeft = "20px";
    fourthSideBtn.style.marginLeft = "20px";
    fithSideBtn.style.marginLeft = "20px";
    sideBarBtn.style.paddingLeft = "0";
    sideBarBtn_t.style.paddingLeft = "0";
    sideBarBtn_th.style.paddingLeft = "0";
    sideBarBtn_f.style.paddingLeft = "0";
    sideBarBtn_fi.style.paddingLeft = "0";

});