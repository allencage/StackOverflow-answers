/*global angular */

/**
 * @type {angular.Module}
 */

var app = angular.module('app', ['ui.bootstrap', 'ngCookies']);


/*Config settings, routes to be included here*/

app.config(function ($httpProvider) {
    /*Sends the auth cookie in each request*/
    $httpProvider.defaults.withCredentials = true;
    //rest of route code
});