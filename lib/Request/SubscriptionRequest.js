var client = require('../Core/HttpClient');
var util = require('../Core/Util');

var subscriptionObj = require('../Models/Subscription/SubscriptionRequest');
var customerRequestObj = require('../Models/General/Customer');
var addressRequestObj = require('../Models/General/Address');



/**
 * Add a Subscription Register
 *
 * @param [int] $Id
 * @return Response
 */
function Add(subscription) {

    client.HttpClient('POST', "v2/subscription", subscription, false).then(function (result) {


        console.log(result);

    }, function (err) {

        console.log(err);

    });
}


/**
 * Get a Subscription Register
 *
 * @param [int] $Id
 * @return Response
 */
function Get(Id) {

    client.HttpClient('GET', "v2/subscription/get?id=".concat(Id), null, false).then(function (result) {

        console.log(result);

    }, function (err) {

        console.log(err);

    });
}