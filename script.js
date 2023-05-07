let POLYGON_API = '80FoCgCsh3GtqihuTm1W29oLHXHV9fog';

function clicked() {
    // gets the user typed value
    let userStock = document.getElementById('user-input').value;

    // fetches data from the api
	fetch(
		'https://api.polygon.io/v2/aggs/ticker/' + userStock + '/range/1/day/2023-01-09/2023-01-09?apiKey=' + POLYGON_API,
	)
		.then(response => response.json())
		.then(response => {
            // prints out the response
            console.log(response);

            // sets the value in the website to be stock value
            document.getElementById('display').innerHTML = response['results'][0]['c']
        })
}