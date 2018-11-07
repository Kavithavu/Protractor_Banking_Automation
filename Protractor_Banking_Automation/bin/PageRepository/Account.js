
var AccountP=function(){

	var transaction=element(by.buttonText("Transactions"));
	var depositbtn=element(by.buttonText("Deposit"));
	var accounts=element.all(by.options("account for account in Accounts"));
	var acnt;
	var amount=element(by.model("amount"));
	var savebtn=element(by.xpath("//button[@type='submit']"));
	var chkbalance=element(by.className("error ng-binding"));
	
		
	this.enterAccount=function(acnt){
		accounts.then(function(data){
			data[acnt].click();
		});
		return this;
	}
	
	this.clickDeposit=function(){
		depositbtn.click();
		return this;
	}
	
	this.addAmount=function(mny){
		amount.sendKeys(mny);
		return this;
	}
	
	this.saveDeposit=function(){
		savebtn.click();
		return this;
	}
	
	this.chkBalance=function(){
		expect(chkbalance.getText()).toEqual("Deposit Successful");
		return this;
	}
	
}
module.exports=new AccountP();