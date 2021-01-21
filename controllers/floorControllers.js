const fetch   = require('node-fetch');


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
            res.render('map', {bayoudata:data,graphkey:graphkey});
        })
        .catch(err => {
            res.send(err);
        });
}
