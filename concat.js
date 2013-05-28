
    var async = require('async');
    var fs = require('fs');

    async.concat(['.', '..', '/Users/voicestreams'], fs.readdir, function(err, files){
            console.log('Files in directories:', files);
            console.log('Total files :', files.length);
    });
