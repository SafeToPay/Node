var BankData = require('../Bank/BankData');

function TransferRegister() {
    $Id = 0;
    $IdTransfer = 0;
    $IdMerchant = 0;
    $BankData = BankData;
    $Identity = null;
    $Amount = null;
    $Identification = null;

    $CallbackUrl = null;
    $IsTransferred = null;
    $IsReleaseTransfer = null;

    $IsNotified = null;
    $IsReturned = null;
    $HashScheduling = null;
    $HashConfirmation = null;

    $CompensationDate = null;
    $CreatedDate = null;

    $ChangedDate = null;
    $Validation = null;
    $IdMerchantRequester = 0;
}

export default TransferRegister;