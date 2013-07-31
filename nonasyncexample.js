    
    // without async 
    function downloadIndexStoreLink(link, function(link, callback) {
        download(link, function(err, result) {
            if(!err) {
                index(result, function(err, result) {
                    if(!err) {
                        store(vehicle, function(err, result) {
                            // this is where we have to store the results to the database 
                            save(result, function(err, result) {    
                                console.log('Done saving results ');
                                // reached save finally and calling the actuall callback now 
                                callback(err, result);
                            });
                        });
                    }
                });
            }
        });
    });

    downloadIndexStoreLink('http://downloader.com/some.pdf');
    
    // The problem is you cannot do something like below, unless they are synchronous functions 
    // which will then block the event loop and hence the whole application
    
    download(link)
    index();
    store();
    

    // With async 

    async.waterfall([ async.apply(download, link),
                      index,
                      store], function(err, results) {
                           console.log('Done saving results ');
                     });

