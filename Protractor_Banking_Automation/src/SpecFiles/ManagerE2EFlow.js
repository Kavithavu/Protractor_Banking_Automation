var data=require(process.cwd()+'/src/Utility/Data.json')
var Login=require(process.cwd()+'/src/ManagersPageRepository/LoginPage.js')
var ManagerLogin=require(process.cwd()+'/src/ManagersPageRepository/ManagerPage.js')
var AddCustomers=require(process.cwd()+'/src/ManagersPageRepository/AddCustomersPage.js')
var OpenAccount=require(process.cwd()+'/src/ManagersPageRepository/OpenAccount.js')



describe('Banking ManagerLoginE2EFlow', function() {
	beforeEach(function(){
		browser.get(data.url);
	});

	afterEach(function(){
		console.log("\n End of test")
	});

	it('LoginPage', function() {
		Login.customerchk();
		Login.managerbtnchk();
		browser.sleep(3000);
	});	

	it('ClickManagerLoginButton',function(){
		ManagerLogin.ClickManagerLoginBtn();
		browser.sleep(3000);
	});

	it('AddCustomer',function(){
		ManagerLogin.ClickManagerLoginBtn();
		AddCustomers.AddCustomer();
		AddCustomers.FirstName(data.FName);
		AddCustomers.LastName(data.LName);
		AddCustomers.PostCode(data.PCode);
		AddCustomers.SaveCustomerDetails();
		browser.sleep(3000);
		var timeoutInMilliseconds = 1000;
		browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
		var alertDialog = browser.switchTo().alert();
		expect(alertDialog.getText()).toContain('Customer added successfully with customer');
		browser.switchTo().alert().accept();
	
	});

	it("OpenAccount",function(){
		ManagerLogin.ClickManagerLoginBtn();
		OpenAccount.OpenAcc();
		browser.sleep(3000);
		OpenAccount.addcust(data.custname);
		browser.sleep(3000);
		OpenAccount.addcurrency(data.currency1);
		browser.sleep(3000);
		OpenAccount.clickprocess();
		browser.sleep(6000);

		var timeoutInMilliseconds = 1000;
		browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
		var alertDialog = browser.switchTo().alert();
		expect(alertDialog.getText()).toContain('Account created successfully with account Number');
		browser.switchTo().alert().accept();

	});

	it("OpenAccount2",function(){
		ManagerLogin.ClickManagerLoginBtn();
		OpenAccount.OpenAcc();
		browser.sleep(3000);
		OpenAccount.addcust(data.custname2);
		browser.sleep(3000);
		OpenAccount.addcurrency(data.currency2);
		OpenAccount.clickprocess();
		browser.sleep(6000);
		var timeoutInMilliseconds = 1000;
		browser.wait(protractor.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
		var alertDialog = browser.switchTo().alert();
		expect(alertDialog.getText()).toContain('Account created successfully with account Number');
		browser.switchTo().alert().accept();
		browser.sleep(8000);
	});

});