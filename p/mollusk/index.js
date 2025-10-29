/** General Idea
 * 
 * Take user guesses and compare them to answers[].
 * If correct, put the password into solved[] array.
 * If on final password, load custom styles.
 * Display appropriate messages for all guesses.
 * Load endgame once done, and celebrate.
 * 
 * 
 */





/* VARS */
let password = document.getElementById("submit_password");
let wordmap = document.getElementById("submit_wordmap");
let message_header = document.getElementById("submit_title");
let label_wordmap = document.getElementById("label_wordmap");
let input_wordmap = document.getElementById("input_wordmap");
let solved_array = [];
const answers = {
        "AUSTEN" : "NOVEL",
        "ELEVEN" : "COMB", 
        "ITALIA" : "TRAVEL", 
        "LOOPER" : "CYCLES", 
        "TAURUS" : "SIGNS", 
        "ILOVEU" : null, 
};


/* INITIAL CALLS */
printLetterBoxes();




/* FUNCTIONS */

/* Validate user form guesses, update message, check endgame, etc */
function validate(){
    // Print current solved state
    printLetterBoxes(solved_array);

    // Get, normalize user inputs
    let guess_password = password.value.toUpperCase().replaceAll(/\s/g,'');
    let guess_wordmap = wordmap.value.toUpperCase().replaceAll(/\s/g,'');

    // Clear form inputs
    password.value = "";
    wordmap.value = "";

    // Validate existence in answers OBJ
    let valid = false;
    for (const [key, value] of Object.entries(answers)){
        // If valid password and wordmap, and not already a solution, accept as valid
        if(guess_password == key && guess_wordmap == value){
            valid = true;
        }
        // Final solution
        if(solved_array.length == 5 && guess_password == key){
            valid = true;
        }
    }

    /* OUTCOMES */
    if(solved_array.includes(guess_password)){
        setMessage("Already guessed. Try again.", "red", "green");
    }
    else if (guess_password == "ILOVEU" && solved_array.length != 5){
        setMessage("Nice try, sneaky pete.", "red", "green");
    }
    else if (valid){
        solved_array.push(guess_password);
        setMessage("Correct! Nice job.", "green", "red");
    }
    else {
        setMessage("Sorry. Incorrect password or wordmap.", "red", "green");
    }


    // Special case: custom final password styles
    if(valid && solved_array.length == 5){
        document.getElementById("modal_submit").classList.add("final-state");
        message_header.textContent = "Can you finish this?";
        message_header.style.color = "white";
        label_wordmap.style.display = "none";
        submit_wordmap.style.display = "none";
    }

    // Print current letterbox state
    printLetterBoxes(solved_array);


    // Endgame cue
    if(solved_array.length == 6){
        endgame();
    }
}





/* Set messages in submit header, based on user guess validity */
function setMessage(message_text, color_add, color_remove){
    // Clear message 
    let message = "";

    // Set propertires
    message_header.textContent = message_text;
    message_header.classList.add(color_add);
    message_header.classList.remove(color_remove);
    message_header.classList.remove("black");

    // Special case: reset to default on modal close
    if(message_text == "reset"){
        message_header.textContent = "Submit Answers";
        message_header.classList.add("black");
    }
}





/* Print boxes for each guessed in solved_array[] */
function printLetterBoxes() {
  const container = document.getElementById('letter-box-container');
  // Clear previous content
  container.innerHTML = '';

  // Print word (6 letter boxes)
  for(let i = 0; i < 6; i++){
    let current_word;
    if(i < solved_array.length) {
        current_word = solved_array[i];
    }
    
    const word_box = document.createElement('div');
    word_box.classList.add('word_box');

    // Print individual letters
    for(let j = 0; j < 6; j++){
        const box = document.createElement('div');
        box.classList.add('letter-box');

        // final row has unique colors
        if(i == 5) {
            box.classList.add('row-final');
        }

        if(i < solved_array.length){
            box.textContent = current_word.charAt(j);
        } else {
            box.textContent = "";
        }

        word_box.appendChild(box);
    }

    // Append word to grid
    container.appendChild(word_box);
  }
}





/* Manage endstate after user guesses all passwords */ 
function endgame(){
    // Close submit modal
    let close_button = document.getElementById("close_button");
    close_button.click();

    // Load winner's room
    let images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++){
        images[i].classList.toggle("hidden");
    }
    document.getElementById("modal_congrats").classList.remove("hidden");

    // Hide buttons, show congratulations button
    let button_group = document.querySelector(".button-group");
    for (var i = 0; i < button_group.children.length; i++) {
        var childElement = button_group.children[i];
        childElement.classList.toggle("hidden");
    }
    
    // Play music
    let music = document.querySelector(".music");
    music.volume = 0.1;
    music.muted = false;
    document.getElementsByTagName("audio").muted = false;
}





/* Accessibility: submit form on ENTER key */
function submitOnEnter(){
    let submit = document.getElementById("submit");
    submit.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("submit").click();
        }
      });
}





