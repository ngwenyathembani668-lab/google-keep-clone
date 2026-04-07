// main class!!
class Note {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
};


class App {
    constructor() {
        this.notes = [];


        this.$activeForm = document.querySelector(".active-form");
        this.$inactiveForm = document.querySelector(".inactive-form");
        this.$noteTitle = document.querySelector("#note-title");
        this.$noteText = document.querySelector("#note-text");

        // this.addEventListeners();

    };




    // addEventListeners() {
    //     document.body.addEventListener("click", (event) => {
    //         this.handleFormClick(event);
    //     });
    // }



    openActiveForm() {
        this.$noteText.focus()
    }

    closeActiveForm() {
        this.$noteText.value = "";
        this.$noteTitle.value = "";
    }

    addNote({ title, text }) {

        const newNote = new Note(cuid(), title, text);
        this.notes = [...this.notes, newNote];
        this.displayNotes();

    };

    addNote({ title, text }) {
        if (text != "") {
            const newNote = new Note(cuid(), title, text);
            this.notes = [...this.notes, newNote];
            this.displayNotes();
        }
    }

    editNote(id, { title, text }) {
        this.notes.map(note => {
            if (note.id == id) {
                note.title = title;
                note.text = text;
            };
            return note;
        });
    };




    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id != id);
    };

    displayNotes() {
        this.notes.map(note => console.log(
            `
            ID: ${note.id}
            Title: ${note.title}
            Text: ${note.text}
            `
        ));
    };


};




const note1 = {
    title: "Test note",
    text: "text."
};
const updatedNote = {
    title: "Updated Test note",
    text: "updated text"
};

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
const sideBarBtn = document.querySelectorAll(".sideBarBtn");
const sideN = document.querySelector(".sideN");
const sideR = document.querySelector(".sideR");
const sideE = document.querySelector(".sideE");
const sideA = document.querySelector(".sideA");
const sideB = document.querySelector(".sideB");
const pText = document.querySelectorAll(".pText")

sideBar.addEventListener("mouseover", () => {

    sideBar.style.width = "350px";
    // firstSideBtn.style.marginLeft = "0";
    // secSideBtn.style.marginLeft = "0";
    // thirdSideBtn.style.marginLeft = "0";
    // fourthSideBtn.style.marginLeft = "0";
    // fithSideBtn.style.marginLeft = "0";
    // active.style.paddingLeft = "30px";
    // sideBarBtn_t.style.paddingLeft = "20px";
    // sideBarBtn_th.style.paddingLeft = "20px";
    // sideBarBtn_f.style.paddingLeft = "20px";
    // sideBarBtn_fi.style.paddingLeft = "20px";
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
    // firstSideBtn.style.marginLeft = "20px";
    // secSideBtn.style.marginLeft = "20px";
    // thirdSideBtn.style.marginLeft = "20px";
    // fourthSideBtn.style.marginLeft = "20px";
    // fithSideBtn.style.marginLeft = "20px";
    // active.style.paddingLeft = "0";
    // firstSideBtn.style.paddingLeft = "0";
    // sideBarBtn_t.style.paddingLeft = "0";
    // sideBarBtn_th.style.paddingLeft = "0";
    // sideBarBtn_f.style.paddingLeft = "0";
    // sideBarBtn_fi.style.paddingLeft = "0";
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
const nav = document.getElementById("nav");
const search_f = document.querySelectorAll(".search_f");
const search = document.querySelectorAll(".searchID");
const navOptions = document.querySelectorAll(".nav_options_t");
const nav_options = document.querySelectorAll(".nav-options");
const border = document.querySelectorAll(".border");
const hSvg = document.querySelectorAll(".hSvg");
const keep = document.querySelector(".keep");
const navSearch = document.getElementById("navSearch");
const sidePTags = document.querySelectorAll(".sidePTags");
const checkMark = document.querySelector(".checkMark");
const toolsDark = document.querySelectorAll(".toolsDark");

dark.addEventListener("click", () => {


    document.body.style.backgroundColor = "#202124";
    dark.style.display = "none";
    // light.style.display = "block";
    nav.style.backgroundColor = "#202124";
    sideBar.style.backgroundColor = "#202124";
    dark.style.backgroundColor = "#202124";
    light.style.backgroundColor = "#202124";


    navOptions.forEach(option => {
        option.style.backgroundColor = "#202124";
        option.style.transition = "background-color 0.25s ease";

        if (!option.dataset.darkHoverInitialized) {
            option.dataset.darkHoverInitialized = "true";

            option.addEventListener("mouseenter", () => {
                option.style.backgroundColor = "#2C2E30";
            });

            option.addEventListener("mouseleave", () => {
                option.style.backgroundColor = "#202124";
            });
        }
    });

    search.forEach(formTags => {
        formTags.style.backgroundColor = "#202124";
    });

    border.forEach(line => {
        line.style.border = "2px solid #5F6368";
    });

    nav.style.borderBottom = "2px solid #5F6368";

    // document.hSvg.style.fill = "#99999A";

    hSvg.forEach(rightSvg => {
        rightSvg.style.fill = "#99999A";
    });

    keep.style.color = "#E3E3E3";

    search_f.forEach(hSearch => {
        hSearch.style.backgroundColor = "#282A2C";
        hSearch.style.color = "#C4C7C5";
    });

    sidePTags.forEach(pTag => {
        pTag.style.color = "#E8EAED";
    })

    active.style.backgroundColor = "#41331C";

    checkMark.style.fill = "#fff";

    // toolsDark.style.backgroundColor = "#303135";


    toolsDark.forEach(options => {
        // options.style.backgroundColor = "#202124";
        options.style.transition = "background-color 0.25s ease";

        if (!options.dataset.darkHoverInitialized) {
            options.dataset.darkHoverInitialized = "true";

            options.addEventListener("mouseenter", () => {
                options.style.backgroundColor = "#303135";
            });

            options.addEventListener("mouseleave", () => {
                options.style.backgroundColor = "#202124";
            });
        }
    });


    sideBarBtn.forEach(sides => {
        // options.style.backgroundColor = "#202124";
        sides.style.transition = "background-color 0.25s ease";

        if (!sides.dataset.darkHoverInitialized) {
            sides.dataset.darkHoverInitialized = "true";

            sides.addEventListener("mouseenter", () => {
                sides.style.backgroundColor = "#28292C";
            });

            sides.addEventListener("mouseleave", () => {
                sides.style.backgroundColor = "#202124";
            });
        }
    });


});


const takeNote = document.getElementById("take-note");
const secForm = document.getElementById("sec-form");
const tTitle = document.querySelector(".tTitle");
let formExpanded = false;

takeNote.addEventListener("click", () => {

    takeNote.classList.add("hidden");
    secForm.classList.add("expanded");
    tTitle.focus();


    formExpanded = true;

});

document.body.addEventListener("click", (event) => {

    if (!secForm.contains(event.target) && !takeNote.contains(event.target)) {
        secForm.classList.remove("expanded");
        secForm.classList.add("hidden");
        takeNote.classList.remove("hidden");

        // addNote({ title, text });

        formExpanded = false;
    };



    // formExpanded && !secForm.contains(event.target))

}); 