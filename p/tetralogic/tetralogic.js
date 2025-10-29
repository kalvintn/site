/* CUSTOM GAME DATA */
const JSON_OBJ = {
    easy : [
        { name: "First Four 'Lost' Numbers", items: "4, 8, 15, 16" },
        { name: "Parts of a Book", items: "Spine, Cover, Author, Index" },
        { name: "Literary Devices", items: "Metaphor, Simile, Alliteration, Hyperbole" },
        { name: "Types of Angles", items: "Acute, Right, Obtuse, Straight" },
        { name: "The World's Oceans", items: "Arctic, Southern, Indian, Pacific" },
        { name: "Parts of a Cell", items: "Ribosomes, Lysosomes, Cytoplasm, Nucleus" },
        { name: "Brass Instruments", items: "Trumpet, Trombone, French Horn, Tuba" },
        { name: "History of Art Movements", items: "Impressionism, Abstract, Cubism, Surrealism" },
        { name: "Renewable Energy", items: "Biomass, Solar, Wind, Geothermal" },
        { name: "Geometric Transformations", items: "Translation, Reflection, Dilation, Rotation" },
        { name: "Common Apples", items: "Fuji, Gala, Honeycrisp, Cosmic" },
        { name: "Types of Clouds", items: "Cirrus, Cumulus, Stratus, Nimbus" },
        { name: "Book Genres", items: "Fantasy, Adventure, Sci-Fi, Romance" },
        { name: "Reduplicative Words", items: "Yo-yo, Bon-Bon, Mahi-mahi, Murmur"},
        { name: "Utterings of a Giant", items: "Fee, Fi, Fo, Fum" },
        { name: "American Football Terms", items: "Sack, Blitz, Snap, Down" },
        { name: "Mythical Creatures", items: "Chimera, Baba Yaga, Banshee, Jinn"},
        { name: "Musical Notes", items: "Do, Fa, Ti, La" },
        { name: "Classical Composers", items: "Beethoven, Mozart, Bach, Tchaikovsky" },
        { name: "World Religions", items: "Christianity, Islam, Hinduism, Buddhism" },
        { name: "Countries With One Neighbor", items: "South Korea, The Gambia, Haiti, Timor-Leste" },
        { name: "Apple _____", items: "Cider, Juice, Watch, Pie" },
        { name: "Weather Events", items: "Tornado, Hailstorm, Hurricane, Blizzard" },
        { name: "Famous Mononyms", items: "Adele, Selena, Cher, Prince" },
        { name: "Santa's Reindeer", items: "Dancer, Cupid, Comet, Dasher" },
        { name: "BLT Ingredients", items: "Bacon, Lettuce, Tomato, Bread" },
        { name: "Livestock", items: "Horse, Sheep, Chicken, Pig" },
        { name: "Country Capitals", items: "Dhaka, Kabul, Canberra, Algiers" },
        { name: "Eras in Time", items: "Paleozoic, Mesozoic, Cenozoic, Precambrian" },
        { name: "More About Trees", items: "Coniferous, Deciduous, Evergreen, Broadleaf" },
        { name: "Types of Poetry", items: "Limerick, Haiku, Sonnet, Villanelle" },
        { name: "Western Zodiac", items: "Libra, Virgo, Scorpio, Capricorn" },
        { name: "Neurotransmitters", items: "Dopamine, Serotonin, Epinephrine, Endorphin" },
        { name: "Moon Phases", items: "Waxing, Waning, Crescent, Gibbous" },
        { name: "Great Philosophers", items: "Aristotle, Plato, Cicero, Confucius" },
        { name: "Temperature Scales", items: "Celsius, Fahrenheit, Kelvin, Rankine" },
        { name: "Social Media", items: "Facebook, Twitter, Instagram, Pinterest" },
        { name: "Spaaace", items: "Red Giant, White Dwarf, Neutron Star, Black Hole" },
        { name: "Board Games", items: "Monopoly, Go, Clue, Sorry" },
        { name: "Felines", items: "Ocelot, Tiger, Jaguar, Leopard" },
        { name: "The First Four Biblical Gospels", items: "Matthew, Mark, John, Luke" },
        { name: "Neutral Countries During WWII", items: "Ireland, Spain, Sweden, Switzerland" },
        { name: "Parts of the Eye", items: "Lens, Cornea, Pupil, Iris" },
        { name: "Municipalities", items: "Town, County, City, Village" },
        { name: "Card Suits", items: "Hearts, Diamonds, Jacks, Clubs" },
        { name: "Royal Titles", items: "Prince, Earl, Baron, King" },
        { name: "Natural Fibers", items: "Cotton, Wool, Silk, Linen" },
        { name: "Shapes", items: "Cylinder, Pyramid, Cone, Sphere" },
        { name: "Major World Rivers", items: "Amazon, Ganges, Nile, Volga" },
        { name: "Shoe Parts", items: "Heel, 1, Sole, Tongue" },
    ],
    medium : [
        { name: "Animals of the Chinese Zodiac", items: "Ox, Rabbit, Goat, Rat" },
        { name: "Pokémon Types", items: "Grass, Electric, Dark, Psychic" },
        { name: "Types of Chemical Bonds", items: "Ionic, Covalent, Metallic, Hydrogen" },
        { name: "Chess Terms", items: "Fork, Pin, Skewer, Promotion "},
        { name: "Martial Arts", items: "Wushu, Aikido, Krav Maga, Hapkido" },
        { name: "Names of macOS Versions", items: "Monterey, Catalina, Mojave, Sierra" },
        { name: "Types of Pasta", items: "Pene, Orzo, Farfalle, Ziti" },
        { name: "Rock Music Subgenres", items: "Alternative, Grunge, Metal, Punk" },
        { name: "Computer Memory Storage", items: "Hard Drives, Caches, Registers, RAM" },
        { name: "Types of Brain Waves", items: "Beta, Alpha, Delta, Theta" },
        { name: "Works of Jane Austen", items: "Emma, Mansfield Park, Persuasion, Northanger Abby" },
        { name: "Movies Set in Florida", items: "Caddyshack, Scarface, 2 Fast 2 Furious, Bad Boys" },
        { name: "Korean Delicacies", items: "Tteokbokki, Bulgogi, Bibimbap, Japchae" },
        { name: "Puzzles", items: "Crossword, Jigsaw, Mazes, Sudoku" },
        { name: "Foreign Loanwords", items: "Cafe, Kindergarden, Paparazzi, Karaoke" },
        { name: "Islands", items: "Cook, Sandwich, Solomon, Shetland" },
        { name: "Marvel Villains", items: "Mystique, Vulture, Ronan, Kingpin" },
        { name: "Brands of Blenders", items: "Ninja, Nutribullet, Wolf, Cuisinart" },
        { name: "British Spelling", items: "Colour, Flavour, Honour, Neighbour" },
        { name: "Dogs by Breed Group", items: "Sporting, Hound, Working, Terrier" },
        { name: "Compound Words", items: "Toothbrush, Runway, Starfish, Sunflower" },
        { name: "Citrus Fruits", items: "Grapefruit, Yuzu, Kumquat, Citron" },
        { name: "Tea Types", items: "Black, Herbal, Green, Ginger"},
        { name: "Knighthoods/Damehoods", items: "Judi Dench, Helen Mirren, Michael Caine, Ian McKellen" },
        { name: "Mountain Ranges", items: "Cascade, Ural, Alaska, Andes" },
        { name: "Grains", items: "Barley, Sorghum, Buckwheat, Millet" },
        { name: "Email Options", items: "Forward, Reply, CC, BCC" },
        { name: "Nothing", items: "Zip, Nill, None, Nada" },
        { name: "SI Base Units", items: "Ampere, Kelvin, Mole, Candela" },
        { name: "Spices", items: "Saffron, Turmeric, Paprika, Cumin" },
        { name: "Sledding", items: "Monobob, Luge, Bobsled, Skeleton" },
        { name: "Minerals", items: "Silica, Quartz, Feldspar, Mica" },
        { name: "The Human Body", items: "Hemoglobin, Myoglobin, Collagen, Keratin" },
        { name: "Forms of Energy", items: "Kinetic, Potential, Thermal, Chemical" },
        { name: "Forms of Storytelling", items: "Fable, Allegory, Parable, Myth" },
        { name: "Tom Clancy's Games", items: "The Division, Ghost Recon, Splinter Cell, Rainbox Six" },
        { name: "Former Empires", items: "Byzantine, Roman, Ottoman, Mongol" },
        { name: "World of Physics", items: "Newton, Kepler, Ohm, Hooke" },
        { name: "Goodbye", items: "Ciao, Adios, Farewell, Ta-ta" },
        { name: "Types of Engineers", items: "Mechanical, Electrical, Civil, Computer" },
        { name: "Bands with Three Members", items: "Nirvana, Green Day, Blink-182, Boygenius" },
        { name: "Into Obscurity", items: "Cloud, Fog, Haze, Mist" },
        { name: "Monopoly Squares", items: "Chance, Go, Jail, Boardwalk" },
        { name: "When Harry Met Sally", items: "When, Harry, Met, Sally" },
        { name: "Welcome to Set", items: "Lights, Camera, Action, Cut" },
        { name: "The Statue of Liberty", items: "Crown, Robe, Tablet, Torch" },
        { name: "Vroom Vroom", items: "Low, Reverse, Park, Neutral" },
        { name: "Horror Franchises", items: "Purge, Ring, Saw, Scream" },
        { name: "Insect Homophones", items: "Aunt, Beatle, Flee, Nat" },
        { name: "On the Condition", items: "Might, May, Can, Could" },
    ],
    hard : [
        { name: "Types of Hand Stitches", items: "Back, Cross, Slip, Straight" },
        { name: "Classical Greek Muses", items: "Calliope, Clio, Erato, Thalia" },
        { name: "Disney Villains", items: "Hades, Yzma, Queen of Hearts, Lady Tremaine" },
        { name: "_____ Call", items: "Curtain, Close, House, Prank" },
        { name: "_____ Case", items: "Cold, Use, Edge, Test" },
        { name: "Math Proofs", items: "Contradiction, Induction, Exhaustion, Direct" },
        { name: "Slippery Things", items: "Ice, Grease, Slippers, Bananas" },
        { name: "Things That Are Woody", items: "Trees, Guitar, Cabinet, Allen" },
        { name: "Genetic Mutations", items: "Frameshift, Missense, Nonsense, Silent" },
        { name: "Types of Electrical Circuits", items: "Series, Parallel, Combination, Mesh" },
        { name: "Animal Group Names", items: "Crash, Band, Stench, Pack" },
        { name: "Failed Proposed U.S. States", items: "Jefferson, Franklin, Superior, Lincoln" },
        { name: "Heteronyms", items: "Lead, Bow, Alternate, Windy" },
        { name: "Quarks", items: "Top, Down, Charm, Strange" },
        { name: "Mathematicians", items: "Fermat, Hilbert, Riemann, Erdös" },
        { name: "Valid Topological Deformations", items: "Bend, Crush, Twist, Stretch"},
        { name: "Ice Cream Toppings", items: "Marshmallow, Chocolate, Sprinkle, Nuts" },
        { name: "NATO Alphabet", items: "Romeo, Tango, India, Hotel" },
        { name: "Common Dreams", items: "Falling, Flying, Chased, Rotten Teeth" },
        { name: "Weapons in 'Clue'", items: "Wrench, Rope, Pipe, Poison" },
        { name: "Paradoxes", items: "Zeno's, Liar's, Barbershop, Russell's" },
        { name: "Forms of Tax", items: "Income, Sales, Property, Estate" },
        { name: "Music Festivals", items: "Coachella, Glastonbury, Lollapalooza, Bonnaroo" },
        { name: "Common Phobias", items: "Heights, Spiders, Crowds, Germs" },
        { name: "Dog Commands", items: "Sit, Stand, Down, Come" },
        { name: "Wives of Henry VIII", items: "Aragon, Parr, Seymour, Boleyn" },
        { name: "Music Terms", items: "Arpeggio, Crescendo, Staccato, Legato" },
        { name: "Ocean Zones", items: "Benthic, Pelagic, Abyssal, Hadal" },
        { name: "Rocks", items: "Basalt, Granite, Marble, Slate" },
        { name: "Island Geography", items: "Archipelago, Atoll, Cay, Islet" },
        { name: "Brain-Related", items: "Medulla, Thalamus, Pons, Cerebellum" },
        { name: "Calendars", items: "Julian, Gregorian, Hebrew, Islamic" },
        { name: "Artificial Sweeteners", items: "Aspartame, Saccharin, Sucralose, Stevia" },
        { name: "Heat Transfer Related", items: "Conduction, Convection, Radiation, Insulation" },
        { name: "Ions", items: "Cation, Anion, Isotope, Ionization" },
        { name: "Gone Caving", items: "Stalactite, Stalagmite, Column, Flowstone" },
        { name: "Modernist Writers", items: "Joyce, Woolf, Kafka, Proust" },
        { name: "Top-Level Domains", items: "gov, com, mil, net" },
        { name: "To Follow", items: "Trail, Tail, Track, Shadow" },
        { name: "The Seven Dwarves", items: "Happy, Sleepy, Grumpy, Doc" },
        { name: "Come to Rest", items: "Land, Perch, Roost, Settle" },
        { name: "Mahjong Flower Tiles", items: "Plum, Orchid, Chrysanthemum, Bamboo" },
        { name: "Candy Bars", items: "Heath, Bounty, Payday, Mounds" },
        { name: "Tony _____", items: "Hawk, Montana, Soprano, Stark" },
        { name: "Kinds of Cooking Oil", items: "Vegetable, Corn, Olive, Coconut" },
    ],
    expert : [
        { name: "Finger-Related", items: "Good Job, That Way, Care for Tea?, I Do" },
        { name: "Things on a Spectrum", items: "Colors, Politics, Genders, Autism" },
        { name: "Merriam-Webster Words of the Year", items: "w00t, bailout, surreal, gaslighting" },
        { name: "The Careers of Oprah Winfrey", items: "Talk Show Host, Actress, Author, Philanthropist" },
        { name: "Semordnilap", items: "Drawer, Stressed, Live, Deliver" },
        { name: "_____ Cat", items: "Alley, Cool, Copy, Lap" },
        { name: "_____ Rolls", items: "California, Dragon, Rainbow, Spider" },
        { name: "Abstract Algebra Structures", items: "Monoid, Group, Ring, Field" },
        { name: "Types of Hair Cuts", items: "Bob, Bowl, Pixie, Crew" },
        { name: "_____ Stones", items: "Birth, Rolling, Stepping, Mile" },
        { name: "Things That Spread", items: "Illness, Fire, Rumor, Happiness" },
        { name: "Directed by Christopher Nolan", items: "Memento, Following, Insomnia, Dunkirk" },
        { name: "Classic Arcade Games", items: "Centipede, Tempest, Defender, Asteroids" },
        { name: "Types of Diamond Cuts", items: "Cushion, Princess, Oval, Marquise" },
        { name: "Types of Human Memory", items: "Sensory, Working, Episodic, Semantic" },
        { name: "Old School Programming Languages", items: "Fortran, Pascal, Lisp, Prolog" },
        { name: "'Peter Pan' Characters", items: "Hook, Nana, Peter, Wendy" },
        { name: "Motivation", items: "Drive, Prompt, Spark, Spur" },
        { name: "Names That Are Verbs", items: "Chuck, Rob, Josh, Sue" },
        { name: "NBA MVPs", items: "James, Nash, Curry, Duncan" },
        { name: "Acronyms", items: "Laser, Radar, Scuba, Sonar" },
        { name: "Military Use Origins", items: "Aviators, Jeep, Internet, Duct Tape" },
        { name: "Being Brave", items: "Heroic, Daring, Audacious, Gallant" },
        { name: "Currency", items: "Note, Bill, Buck, Dough"},
        { name: "Thanks Greece", items: "Theater, Olympics, Watermills, Levers"},
        { name: "Galaxy Names", items: "Andromeda, Triangulum, Whirlpool, Pinwheel" },
        { name: "Constellations", items: "Auriga, Draco, Pegasus, Hydra" },
        { name: "Tide-Related", items: "Neap, Spring, Ebb, Flood" },
        { name: "Cereal Mascots", items: "Tony, Lucky, CinnaMon, Snap" },
        { name: "Architecture Orders", items: "Doric, Ionic, Corinthian, Composite" },
        { name: "Types of Radiation", items: "Microwave, Radio, X-ray, Ultraviolet" },
        { name: "Types of Beans", items: "Black, Kidney, Red, Navy" },
        { name: "Types of Organic Reactions", items: "Substitution, Elimination, Addition, Rearrangement" },
        { name: "Types of Coral Reefs", items: "Fringing, Barrier, Atoll, Patch" },
        { name: "Math Graphs/Plots", items: "Bar, Line, Pie, Scatter" },
    ],
}




/* GLOBAL VARIABLES */

// DOM elements
let game_area = document.querySelector('.items-list');
let lives_string = document.querySelector('#livesleft');
let outcome_string = document.querySelector('#selectionoutcome');
let buttons_list = document.querySelector('.buttons-list');

// Main sets
let keysArray = [];             // "name" key for each difficulty
let itemsArray = [];            // "items" keys for each difficulty, ordered
let itemsArray_r = [];          // randomized itemsArray[] for display
let selected = [];              // the 4 items selected by the user during the game
let correct = [];               // the set of difficulties that have been solved e.g. "hard"

// Color sets
let colors = ['easy', 'medium', 'hard', 'expert'];
let color_vars = ['--color-easy', '--color-medium', '--color-hard', '--color-expert'];

// Endgame & replay control
let lives = 4;                  // max number of lives
let message = '';               // message for: correct answer, win state, lose state




/* METHODS */

/** Clears all global variables for replayability.
 *  param   none
 *  retrn   none
 */
function globalReset(){
    // Reset text display
    lives = 4;
    lives_string.textContent = "Lives left: " + lives;
    outcome_string.textContent = "Welcome!";

    // Clear arrays
    keysArray = [];
    itemsArray = [];
    itemsArray_r = [];
    selected = [];
    correct.length = 0;


    // Clear game board
    game_area.innerHTML = '';

    // Restore button clickability
    buttons_list.childNodes.forEach(button => {
        button.disabled = false;
    });

    // Deselect all 'selected' buttons
    game_area.childNodes.forEach(child => {
        child.classList.remove('selected');
    });
}




/** Choose 4 random group names with their items.
 *  param   none
 *  retrn   none
 */
function initializeKeys(){
    for(let difficultyKey in JSON_OBJ){
        // Grab each difficulty name
        let difficulty = JSON_OBJ[difficultyKey];

        // Generate random number of difficulty set length
        let random = Math.floor(Math.random() * difficulty.length);

        // Choose 4 random question "name"
        keysArray.push(difficulty[random].name);

        // Parse comma-separated 'items' into itemsArray[]
        let items = difficulty[random].items.split(', ');
        items.forEach(item => {
            itemsArray.push(item);
        });
    }
}

/** Display items in random order && manage shuffling items
 *  param   none
 *  retrn   none
 */
function randomizeItems(){
    // Temp copy the itemsArray[]
    itemsArray_r = [...itemsArray];

    // Shuffle function
    for (let i = itemsArray_r.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [itemsArray_r[i], itemsArray_r[j]] = [itemsArray_r[j], itemsArray_r[i]];
    }

    // Clear previous data in game area
    game_area.innerHTML = '';

    // Initialize buttons with difficulty attributes
    for(let i = 0; i < itemsArray_r.length; i++){

        // Dynamically generate buttons
        const button = document.createElement('button');
        button.textContent = itemsArray_r[i];
        button.classList.add(`item`);

        // Note : difficulty class calculated by index in itemsArray[]
        let difficultyIndex = Math.floor(itemsArray.indexOf(itemsArray_r[i]) / 4);
        let difficultyClass = '';
        switch (difficultyIndex) {
        case 0:
            difficultyClass = 'easy';
            break;
        case 1:
            difficultyClass = 'medium';
            break;
        case 2:
            difficultyClass = 'hard';
            break;
        case 3:
            difficultyClass = 'expert';
            break;
        default:
            break;
        }
        button.classList.add(difficultyClass);

        // Attach event listener to each button
        button.addEventListener('click', handleClick);

        // Append the button to the game area
        game_area.appendChild(button);
    }
    
    // Extra consideration: ensure that selected[] still appears post-shuffling
    for(let i = 0; i < selected.length; i++){
        game_area.childNodes.forEach(child => {
            if(child.textContent == selected[i]){
                child.classList.toggle('selected');
            }
        });
    }

    // Extra consideration: ensure item colors[] still appear post-shuffling
    game_area.childNodes.forEach(child => {
        correct.forEach(correctClass => {
            // Properties of correctly guessed "done" items
            if (child.classList.contains(correctClass)) {
                // "Done" buttons are not selected/higlighted
                child.classList.remove('selected');

                // "Done" buttons cannot be clicked
                child.disabled = true;
    
                // "Done" buttons have an associated background color
                const difficulty = correctClass;
                child.style.backgroundColor = `var(--color-${difficulty})`;
            }
        });
    });    
}





/** Handle click events for each item.
 *  param   none
 *  retrn   none
 */
function handleClick(event){
    // Get the element that triggered this event
    let element = event.target;

    
    // Note: you cannot select more than 4 elements
    if(selected.length < 4 || selected.includes(element.textContent)){
        // Toggle "selected" class style
        element.classList.toggle('selected');

        // Dual functionality: toggle selected on/off
        if (!selected.includes(element.textContent)) {
            // Push to selected[] if it is not there yet
            selected.push(element.textContent);
        } else {
            // Pop from selected[] if it is already there
            selected = selected.filter(item => item !== element.textContent);
        }
    }

    // Test: here you view what is currently selected[]
    console.log('selected: ' + selected);
}




/** Global play game && replayability.
 *  param   none
 *  retrn   none
 */
function submit(){
    // Are the selected[] elements a valid solution?
    let valid = true;

    // User must select four items
    if(selected.length == 4) {
        // Search items[] array to find 'parent difficulty'
        // A valid selected[] array means all items in selected[] belong to the same difficulty && same group
        // The logic: itemsArray[] is ordered and should have all 4 groups of 4 next to each other

        // Find the index where the difficulty starts (should be a factor of 4)
        let base_difficulty_index;
        for(let i = 0; i < itemsArray.length; i++){
            if(selected[0] === itemsArray[i]) {
                base_difficulty_index = i - (i % 4);
            }
        }

        // Search in itemsArray[] to see if selected[] elements are CONSECUTIVE
        // "valid" == true The four selected responses belong to the same group.  
        // "valid" == false The four selected responses DO NOT belong to the same group.
        for(let i = 0; i < selected.length; i++){
            // Get itemsArray[] index
            let current_index = base_difficulty_index + i;

            // Check selected[] to see if it exists
            for(let j = 0; j < selected.length; j++){
                if(selected[j] === itemsArray[current_index]) {
                    break;
                }
                else if(j == 3) {
                    valid = false;
                    break;
                }
            }

            // Break if the selected[] values are wrong
            if(!valid){
                break;
            }
        }      

      // Behaviors for valid answers
      if(valid){
        // Calculate the colors to change boxes to:     diff_color
        // Calculate message to display on correct:     message_color
        // Calculate the difficulties solved for:       correct[]
        let diff_color;
        let message_color;
        switch(base_difficulty_index) {
            case 0 :
                diff_color = '--color-easy';
                message_color = 'EASY';
                correct.push('easy');
                break;
            case 4 :
                diff_color = '--color-medium';
                message_color = 'MEDIUM';
                correct.push('medium');
                break;
            case 8 :
                diff_color = '--color-hard';
                message_color = 'HARD';
                correct.push('hard');
                break;
            case 12 :
                diff_color = '--color-expert';
                message_color = 'EXPERT';
                correct.push('expert');
                break;
        }


        // PERFORM THE COLOR CHANGE

        // Grab all items
        let items = game_area.querySelectorAll('.item');

        // Ensures that selected[] still appears after shuffling
        // Ensures that correct[] still appears after shuffling
        // Check items[] to change currently selected[] to the appropriate color
        // Keynote: correct[correct.length - 1] to check what was JUST added
        items.forEach(child => {
            for(let i = 0; i < correct.length; i++){
                // Traits of completed "done" buttons
                if(child.classList.contains(correct[i])){
                    // Remove 'selected' property
                    child.classList.remove('selected');

                    // Disable button functionality
                    child.disabled = true;

                    // Only add "new" color changes for each incoming difficulty
                    if(selected.includes(child.textContent)) {
                        child.style.backgroundColor = `var(${diff_color})`;
                    }
                }
            }
        });

        // BEHAVIORS AFTER CORRECT ANSWER

        // Clear selected[] array post-guess
        selected.length = 0;
        
        // Set the message output (for correct answers)
        message = `Found <span style='color: var(${diff_color})'>${message_color}</span> - ${keysArray[base_difficulty_index / 4]}`;
        outcome_string.innerHTML = message;

        // Check win condition
        if(correct.length == 4) {
            endgame("WIN");
        }
      } // -end- valid answer behaviors
      // State: the 4 guesses are WRONG
      else {
        // A wrong guess deselects all items
        let items = game_area.querySelectorAll('.item');
        items.forEach(item => {
            if(selected.includes(item.textContent)){
                item.classList.remove('selected');
            }
        });

        // Clear selected[] array
        selected.length = 0;

        // Decrement Lives
        bang();
      }
    } // -end- four selected
    // ERROR: 4 items not selected[]
    else {
        alert("Select exactly 4 items to submit. Thank you!");
    }  
} // -end- submit behaviors




/** Decrement lives && checks endgame functionality.
 *  param   none
 *  retrn   none
 */
function bang(){
    // Decrement lives
    lives = lives - 1;
    lives_string.textContent = "Lives left: " + lives;

    // Zero lives results in an end-game state.
    if(lives == 0) {
        endgame("LOSS");
    }
}




/** Functionality for shuffle button.
 *  param   none
 *  retrn   none
 */
function shuffle() {
    randomizeItems();
}




/** Functionality for 'deselect all' button
 *  param   none
 *  retrn   none
 */
function clearSelection(){
    // Get all items
    let items = game_area.querySelectorAll('.item');

    items.forEach(item => {
        // Remove 'selected' class from all items
        item.classList.remove('selected');

        // Clear selected[] array
        selected.length = 0;
    });
}




/** Calculate endgame output. 
 *  param   state - "WIN" or "LOSS"
 *  retrn   none
 */
function endgame(state){
    // In either case, we must disable all buttons except 'New Game'
    buttons_list.childNodes.forEach(button => {
        button.disabled = true;
    });

    // Determine final output message
    document.querySelector('.new-game').disabled = false;
    if(state === "WIN") {
        message += '. Congratulations! You\'ve won!';
    }
    else if(state === "LOSS"){
        message = 'Sorry. You lost. Please start a new game.'
    }

    // Display appropriate message
    outcome_string.innerHTML = message;
}



/** Global play game && replayability.
 *  param   none
 *  retrn   none
 */
function newGame(){
    globalReset();
    initializeKeys();
    randomizeItems();
}



// Let's Go 
newGame();











/* MODAL CONTROL */

// Manual modal controls since "data-target" and "data-toggle" have been deprecated :(


// OPEN modal control
document.getElementById('howToPlayBtn').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('howToPlayModal'));
    myModal.show();
});
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('learnMoreModal'));
    myModal.show();
});

// CLOSE modal control
var closeButtons = document.querySelectorAll('.btn-close-play[data-dismiss="modal"]');
closeButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var modal = btn.closest('.modal');
        if (modal) {
            var modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
        }
    });
});





