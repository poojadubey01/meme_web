const memeContainer = document.getElementById('memeContainer');
const memeImage = document.getElementById('memeImage');
const generateBtn = document.getElementById('generateBtn');

const memeAPI = 'https://api.imgflip.com/get_memes';

function fetchRandomMeme() {
  fetch(memeAPI)
    .then((response) => response.json())
    .then((data) => {
      const memes = data.data.memes;
      const randomIndex = Math.floor(Math.random() * memes.length);
      const randomMeme = memes[randomIndex];
      memeImage.src = randomMeme.url;
    })
    .catch((error) => {
      console.error('Error fetching meme:', error);
    });
}

generateBtn.addEventListener('click', fetchRandomMeme);
