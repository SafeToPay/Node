
function Address(vZipCode,vStreet,vNumber,vComplement,vDistrict,vCityName,StateInitials,CountryName) {
    this.ZipCode = vZipCode;
    this.Street = vStreet;
    this.Number = vNumber;
    this.Complement = vComplement;
    this.District = vDistrict;
    this.CityName = vCityName;
    this.StateInitials = StateInitials;
    this.CountryName = CountryName;
}

module.exports = {

    Address: Address
    
}