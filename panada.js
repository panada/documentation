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