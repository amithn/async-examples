
    var async = require('async');

    function filter(value, callback) {
        callback(typeof(value) === 'string');
    }

    var values = ['one', 2 , 3 , 'four'];

    async.reject(values, filter, function(results) {
            console.log('Results after reject\'ing strings : ' + results);
    });
