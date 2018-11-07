//var data=require('../Utility/Data.json');
var winston=require('winston');
var LoginP=function(){

	var customerbtn=element(by.buttonText("Customer Login"));
	var managerbtn=element(by.buttonText("Bank Manager Login"))

	this.customerchk=function(){
		
		var ispresent=customerbtn.isPresent();
				if(ispresent)
				{
					winston.info("Customer login Button is Present");
				}
				else
				{
					winston.log("info","Customer login button  is not  Present");
				}
			return this;
			}

		this.managerbtnchk=function(){
			var visible=managerbtn.isPresent()
				if(visible)
				{
					winston.log("info","Bank Manager login Button is Present");
				}
				else
				{
					winston.log("info","Bank Manager login Button is not  Present");
				}
			return this;
		}
		
	}
	module.exports=new LoginP();


