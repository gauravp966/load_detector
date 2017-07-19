//Using ResourceTiming API

function load_detector(callback){

	if ( !('performance' in window) ||
	       !('getEntriesByType' in window.performance) ||
	       !(window.performance.getEntriesByType('resource') instanceof Array)		//to check if the API is supported by the browser.
	     ) {
	     console.log("No API support");
	  	} 
	  	else {

			window.addEventListener('load', function() {				//waits till the DOM is loaded.

				var resource = performance.getEntriesByType("resource");	//grabs ALL of the present resources in the website.

				for (var i=0; i < resource.length; i++) {			//iteration through all resources.

					t = resource[i].responseEnd;				//the 'responseEnd' property returns a timestamp immediately after the browser receives the last byte of the resource..
												//or immediately before the transport connection is closed, whichever comes first.
				
												//we wait in this loop till all the resources are iterated and 'responeEnd' timestamp is received.
				}

				callback.call();						//once, all the resources have responded, we call the callback function.

				console.log("responseEnd: "+ t);				//just to display the responseEnd timestamp on the console.

				

			});
		}

}
