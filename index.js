import axios from 'axios';
import cheerio from 'cheerio';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

axios
  .get(url)
  .then((response) => {
    // load the HTML response into Cheerio
    const $ = cheerio.load(response.data);

    // get the first section element

    const section = $('section').first();

    // get the first 10 img elements within the section requested

    const images = section.find('img').slice(0, 10);

    images.each((i, img) => {
      // log the src attribute of each img element to a file
      console.log($(img).attr('src'));
    });
  })
  .catch((error) => {
    console.error(error);
  });

// generate a random number between 1 and 10
const randomNum = Math.floor(Math.random() * 10) + 1;

// create the file path for the image

const memes = `./memes/${randomNum}.jpg`;

const imageUrl = `https://memegen.link/images/${memes}`;

console.log(imageUrl);

// create a file who response with the image url
// destination path
