// disqus properties
disqus_url = 'http://panadaframework.com/documentation/id/'+disqus_url;
var disqus_shortname = 'panada';
var disqus_identifier = disqus_url;
// ga properties
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-17804553-1']);
_gaq.push(['_setDomainName', 'panadaframework.com']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);
// disqus object
var dsq = document.createElement('script');
dsq.type = 'text/javascript';
dsq.async = false;
dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
// ga object
var ga = document.createElement('script');
ga.type = 'text/javascript';
ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);

(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };

}(this, this.document));