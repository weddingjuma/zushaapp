angular.module('Pagesrv', ['ngResource', ''])

//Factory for Articles
//http://104.131.160.166:3000
.factory('Pages', function ($resource) {
    return $resource(Config.backendUrl+ '/api/pages/:pageId');
})
