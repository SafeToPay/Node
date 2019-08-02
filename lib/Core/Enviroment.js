var Token;

exports.setApiKey = function (apikey) {
    Token = apikey;
};

exports.getApiKey = function(){
    return Token;
}
