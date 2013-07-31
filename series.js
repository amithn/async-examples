
    var async = require('async');


    function start(vehicle, callback) {
        console.log('Starting a ' + vehicle);
        callback(null, 'Took 1 second to start ' + vehicle);
    }
    
    function drive(vehicle, speed,  callback) {
        console.log('Driving a ' + vehicle);
        callback(null, 'Took 5 seconds to reach a speed of ' + speed);
    }

    function stop(vehicle,callback) {
        console.log('Stopping a ' + vehicle);
        callback(null, 'Took 2 seconds to stop ' + vehicle);
    }


    var vehicle = 'Car';
    var speed = 100;

    async.series([ async.apply(start, vehicle),
                   async.apply(drive, vehicle, speed),
                   async.apply(stop, vehicle)], function(err, results) {
                       if(!err) {
                                      console.log('---------- Done -----------');
                                      console.log('Results look like this: ' + results);
                       } else {
                            console.log('Something went wrong - handling it');
                       }
    });


