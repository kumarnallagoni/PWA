definde([], function () {
    var pathUrl = "https://query.yahooapis.com/v1/public/yql?format=json&q=select%20*%20from%20weather.forecast%20where%20woeid=2459115";

    function loadMoreResult() {
        fetch(pathUrl)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
            console.log(data)
        })

    }

    return {
        loadMoreResult: loadMoreResult
    }
});