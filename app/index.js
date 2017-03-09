(function () {
    "use strict";

    // include index.html for webpack to load
    require("./index.html");

    var Reveal = require("reveal.js");
    require("reveal.js/css/reveal.css");
    // uncomment theme you want to load below
    require("reveal.js/css/theme/night.css");

    require('reveal.js/lib/js/head.min');

    window.addEventListener("mousedown", handleClick, false);
    window.addEventListener("contextmenu", function(e) { e.preventDefault(); }, false);

    function handleClick(e) {
        e.preventDefault();
        if(e.button === 0) Reveal.next();
        if(e.button === 2) Reveal.prev();
    }

    Reveal.initialize({
        // Parallax background image
        parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
        parallaxBackgroundSize: '2100px 900px',

        parallaxBackgroundHorizontal: 200,
        parallaxBackgroundVertical: 50,
        history: true,
        // More info https://github.com/hakimel/reveal.js#dependencies
        dependencies: [
             { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        ]
    });
})();
