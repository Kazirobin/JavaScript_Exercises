// array for text and id 
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
// use forEach() for select all item in array 
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    // array text declare in all btn  
    btn.innerText = sound ;
    // give event to all btn 
    btn.addEventListener('click',() => {
        stopSongs()
        document.getElementById(sound).play();
    })
    document.getElementById('buttons').appendChild(btn)
})
// sound in btn function 
function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime=0;
    })
}