/PerformanceResourceTiming API

function load_detector(callback){

	if ( !('performance' in window) ||
	       !('getEntriesByType' in window.performance) ||
	       !(window.performance.getEntriesByType('resource') instanceof Array)		//to check if the API is supported by the browser.
	     ) {
	     console.log("No API support");
	} 
	else {

		window.addEventListener('load', function() {							//waits till the DOM is loaded.

			var resource = performance.getEntriesByType("resource");				//grabs ALL of the present resources in the website.

			for (var i=0; i < resource.length; i++) {							//iteration through all resources.

				while(resource[i].responseEnd == null || resource[i].responseEnd == undefined){		//here we wait until we get a responseEnd.
					if(resource[i].responseEnd != undefined){					//or immediately before the transport connection is closed, whichever comes first.
						
						break;
						
					}
				}
			
				console.log("responseEnd: "+ resource[i].responseEnd + ". resources: " + resource);	//shoes the resources and its end time via responseEnd.											
			}
		 																				
			callback.call();										//once, all the resources have responded, we call the callback function.																			
										
		});
	}
}
