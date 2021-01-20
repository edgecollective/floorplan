const probe = require('probe-image-size');
const fs = require('fs');

URL = 'https://static.dezeen.com/uploads/2019/05/casper-office-matress-bed-office-float-design-studio-plan_dezeen_1.jpg';

//let result = await probe(URL);
//console.log(result);

// From the stream
//let result = await probe(require('fs').createReadStream('image.jpg'));
//console.log(result);

// need to handle error below:
const getImageDimensionsFromURL = async function(URL) {
    const result = await probe(URL);
    
    var x = result.width;
    var y = result.height;

    console.log(x,y);
  }

  getImageDimensionsFromURL(URL);


const getImageDimensionsFromLocalFile = async function(path) {
    let result = await probe(require('fs').createReadStream(path));
    console.log(result);
  }

getImageDimensionsFromLocalFile('public/images/floor.jpg')