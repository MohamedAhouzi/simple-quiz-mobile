
const axios = require("axios");

export const getData=async ()=>{
    return await axios({
            method: 'get',
            url: 'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple',
          });
   
}
