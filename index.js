import axios from 'axios';
import cheerio from 'cheerio';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

axios
  .get(url)
  .then((response) => {
    const $ = cheerio.load(response.data);
    const section = $('section').first();
    const images = section.find('img').slice(0, 10);

    images.each((i, img) => {
      console.log($(img).attr('src'));
    });
  })
  .catch((error) => {
    console.error(error);
  });
