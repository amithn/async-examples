
    var async = require('async');

    function filter(value, callback) {
        return callback(typeof(value) === 'string'); 
    }

    var values = ['one', 2 , 3 , 'four'];

    async.filter(values, filter, function(results) {
            console.log('Results after filtering strings : ' + results);
    });
