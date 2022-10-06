//This function creates a table of all Ads
function parseResults(results) {

        //var adObjectList = JSON.parse(results);

	var deadline;
	var imageLink;
	document.write('<div id="main">');
  	document.write('<div class="container">');
  	document.write('<div class="12u">');
  	document.write('<section>');
  	document.write('<h2>Current Job Postings</h2>');

	document.write('<ul class="small-image-list">');	
	//for(const val of results) 
	data = JSON.parse(results);
	for(var i = 0; i < data.length; i++) {
	var ad = data[i];


		//console.log(ad.posid);

		document.write('<li>');			

		deadline = ad.enddate.substring(0, 10);

		// Employer Image
		document.write('<div id="wrap">');
		document.write('<div id="left_col">');

		// image link
		imageLink = "https://backend.econjobmarket.org/ejm_setup/readgif/"
				+ ad.oid;

		document.write('<p><span>' + '<img src="' + imageLink + '" alt="" ' +
					'style="max-width: 80px;"' +
					' title="' + ad.name + ' (' + ad.department + ')'+ '">' + '</span></p>');

		document.write('</div>');

		// Job title
		document.write('<div id="right_col">');
		document.write('<a href="" id="' + ad.posid + '"><span>' + ad.adtitle + '</a></span>');
		document.write('<br />');

		// Employer
		document.write('<strong>Employer: </strong>');
		document.write('<span>' + ad.name + ' (' + ad.department + ') ' );
		document.write('<br />');
		
		// Location
		document.write('<strong>Location: </strong>');
		document.write('<span>' + ad.position_country + '</span>');
		document.write('<br />');

		// Deadline time
		document.write('<strong>Deadline: </strong>');


		document.write('<span>' + deadline + '</span>');		
		document.write('</div>');
		document.write('</div>');
		document.write('</li>');

		createAdsDetailInfoPage(ad);

	}

	document.write('</ul>');
	document.write('</section></div></div></div>');


}

function createAdsDetailInfoPage(adObject) {
	document.getElementById(adObject.posid).onclick = function() {

		event.preventDefault();

		// open a new window
		var newWindow = window.open('');
		// initialize the content of the new page
		var newPage = "<html>";
		newPage += '<head>';

		newPage += "<title>Job Posting Detail</title>";
		newPage += '<link rel="shortcut icon" href="https://econjobmarket.org/favicon.ico" />' + 
			   '<meta http-equiv="content-type" content="text/html; charset=utf-8" />' +
			   '<meta name="description" content="" />' + 
			   '<meta name="keywords" content="" />' +
			'<script src="js/jquery.min.js"></script>' +
			'<script src="js/skel.min.js"></script>' +
			'<script src="js/skel-layers.min.js"></script>' +
			'<script src="js/init.js"></script>' +
			'<script src="//code.jquery.com/jquery-1.10.2.js"></script>' +
			'<script src="//code.jquery.com/ui/1.11.3/jquery-ui.js"></script>' +

			'<link href="https://fonts.googleapis.com/css?family=Ubuntu+Condensed" rel="stylesheet">' +

			'<noscript>' +
			'<link rel="stylesheet" type="text/css" media="" href="css/skel.css" />' +
			'<link rel="stylesheet" type="text/css" media="" href="css/style.css" />' +
			'<link rel="stylesheet" type="text/css" media="" href="css/style-desktop.css" />' +
			'</noscript>' ;


		// end HTML Heading section
		newPage += "</head>";

		// start HTML Body section
		newPage += "<body>";

		newPage += '<div id="main">';
		newPage += '<div class="container">';
		newPage += '<div class="12u">';
		newPage += '<section>';

		// Employer Image
		imageLink = 'https://backend.econjobmarket.org/ejm_setup/readgif/' + adObject.oid;

		newPage += '<p align ="center"><span>' + '<img src="' + imageLink + '" alt="" '+
					//	'style="max-width: 80px;"' + 
					' title="' + adObject.name + ' (' + adObject.department + ')' + '">' + '</span></p>';
		newPage += '<br /> ';

		// Adtitle:
		newPage += '<h2>' + adObject.adtitle + '</h2>';
			
		// Job Detail:
				
		// 1. Job title
		newPage += '<h1>' ;
		newPage += '<strong>Title: </strong>' ;
		newPage += '<span>' + adObject.adtitle + '</span>' ;
		newPage += '</h1>' ;
		
		// Employer
		newPage += '<h1>' ;
		newPage += '<strong>Employer: </strong>' ;
		newPage += '<span>' + adObject.name + ' (' + adObject.department + ')' + '</span>' ;
		newPage += '</h1>' ;
		
		// Location
		newPage += '<h1>' ;
		newPage += '<strong>Location: </strong>' ;
		newPage += '<span>' + adObject.position_country + '</span>' ;
		newPage += '</h1>' ;

		// Postition Type:
		newPage += '<h1>' ;
		newPage += '<strong>Position Type: </strong>' ;
		newPage += '<span>' + adObject.position_type + '</span>' ;
		newPage += '</h1>' ;

		// Job Description
		newPage += '<br>' ;
		newPage += '<strong>Job Description: </strong>' ;
		newPage += '<p>' + adObject.adtext +'</p>' ;
			
		// Link to apply
		adlink = 'https://econjobmarket.org/apply/PosApp.php?' + adObject.posid;
		newPage += '<br>' ;
		newPage += '<span>' ;
		//newPage += '<h4><a href="' + adlink + '">Submit Application</a></h4>' ;
		newPage += '</span>' ;

		newPage += "</section></div></div></div></body></html>";
		newWindow.document.write(newPage);
		newWindow.document.close();
	};
}
