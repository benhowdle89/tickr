(function () {
    var Tickr = {
        run: function (opts) {
            var el = opts.el;
            if(!el) return;
            var start      = Date.now(), delta;
            var target     = opts.target;
            var duration   = opts.duration;
            var outputType = (el.nodeName.toLowerCase() === 'input') ? 'value' : 'innerHTML';
            var currentVal = +el[outputType] || 0;
            var tickr = setInterval(function () {
                delta = Date.now() - start;
                if(delta >= duration) {
                    clearInterval(tickr);
                    return el[outputType] = target;
                }
                el[outputType] = (currentVal + ((delta * (target-currentVal)) / duration)).toFixed(0);
            }, 10);
        }
    };
    window.Tickr = Tickr;
})();