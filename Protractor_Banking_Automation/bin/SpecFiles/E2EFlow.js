var data=require(process.cwd()+'/src/Utility/Data.json')
var Login=require(process.cwd()+'/src/PageRepository/LoginPage.js')
var customPage=require(process.cwd()+'/src/PageRepository/Customer.js')
var AccountPage=require(process.cwd()+'/src/PageRepository/Account.js')
var WithDrawPage=require(process.cwd()+'/src/PageRepository/WithDrawPage.js')

describe('Banking E2EFlow', function() {
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

	it('CustomerPage', function(){
		customPage=Login.customerclick();
		browser.sleep(3000);
		customPage.enterName(data.YourName);
		customPage.clickLogin();
		customPage.Trans();
		browser.sleep(3000);
	});

	it('AccountPage', function(){
		customPage=Login.customerclick();
		browser.sleep(3000);
		customPage.enterName(data.YourName);
		customPage.clickLogin();
		AccountPage.enterAccount(data.Accounts);
		browser.sleep(6000);
		AccountPage.clickDeposit();
		AccountPage.addAmount(data.money);
		AccountPage.saveDeposit();
		AccountPage.chkBalance();
	});
	
	it('ListOfTransactionsPage',function(){
		customPage=Login.customerclick();
		browser.sleep(3000);
		customPage.enterName(data.YourName);
		customPage.clickLogin();
		AccountPage.enterAccount(data.Accounts);
		customPage.Trans();
		browser.sleep(6000);
	});
	
	it('WithdrawErrorPAge',function(){
		customPage=Login.customerclick();
		browser.sleep(3000);
		customPage.enterName(data.YourName);
		customPage.clickLogin();
		AccountPage.enterAccount(data.Accounts);
		WithDrawPage.ClickWithDraw();
		WithDrawPage.EnterAmount(data.withdrawmoney);
		WithDrawPage.withdrawbtn();
		WithDrawPage.Errormsg();
		browser.sleep(6000);
	});

	it('WithdrawSuccessPage',function(){
		customPage=Login.customerclick();
		browser.sleep(3000);
		customPage.enterName(data.YourName);
		customPage.clickLogin();
		AccountPage.enterAccount(data.Accounts);
		WithDrawPage.ClickWithDraw();
		WithDrawPage.EnterAmount(data.withdrawmoney1);
		WithDrawPage.withdrawbtn();
		WithDrawPage.SuccessMsg();
		browser.sleep(6000);
	});
});