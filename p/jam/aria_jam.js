// Main attributes
let main = document.querySelector("#main");
let record = document.querySelector("#record");
let song_title = document.querySelector("#song_title");
let artist_name = document.querySelector("#artist_name");
let image = document.querySelector("#album_img");
let audio = document.querySelector("#audiospace");

// Features
let playButton = document.querySelector("#playButton");
let muteButton = document.querySelector("#mute");

// Global values
let g_counter = 0;
let isPlaying = 'paused';

// Song List
let music = [
    {
        song: 'Weird Fishes/Arpeggi',
        artist: 'Radiohead',
        relpathAudio: 'weird_fishes.m4a',
        relpathImage: 'in_rainbows.jpeg'
    },
    {
        song: 'No More Lies',
        artist: 'Thundercat, Tame Impala',
        relpathAudio: 'no_more_lies.m4a',
        relpathImage: 'no_more_lies.jpeg'
    },
    {
        song: 'A Night to Remember',
        artist: 'beebadoobee, Laufey',
        relpathAudio: 'a_night_to_remember.m4a',
        relpathImage: 'a_night_to_remember.jpeg'
    },
    {
        song: 'RENE',
        artist: 'Free Nationals',
        relpathAudio: 'rene.m4a',
        relpathImage: 'free_nationals.jpeg'
    },
    {
        song: 'Cherry Waves',
        artist: 'Deftones',
        relpathAudio: 'cherry_waves.m4a',
        relpathImage: 'saturday_night_wrist.jpeg'
    },
    {
        song: 'It Is Not Meant to Be',
        artist: 'Tame Impala',
        relpathAudio: 'it_is_not_meant_to_be.m4a',
        relpathImage: 'innerspeaker.jpeg'
    },
    {
        song: 'Flight 22',
        artist: 'Kali Uchis',
        relpathAudio : 'flight_22.m4a',
        relpathImage : 'isolation.jpeg'
    },
    {
        song: 'Not Strong Enough',
        artist: 'boygenius',
        relpathAudio: 'not_strong_enough.m4a',
        relpathImage: 'the_record.jpeg'
    },
    {
        song: 'Infrunami',
        artist: 'Steve Lacy',
        relpathAudio: 'infrunami.m4a',
        relpathImage: 'the_lofis.jpeg'
    },
    {
        song: 'wy@',
        artist: 'Brent Faiyaz',
        relpathAudio: 'wy@.m4a',
        relpathImage: 'wy@.jpeg'
    },
    {
        song: 'Come on, Let\'s Go!',
        artist: 'Tyler, the Creator, Nigo',
        relpathAudio: 'come_on_lets_go.m4a',
        relpathImage: 'i_know_nigo.jpeg'
    },
    {
        song: 'You Probably Couldn\'t...',
        artist: 'Arctic Monkeys',
        relpathAudio: 'you_probably_couldnt_see.m4a',
        relpathImage: 'whatever.jpeg'
    },
    {
        song: 'love is embarrassing',
        artist: 'Olivia Rodrigo',
        relpathAudio: 'love_is_embarrassing.m4a',
        relpathImage: 'guts.jpeg'
    },
    {
        song: 'Misty',
        artist: 'Laufey',
        relpathAudio: 'misty.m4a',
        relpathImage: 'bewitched.jpeg'
    },
    {
        song: 'Withdrawals/Withdrawals',
        artist: '$uicideboy$',
        relpathAudio: 'withdrawals_withdrawals.m4a',
        relpathImage: 'part_xv.jpeg'
    },
    {
        song: 'Ivy',
        artist: 'Frank Ocean',
        relpathAudio: 'ivy.m4a',
        relpathImage: 'blonde.jpeg'
    },
    {
        song: 'I THINK',
        artist: 'Tyler, the Creator',
        relpathAudio: 'i_think.m4a',
        relpathImage: 'igor.jpeg'
    },
    {
        song: 'Funny Thing',
        artist: 'Thundercat',
        relpathAudio: 'funny_thing.m4a',
        relpathImage: 'it_is_what_it_is.jpeg'
    },
    {
        song: 'Walkin',
        artist: 'Denzel Curry',
        relpathAudio: 'walkin.m4a',
        relpathImage: 'melt_my_eyez.jpeg'
    },
    {
        song: 'Saint Pablo',
        artist: 'Kanye West',
        relpathAudio: 'saint_pablo.m4a',
        relpathImage: 'the_life_of_pablo.jpeg'
    }
];



// Update audio, video, record descriptions after a change.
function update(){
    song_title.innerHTML = music[g_counter].song;
    artist_name.innerHTML = music[g_counter].artist;
    image.setAttribute('xlink:href', `images/${music[g_counter].relpathImage}`);
    audio.setAttribute('src', `audio/${music[g_counter].relpathAudio}`);

    // default volume is too high :(
    audio.volume = 0.3;

    // mainly to make the record animation reset
    replay();
}


/** Set spin to param state
/*  param state : 'paused' || 'running'
*/
function setSpin(state) {
    record.style.animationPlayState = state;
    isPlaying = state;
}


// Change song. Wraps around whole playlist.
function previous(){
    audio.currentTime = 0; // reset song BEFORE iterating
    (g_counter == 0) ? g_counter = music.length - 1 : g_counter--;
    update();

    // ensure always 'play' after switch
    isPlaying = 'paused';
    play();
}
function next(){
    audio.currentTime = 0; // reset song BEFORE iterating
    (g_counter == music.length - 1) ? g_counter = 0 : g_counter++;
    update();

    // ensure always 'play' after switch
    isPlaying = 'paused';
    play();
}


// Reset to beginning (static or playing)
function replay(){
    audio.currentTime = 0;
    record.style.animation = 'none';
    setTimeout(() => { //delay rewinding record
        record.style.animation = 'spin 5s linear infinite';
        record.style.animationPlayState = isPlaying;
    }, 150);
}


// Mute functionality
function toggleMute(){
    let unmuted = (audio.muted == false);
    if(unmuted){
        audio.muted = true;
        muteButton.innerHTML = `<i class="fa-solid fa-volume-xmark" style='color: red;'></i>`;
    }
    else {
        audio.muted = false;
        muteButton.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    }
}


// Play functionality
function play(){
    // Spin animation
    (isPlaying == 'paused') ? isPlaying = 'running' : isPlaying = 'paused';
    setSpin(isPlaying);

    // Audio control
    (isPlaying == 'running') ? audio.play() : audio.pause();

    // Set appropriate icon
    if (isPlaying == 'paused') {
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
    else {
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
}


/* INIT */
update();

/* FREEZE ON PREVIEW ENDING */ 
audio.addEventListener('ended', () => {
    isPlaying = 'paused';
    playButton.innerHTML = `<i class="fa-solid fa-play"></i>`;
    replay();
});
