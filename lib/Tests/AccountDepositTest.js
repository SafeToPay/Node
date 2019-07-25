function DetailTest(){

    var Id = 287891;
    
    Detail(Id);
    }
    
    function ListTest(){
        var CreatedDateInitial = "2019-07-01";
        var CreatedDateEnd = "2019-07-16";
        var PageNumber = 1;
        var RowsPerPage = 10;
        List(CreatedDateInitial,CreatedDateEnd,PageNumber,RowsPerPage);
    }
    
    function GetBankAccountTest(){
       
        GetBankAccount();
    }
    
    
    DetailTest();
    ListTest();
    GetBankAccountTest();
    