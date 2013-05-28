
    var async = require('async');


    function download(link, callback) {
        console.log('Finished downloading from ' + link);
        callback(null, 'content from the website'); 
    }

    function index(content, callback) {
        console.log('Indexing content from site - ' + content);
        var splits = content.split(' ');
        callback(null, splits);
    }

    function storeIndex(splits, callback) {
        console.log('Storing index for splits - ' + splits);
        callback(null, splits.length); 
    }

    var link = 'http://www.wiki/node';
    async.waterfall([ async.apply(download, link),
                      index,
                      storeIndex], function(err, numsplits) {
                    
                      console.log('We got ' + numsplits + ' new words to index from ' + link);                    
    });
