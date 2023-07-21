import request from "request";
import { RemoveObjectKeys, IsNullOrWhiteSpace } from "./Util.js";
import { getApiKey } from './Environment.js';

export function HttpClient(method, endpoint, body, IsPayment) {
    const headers = {
        'X-API-KEY': getApiKey(),
        'Content-Type': 'application/json'
    };

    // Get Endpoint URL
    endpoint = GetWebMethodUri(IsPayment).concat(endpoint);

    // Remove null property
    if (body != null)
        body = RemoveObjectKeys(body);

    if (IsNullOrWhiteSpace(JSON.stringify(body)))
        body = null;

    const options = {
        method: method,
        url: endpoint,
        headers: headers,
        body: (body != null ? JSON.stringify(body) : null)
    };

    return new Promise(function (resolve, reject) {
        request(options, function (err, response, body) {
            if (response.statusCode == 200) {
                if (!IsNullOrWhiteSpace(body))
                    resolve(JSON.parse(body));
                else
                    resolve(null);
            } else {
                reject(response);
            }
        });
    });
}

function GetWebMethodUri(IsPayment) {
    if (!IsPayment)
        return "https://api.safe2pay.com.br/v2/";
    else
        return "https://payment.safe2pay.com.br/v2/";
}
