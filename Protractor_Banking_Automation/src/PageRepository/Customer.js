var winston=require('winston');

var customerP=function(){
	
	var name=element.all(by.className("ng-binding ng-scope"));
	var loginbtn=element(by.buttonText("Login"));
	var ele;
	var transactions=element(by.buttonText("Transactions"));
//	winston.log("info","Harry Potter Page is Opened");
	
	this.enterName=function(ele){
		name.then(function(data){
			data[ele].click();
			browser.sleep(5000);
		});
		return this
	}
	
	
	this.clickLogin=function(){
		loginbtn.click();
		return require('./Account.js');
	}
	
	
	this.Trans=function(){
		transactions.click();
		return this;
	}
}
module.exports=new customerP();