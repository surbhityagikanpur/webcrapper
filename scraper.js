const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = "https://las.mlsmatrix.com/Matrix/Public/Portal.aspx?L=1&k=3296573XVZ10&p=ALL-0-0-H";

let siteName = "";
const tags = new Set();

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const $ = await fetchData();

  siteName = $('.multiLineDisplay');

 
  $(siteName).filter(function(){
    var data = $(this);
    title = data.children().last().text();
    tags.add($(element).text());
  });

  
  return {
    tags: [...tags].sort(),
  };
};

module.exports = getResults;
