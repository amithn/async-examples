
    var async = require('async');

    function filter(value, callback) {
        var is = false;
        if( typeof(value) === 'string') {
            is = true;
        }
        callback(is);
    }

    var values = ['one', 2 , 3 , 'four'];

    async.filter(values, filter, function(results) {
            console.log('Results after filtering strings : ' + results);
    });
