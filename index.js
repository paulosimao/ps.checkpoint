'use strict';
class CheckPoint {
    constructor(cfg) {
        this.cfg = cfg || {dumponthego: true};
        this.start = new Date();
        this.time = new Error().stack;
        this.cps = [];
    }

    mark(msg) {
        let marker = {};
        marker.msg = msg;
        marker.time = new Date();
        marker.stack = new Error().stack;
        this.cps.push(marker);

        if (this.cfg.dumponthego) {
            console.log(`${marker.time.getTime()}:\t${marker.msg}`);
        }
    }
}