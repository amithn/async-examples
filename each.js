
    var async  = require('async');

    function download(link, callback) {
            console.log('Started download of ' + link);
            console.log('Done' + ' downloading ' + link);
            callback();
    }

    var links = ['http://one.com', 'http://two.com', 'http://three.com'];

    async.each(links, download, function(err) {
        if(!err) {
            console.log('Finished downloading');
        } else {
            console.log('An error has occured during download');
        }
    });
    
