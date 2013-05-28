    var async = require('async');


    function download(link, callback) {
        console.log('Downloading from link ' + link);
        callback(null, 'A B C D E F');
    }

    function index(content, callback) {
        console.log('Indexing content ' + content);
        var splits = content.split(' ');
        callback(null, splits);
    }

    var link = 'http://wiki/page';

    // Add in reverse order of execution 

    var downloadandindex = async.compose(index, download);
    downloadandindex(link, function(err, results) {
        console.log('Result is ' + results);
    });

