var OpenAccountP=function(){

	var openaccntbtn=element(by.buttonText("Open Account"));
	var custname=element.all(by.className("ng-binding ng-scope"));
	var options= element(by.model('currency'));
	var processbtn=element(by.buttonText("Process"));
	var timeoutInMilliseconds = 1000;


	this.OpenAcc=function(){
		openaccntbtn.click();
	}

	this.addcust=function(opt){
		custname.then(function(data){
			data[opt].click();
			browser.sleep(5000);
		});
		return this
	}

	this.addcurrency=function(op){
		options.$('[value="'+op+'"]').click();
		return this
	}


	this.clickprocess=function(){
		processbtn.click();
		return this;
	}


}
module.exports=new OpenAccountP();