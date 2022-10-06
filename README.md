# ad-display
<h1>Re-display ads from econjobmarket.org</h1>
<a href="https://econjobmarket.org">Econjobmarket.org</a> lists ads for academic jobs for phd economists.  This software is a javascript based method of redisplaying the 
currently listed ads on your own website.  This will 
be suitable for sites with content management systems that do not allow code.  
These scripts were originally written by Shervin Tari for the Royal Economic Society.
There are two options you can use to display the ads locally.  Each of them provides javascript code and css that should get you a display without having to write any code yourself.
Of course, you are free to modify the code and css here to customize it to your site if you know how to do that.
You need to understand how to display a webpage on your own website. 

<h2>Installation using jsonp</h2>

In this case, you can either create a new webpage, or modify an existing page on your computer.  Copy the file at 
[https://github.com/econjobmarket/ad-display/index.html](https://github.com/econjobmarket/ad-display/index.html) into a new directory on your 
website and create a url for it on your server.  For example, if your webpage is `https://yourwebsite.com`, then call your directory ejm, and make sure your webserver has an url `https://yourwebsite.com/ejm` that takes you to that directory.  Most web servers are configured to load `index.html` when they are given an url that doesn't contain a file name.

You could also create a file with a name other than index.html into one of your existing web directories.

For example if you have an existing web path will files in it, like `https://yourwebsite.com/work`, then create an new file like  `ejm_display.html` in that directory
and copy the [https://github.com/econjobmarket/ad-display/index.html](https://github.com/econjobmarket/ad-display/index.html) into it.  Then the url `https://yourwebsite.com/work/ejm_display.html` will render the display.

To finish the installation copy the folders [https://github.com/econjobmarket/ad-display/js](https://github.com/econjobmarket/ad-display/js/) and [https://github.com/econjobmarket/ad-display/css](https://github.com/econjobmarket/ad-display/css) (including their contents) into your new `ejm` or `work` directory.

Finally copy the file [https://github.com/econjobmarket/ad-display/my_ads.js](https://github.com/econjobmarket/ad-display/my_ads.js) into your `ejm` or `work` directory.

Then you can open the url at `https://yourwebsite.com/work/ejm_display.html` or `https://yourwebsite.com/ejm/` and see the displayed ads.

If you want to see what data the script will be using, it calls an api called [https://backend.econjobmarket.org/data/zz_public/jsonp/Ads](https://backend.econjobmarket.org/data/zz_public/jsonp/Ads) to fetch the ads.  If you open this url you'll see what is returned.  The `parseresults` function at the beginning of the returned data is included in the 
`my_ads.js` file so you can read what it does.

<h2>Installation using AJAX</h2>

A more modern way to do this is to use javascript AJAX requests.  This method is quite a bit faster than jsonp, though at the moment I haven't been able to get the css to work properly with AJAX.

The installation is as above, except that you use the `index.html` file and the `my_ads_ajax.js` files in the directory [https://github.com/econjobmarket/ad-display/ajax/] of the repository to setup your webpage.

You still need to copy the directories [https://github.com/econjobmarket/ad-display/js](https://github.com/econjobmarket/ad-display/js/) and [https://github.com/econjobmarket/ad-display/css](https://github.com/econjobmarket/ad-display/css) (including their contents) into your `ejm` or `work` directory.  

To see the data that is being used to render the ad display with this method, open the url [https://backend.econjobmarket.org/data/zz_public/json/Ads](https://backend.econjobmarket.org/data/zz_public/json/Ads).