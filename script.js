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
const formTitle = document.getElementById("note-title");
const formText = document.getElementById("note-text");
const noteContainer = document.querySelector(".notes-box");
let formExpanded = false;

takeNote.addEventListener("click", () => {

    takeNote.classList.add("hidden");
    secForm.classList.add("expanded");
    tTitle.focus();


    formExpanded = true;

});

document.body.addEventListener("click", (event) => {

    if (!secForm.contains(event.target) && !takeNote.contains(event.target)) {

        const note = {
            title: formTitle.value.trim(),
            text: formText.value.trim()
        };

        if (note.title || note.text) {

            const noteEL = document.createElement("div");
            noteEL.classList.add("note");

            noteEL.innerHTML = `
                
            <div class="notes-box border">

                    <div class="notes-top">

                        <div class="check">
                            <svg class="checkMark" xmlns="http://www.w3.org/2000/svg" height="24px"
                                viewBox="0 -960 960 960" width="24px" fill="#000">
                                <path
                                    d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                            </svg>
                        </div>

                        <div class="note-input">
                            <input class="searchID" type="text" placeholder="${formText.value}">
                        </div>

                        <div class="pin-note toolsDark">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#65696D">
                                <path
                                    d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" />
                            </svg>
                        </div>

                    </div>

                    <div class="notes-bottom">

                        <div class="notes-tools toolsDark">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e3e3e3">
                                <path
                                    d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-177 23q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm120-160q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm200 0q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm120 160q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z" />
                            </svg>
                        </div>

                        <div class="notes-tools toolsDark">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e3e3e3">
                                <path
                                    d="M440-360h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                            </svg>
                        </div>

                        <div class="notes-tools toolsDark">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e3e3e3">
                                <path
                                    d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q440-607 440-640t-23.5-56.5Q393-720 360-720t-56.5 23.5Q280-673 280-640t23.5 56.5Q327-560 360-560t56.5-23.5ZM360-640Zm0 400Z" />
                            </svg>
                        </div>

                        <div class="notes-tools toolsDark">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e3e3e3">
                                <path
                                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
                            </svg>
                        </div>

                        <div class="notes-tools toolsDark">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e3e3e3">
                                <path
                                    d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z" />
                            </svg>
                        </div>

                        <div class="notes-tools toolsDark">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e3e3e3">
                                <path
                                    d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                            </svg>
                        </div>

                    </div>

            </div>

            
            
            `;

            noteContainer.appendChild(noteEL);
        };

        secForm.classList.remove("expanded");
        secForm.classList.add("hidden");
        takeNote.classList.remove("hidden");

        formExpanded = false;

        formTitle.value = "";
        formText.value = "";
    };

});

