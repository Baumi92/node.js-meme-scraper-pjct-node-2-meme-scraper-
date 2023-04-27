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
    // get the first 10 img elements within the section
    const images = section.find('img').slice(0, 10);

    images.each((i, img) => {
      // log the src attribute of each img element
      console.log($(img).attr('src'));
    });
  })
  .catch((error) => {
    console.error(error);
  });
