var root = 'https://jsonplaceholder.typicode.com';

$.ajax({								//I have used a dummy REST service only to trigger the 'ajaxStop' event,
  url: root + '/posts/1',						// even if there are no ajax requests in the website.
  method: 'GET'
}).then(function(data) {
  console.log(data);
});

function load_detector(callback){

	$(window).on("load", function(){				//I used window onload to check the DOM.

		$(window).ajaxStop(function(){				//'ajaxstop' is triggered when the Ajax requests are complete and there are no other outstanding requests.
											
			callback.call();				//the callback function is called back.

		});

	});
	
}
