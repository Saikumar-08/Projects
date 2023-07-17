console.log("Welcome to spotify");


// Initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =  document.getElementById('myProgressBar');
let gif =  document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/2.mp3", coverpath: "covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/3.mp3", coverpath: "covers/3.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/4.mp3", coverpath: "covers/4.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/5.mp3", coverpath: "covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/6.mp3", coverpath: "covers/6.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/7.mp3", coverpath: "covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/8.mp3", coverpath: "covers/8.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/8.mp3", coverpath: "covers/9.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src= songs[i].coverpath;
    element.getElementsByClassName('songname')[0].coverpath = songs[i].songName;
})

// audioElement.Play();

// Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    }

    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
// Listen to Events

audioElement.addEventListener('timeupdate', ()=> {
   
    // update seekbar
    progress =  parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{

    audioElement.currentTime = myProgressBar.value * audioElement.duration/100

})

songItems.forEach((Element,i)=>{
    console.log(Element,i)
    Element.getElementsByTagName('img')[0].src = songs[i].filePath;
})