    function download(link, callback) {
        // download data 
        callback(null, results);
    }

    function index(results, callback) {
        var indexedresults = // index the results
        callback(null, indexedresults);
    }

    function store(results, callback) {
            db.save(results, function(err, results) {
                callback(err, results);
            }
    }
    
    // without async 
    function downloadIndexStoreLink(link, function(link, callback) {
        download(link, function(err, result) {
            if(!err) {
                index(result, function(err, result) {
                    if(!err) {
                        store(vehicle, function(err, result) {
                                callback(err, result);                      
                            });
                        });
                    }
                });
            }
        });
    });

    downloadIndexStoreLink('http://downloader.com/some.pdf', function(err, results){
        console.log('Done');
    });
    
    // The problem is you cannot do something like below, unless they are synchronous functions 
    // which will then block the event loop and the whole application
    
    download(link)
    index();
    store();
    

    // With async 

    async.waterfall([ async.apply(download, link),
                      index,
                      store], function(err, results) {
                           console.log('Done saving results ');
                     });

