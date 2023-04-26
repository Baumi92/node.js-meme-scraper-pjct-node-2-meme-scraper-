import axios = require('axios');

// Your code using axios here

const request = require('request');
const cheerio = require('cheerio');

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const memes = [];

    $('div.meme > div.wrapper > a > img').each((i, el) => {
      const title = $(el).attr('alt');
      const image = $(el).attr('src');
      memes.push({ title, image });
    });

    console.log(memes);
  }
});
