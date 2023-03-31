console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems'))
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'))

let songs = [
    { songName: "Khani suno 2.0", filepath: "songs/1.mp3", coverPath: 'covers/1.jpg' },
    { songName: "The last ride - Sidhumoose WALA", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Bekhayali - kabir singh", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Dabya ni karde", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Le Le Rom Rom -MC square", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Bharat ka bacha bacha jai shri ram bolega ", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Hum katha sunate ram ki", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "O Bederdeya", filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Pyaar Hota Kayi Baar h", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Company", filepath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
});

// audioElement.play();

//handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;


    }
})




//Listen to Events
audioElement.addEventListener('timeupdate', () => {

    //Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {


        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

        gif.style.opacity = 1;
    })
})



document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;

    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');


    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})