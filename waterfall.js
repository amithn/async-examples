
    var async = require('async');


    function download(link, callback) {
        console.log('Finished downloading from ' + link);
        callback(null, 'node.js is awesome'); 
    }

    function split(content, callback) {
        console.log('Splitting content from site - ' + content);
        var splits = content.split(' ');
        callback(null, splits);
    }

    function storeSplits(splits, callback) {
        console.log('Storing splits - ' + splits);
        callback(null, splits.length); 
    }

    var link = 'http://www.wiki/nodejs';
    
    async.waterfall([ async.apply(download, link),
                      split,
                      storeSplits], function(err, numsplits) {
                      
                      console.log('We got ' + numsplits + 
                                                    ' new words to index from ' + link);                    
    });
