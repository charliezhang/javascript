var Q = require('q');
var http = require('http');

// Convert event to promises. 
// Optional callback, supports both promise style and callback style
function getUrl(url, callback) {
  var deferred = Q.defer();

  http.get(url, function(res) {
    deferred.resolve(res);
  }).on('error', function(e) {
    deferred.reject(e);
  });

  deferred.promise.nodeify(callback);
  return deferred.promise;
}

URL1 = URL2 = 'http://www.google.com/';
URL1 = 'http://www.baidu.com';

getUrl(URL1).then(function(response) {
  console.log('got response1 : ', response.statusMessage);
  return getUrl(URL2);
}).fail(function(error) {
  console.log('error: ', error);
}).then(function(response) {
  console.log('step 2, response 2:', response.statusMessage);
}).fail(function(error) {
  console.log('error: ', error);
});

getUrl(URL2, function (error, response) {
  if (error) {
    console.log('error: ', error);
  } else {
    console.log('got response2 : ', response.statusMessage);
  }
});

