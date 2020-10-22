//API
const AccountDepositRequest = require('../lib/Request/AccountDepositRequest');
const MarketplaceRequest = require('../lib/Request/MarketplaceRequest');
const PaymentRequest = require('../lib/Request/PaymentRequest');
const TokenizationRequest = require('../lib/Request/TokenizationRequest');
const TransactionRequest = require('../lib/Request/TransactionRequest');
const SingleSaleRequest  = require('../lib/Request/SingleSaleRequest');
const PlanRequest  = require('../lib/Request/PlanRequest');
const SubscriptionRequest  = require('../lib/Request/SubscriptionRequest');

module.exports = {
    AccountDepositRequest,
    MarketplaceRequest,
    PaymentRequest,
    TokenizationRequest,
    TransactionRequest,
    SingleSaleRequest,
    PlanRequest,
    SubscriptionRequest
}