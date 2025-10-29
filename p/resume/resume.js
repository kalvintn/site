// Style management
let graphical_icon = document.querySelector('#graphical');
let textual_icon = document.querySelector('#textual');
let current_style = "graphical";


// Download functionality for resumes
let word_button = document.querySelector(".word");
let pdf_button = document.querySelector(".pdf");

word_button.addEventListener('click', function() {
    download("docx");
});

pdf_button.addEventListener('click', function() {
    download("pdf");
});

// Download appropriate file to user computer
function download(type){
    let filename = "kalvin_nguyen." + type;

    // Create a temporary anchor element
    var a = document.createElement("a");

    // Set filepath and download name
    a.href = filename;
    a.download = filename;

    // Trigger anchor, then remove it
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}





// Swap resume between graphical and textual
// param1: style to swap to
// param2: style to swap out
function swapStyle(swap_in){
    if(swap_in == current_style){
        return;
    }

    if(swap_in == "graphical"){
        graphical_icon.classList = "fa-solid fa-circle-check";
        textual_icon.classList = "";
        current_style = "graphical";
    } else if(swap_in == "textual"){
        graphical_icon.classList = "";
        textual_icon.classList = "fa-solid fa-circle-check";
        current_style = "textual";
    }
}