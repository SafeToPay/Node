var Address = require('../General/Address');

function Customer() {
    this.Name = null;
    this.Identity = null
    this.Phone = null;
    this.Email = null;
    this.Address = Address;
}

 module.exports = Customer;