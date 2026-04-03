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

    addNote(id, { title, text }) {
        // const id = Date.now();
        const newNote = new Note(id, title, text);
        this.notes = [...this.notes, newNote];
    }

    editNote(id, { title, text }) {
        this.notes.map(note => {
            if (note.id == id) {
                note.title = title;
                note.text = text;
            }
            return note;
        })
    }


    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id != id);
    }

    displayNotes() {
        this.notes.map(note => console.log(
            `
            ID: ${note.id}
            Title: ${note.title}
            Text: ${note.text}
            `
        ))
    }

}


const note1 = {
    title: "Test note",
    text: "text."
}
const updatedNote = {
    title: "Updated Test note",
    text: "updated text"
}

const app = new App();
app.addNote(0, note1);
app.addNote(1, note1);
app.addNote(2, note1);
app.addNote(3, note1);
console.log(app.notes);

setTimeout(() => {
    app.editNote(2, updatedNote);
    console.log(app.notes);
}, 1000);

app.deleteNote(2);

app.displayNotes();

// app.editNote(2, updatedNote);
// console.log(app.notes);







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

    // if (dark_light) {
    //     // sideBar.style.backgroundColor = "#202124";
    //     firstSideBtn.style.backgroundColor = "#41331C";
    // }else {
    //     firstSideBtn.style.backgroundColor = "#FEEFC3";
    // }; 

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


    // if (dark_light) {
    //     // sideBar.style.backgroundColor = "#202124";
    //     active.style.backgroundColor = " #FEEFC3";
    // }else {
    //     active.style.backgroundColor = "#41331C";
    // }; 

});


// dark or light mode!!


const dark = document.getElementById("dark");
const light = document.getElementById("light");
const sideBarBtnn = document.querySelector(".sideBarBtnn");
const nav = document.getElementById("nav");

dark.addEventListener("click", () => {
    if (dark) {
        document.body.style.backgroundColor = "#202124";
        // dark.style.display = "none";
        // light.style.display = "block";
        sideBar.style.backgroundColor = "#202124";
        sideA.style.color = "#e3e3e3";
        sideB.style.color = "#e3e3e3";
        sideE.style.color = "#e3e3e3";
        sideN.style.color = "#e3e3e3";
        sideR.style.color = "#e3e3e3";
        nav.style.backgroundColor = "#202124";
        // active.style.backgroundColor = "#41331C";
    } else {
        document.body.style.backgroundColor = "#fff";
        // dark.style.display = "block";
        // light.style.display = "none";
        sideBar.style.backgroundColor = "#fff";
        sideA.style.color = "#65696D";
        sideB.style.color = "#65696D";
        sideE.style.color = "#65696D";
        sideN.style.color = "#65696D";
        sideR.style.color = "#65696D";
        // active.style.backgroundColor = "#FEEFC3";
        // sideBarBtnn.style.backgroundColor = "#FEEFC3";
    };
});