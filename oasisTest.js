var links = [];
var casper = require('casper').create({
	clientScripts:  [
        'includes/jquery-1.10.2.min.js'      // JQuery is now included 
    ],
    pageSettings: {
        loadImages:  false,        // The WebPage instance used by Casper will
        loadPlugins: false         // use these settings
    },
    logLevel: "info",              // Only "info" level messages will be logged
    verbose: true                  // log messages will be printed out to the console
});
var data = [];


function getData() {
    var $theDivSet;
    //Find the div which has 11 children. 
    if($('.identify.multine > div').each(function(j) {
        if($(j.size()==11)) {
            theDivSet = $(this);
        }
    }));

    //Choose the first six children
    $('theDivSet:lt(6)').each(function(i) {
        if(i==0) {
            return $(this).text();
        }
        else if (i==1) {
            return $(this).text();
        }
        else {
            return $(this).text();
        }
    });
    
    
    //     //First Div: (first span within it)
    //     //Second Div: <span>  Then select stuff after BREAK line
    //     //Third Div: <span>'s info
    //     //Fourth Div: <span>'s info, then following " # ", then <span>'s info, and following number
    //     //Fifth Div: an <ul> of items. Wnat to get into (not in span) 

}


casper.start('http://www.oasisnyc.net/map.aspx?zoomto=lot:1009960020&etabs=1', function() {

});

    // casper.then(function() {
    //     this.evaluate(function($) {
    //       console.log($('title').text());
    //     }
    // )});




casper.then(function() {
    // aggregate results for the 'casperjs' search
    links = this.evaluate(getData);
});
casper.run(function() {
	this.exit(); 
});
