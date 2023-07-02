window.addEventListener('keydown', function(e) {
  const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
  console.log(key, e.keyCode); // keyCode associated with each key

  const audioEl = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audioEl); // we can see the audio element
  audioEl.currentTime = 0 // so that if we continously click on the key, it will play the sound again and again

    if(!audioEl) return; // stop the function from running all together
    audioEl.play();
})