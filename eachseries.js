
    var async  = require('async');

    function download(link, callback) {
        console.log('Started download of ' + link);
        if(link === 'http://one.com') {
            setTimeout(function() {
                console.log('Done' + ' downloading ' + link);
                callback();
                return;
            },1000);
        } else {
            console.log('Done' + ' downloading ' + link);
            callback();
        }
    }

    var links = ['http://one.com', 'http://two.com', 'http://three.com'];
    

    async.eachSeries(links, download, function(err) {
        if(!err) {
            console.log('Finished downloading');
        } else {
            console.log('An error has occured during download');
        }
    });
    
