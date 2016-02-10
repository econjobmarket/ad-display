# ad-display
<h1>Re-display ads from econjobmarket.org</h1>
<a href="https://econjobmarket.org">Econjobmarket.org</a> lists ads for academic jobs for phd economists.  This software is a javascript based method of redisplaying the 
currently listed ads on your own website.  This will 
be suitable for sites with content management systems that do not allow code.  
These scripts were originally written by Shervin Tari for the Royal Economic Society.
<h2>Installation</h2>
Place the index.html, myads.js, and the two directories js and css in your webserver path then load the index.html file.  To use with a content management system, you need to load
the various javascript and css files directly, then create a page using the contents of the index.html file.
<p>
The code uses jsonp to load the list of ads from https://backend.econjobmarket.org using javascript.  The url is hard coded in the source file.
