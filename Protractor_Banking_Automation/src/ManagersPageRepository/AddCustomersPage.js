var AddCustomerP=function(){
	var addcustomer=element(by.partialButtonText("Customer"));
	var Fname=element(by.model("fName"));
	var Lname=element(by.model("lName"));
	var Pcode=element(by.model("postCd"));
	var adcust=element(by.xpath("//button[@type='submit']"));
	
	this.AddCustomer=function(){
		addcustomer.click();
		return this;
	}
	
	this.FirstName=function(fnm){
		Fname.sendKeys(fnm);
		return this;
	}
	
	this.LastName=function(lnm){
		Lname.sendKeys(lnm);
		return this;
	}
	
	this.PostCode=function(code){
		Pcode.sendKeys(code);
		return this;
	}
	
	this.SaveCustomerDetails=function(){
		adcust.click();
		return this;
	}
}
module.exports=new AddCustomerP();