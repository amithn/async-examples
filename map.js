
    var async = require('async');


    function mapper(value, callback) {
        if( typeof(value) === 'string') {
            callback(null, value.toUpperCase());
        } else {
            callback(value + ' is not a string', null);
        }
    }

    var values = ['one', 'two', 'three', 'four'];

    async.map(values, mapper, function(err, results) {
        if(!err) {
            console.log('Finished map phase: ' + results);
        } else {
            console.log('Error occured during map phase : ' + err);
        }
    });
