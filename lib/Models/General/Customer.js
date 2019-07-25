
function Customer(vName,vIdentity,vPhone,vEmail,vAddress) {
    this.Name = vName;
    this.Identity = vIdentity;
    this.Phone = vPhone;
    this.Email = vEmail;
    this.Address = vAddress;
}

module.exports = {

    Customer: Customer
    
}