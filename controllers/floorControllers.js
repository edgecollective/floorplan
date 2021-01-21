const fetch   = require('node-fetch');
const probe = require('probe-image-size');

const getImageDetails = async function (URL) {
    const result = await probe(URL);
    return result;
}

exports.getPage = function(req, res, next) { // NOW BY PUB_KEY

    var feedkey = String(req.params.feedkey);
    var url = 'http://data.pvos.org/co2/data/'+feedkey+'/json/';
     //use the IP address for the feed link; change this once we have a fixed URL:
    //var url = 'http://data.pvos.org/co2/data/3897755c6379d00bbb1d622827b1ffd1ba6a0579802044c9/json';
    var graphkey = String(req.query.key);
    console.log(graphkey);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('graph', {bayoudata:data,graphkey:graphkey});
        })
        .catch(err => {
            res.send(err);
        });
}

exports.getSize = async function(req, res, next) {
    
    var url = 'https://www.thoughtco.com/thmb/78yp4LX-ib10jQdSRslNYianKu8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/floorplan-138720186-crop2-58a876a55f9b58a3c99f3d35.jpg';
    var result = await getDetails(url);
    //console.log(result);
    res.render('map',{width:result.width,height:result.height,url:url});
}


exports.mapGraph = async function(req, res, next) {
    var feedkey = String(req.params.feedkey);
    var feedurl = 'http://data.pvos.org/co2/data/'+feedkey+'/json/';
    var graphkey = String(req.query.key);
    console.log(graphkey);

    var imageurl = 'https://www.thoughtco.com/thmb/78yp4LX-ib10jQdSRslNYianKu8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/floorplan-138720186-crop2-58a876a55f9b58a3c99f3d35.jpg';
    var result = await getImageDetails(imageurl);

    fetch(feedurl)
        .then(res => res.json())
        .then(data => {
            res.render('mapgraph', {bayoudata:data,graphkey:graphkey,width:result.width,height:result.height,imageurl:imageurl});
        })
        .catch(err => {
            res.send(err);
        });

}
