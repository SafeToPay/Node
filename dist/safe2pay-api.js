//API
const AccountDepositRequest = require('../lib/Request/AccountDepositRequest');
const DebitAccountRequest = require('../lib/Request/DebitAccountRequest');
const MarketplaceRequest = require('../lib/Request/MarketplaceRequest');
const PaymentRequest = require('../lib/Request/PaymentRequest');
const PlanRequest = require('../lib/Request/PlanRequest');
const SubscriptionRequest = require('../lib/Request/SubscriptionRequest');
const TokenizationRequest = require('../lib/Request/TokenizationRequest');
const TransactionRequest = require('../lib/Request/TransactionRequest');

module.exports = {
    AccountDepositRequest,
    DebitAccountRequest,
    MarketplaceRequest,
    PaymentRequest,
    PlanRequest,
    SubscriptionRequest,
    TokenizationRequest,
    TransactionRequest
}