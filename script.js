// main class!!
class Note {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
}


class App {
    constructor() {
        this.notes = []
    }

    addNote({ title, text }) {
        const id = Date.now();
        const newNote = new Note(id, title, text);
        this.notes = [...this.notes, newNote];
    }
}


const note1 = {
    title: "Test note",
    text: "text."
}

const app = new App();
app.addNote(note1);
console.log(app.notes);







// sidebar function
const sideBar = document.getElementById("sideBar");
const active = document.querySelector(".active");
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
const sideN = document.querySelector(".sideN");
const sideR = document.querySelector(".sideR");
const sideE = document.querySelector(".sideE");
const sideA = document.querySelector(".sideA");
const sideB = document.querySelector(".sideB");

sideBar.addEventListener("mouseover", () => {

    sideBar.style.width = "350px";
    firstSideBtn.style.marginLeft = "0";
    secSideBtn.style.marginLeft = "0";
    thirdSideBtn.style.marginLeft = "0";
    fourthSideBtn.style.marginLeft = "0";
    fithSideBtn.style.marginLeft = "0";
    active.style.paddingLeft = "30px";
    sideBarBtn_t.style.paddingLeft = "20px";
    sideBarBtn_th.style.paddingLeft = "20px";
    sideBarBtn_f.style.paddingLeft = "20px";
    sideBarBtn_fi.style.paddingLeft = "20px";
    sideN.textContent = "Notes";
    sideR.textContent = "Reminders";
    sideE.textContent = "Edit";
    sideA.textContent = "Archive";
    sideB.textContent = "Bin";

});

sideBar.addEventListener("mouseout", () => {

    sideBar.style.width = "90px";
    firstSideBtn.style.marginLeft = "20px";
    secSideBtn.style.marginLeft = "20px";
    thirdSideBtn.style.marginLeft = "20px";
    fourthSideBtn.style.marginLeft = "20px";
    fithSideBtn.style.marginLeft = "20px";
    active.style.paddingLeft = "0";
    sideBarBtn_t.style.paddingLeft = "0";
    sideBarBtn_th.style.paddingLeft = "0";
    sideBarBtn_f.style.paddingLeft = "0";
    sideBarBtn_fi.style.paddingLeft = "0";
    sideN.textContent = "";
    sideR.textContent = "";
    sideE.textContent = "";
    sideA.textContent = "";
    sideB.textContent = "";

});