var root = 'https://jsonplaceholder.typicode.com';

$.ajax({								//I have used a dummy REST service only to trigger the 'ajaxStop' event, even if there are no ajax requests in the website.
  url: root + '/posts/1',								
  method: 'GET'
}).then(function(data) {
  console.log(data);
});

function load_detector(callback){

	$(window).ajaxStop(function() {					//'ajaxstop' is triggered when the Ajax requests are complete and there are no other outstanding requests.

		$(window).on("load",function(){				//I used window onload just in case if the Ajax request completes before the DOM is fully loaded.

			callback.call();				//the callback function is called back

		});

	});

}
