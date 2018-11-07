var ManagerP=function(){
	var managerbtn=element(by.buttonText("Bank Manager Login"));
	
	
	this.ClickManagerLoginBtn=function(){
		managerbtn.click();
		return this;
	}
	
	
}
module.exports=new ManagerP();