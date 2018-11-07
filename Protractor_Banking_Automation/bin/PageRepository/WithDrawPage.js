var WithDrawP=function(){
	var wdraw=element(by.buttonText("Withdrawl"));
	var amntbox=element(by.model("amount"));
	var withdrawbtn=element(by.buttonText("Withdraw"));
	var errmsg=element(by.className("error ng-binding"));
	var successmsg=element(by.xpath("//span[text()='Transaction successful']"));

	this.ClickWithDraw=function(){
		wdraw.click();
		return this;
	}
	
	this.EnterAmount=function(amnt){
		amntbox.sendKeys(amnt);
		return this;
	}
	
	this.withdrawbtn=function(){
		withdrawbtn.click();
		return this;
	}
	
	this.Errormsg=function(){
		expect(errmsg.getText()).toEqual("Transaction Failed. You can not withdraw amount more than the balance.");
		return this;
	}
	
	this.SuccessMsg=function(){
		expect(successmsg.getText()).toEqual("Transaction successful");
		return this;
	}
}
module.exports=new WithDrawP();