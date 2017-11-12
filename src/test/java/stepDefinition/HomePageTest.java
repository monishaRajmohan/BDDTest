package stepDefinition;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import screenshotGenerator.ScreenshotGenerator;

public class HomePageTest {
	WebDriver wd =null;
	
	@Given("^Open Browser as (.*)$")
	public void openBrowser(String Browser) {
	
	if(wd==null){
		wd = new FirefoxDriver();
	}
				//System.out.println("I am opening the browser"+Browser);
	}


	@cucumber.api.java.en.Then("^Enter URL as (.*)$")
	public void enterURL(String URL) {
		//wd.get(URL);
		//System.out.println("I am Entering the URL"+URL);
HomePage.loadURL(wd, URL);
	}

	@cucumber.api.java.en.Then("^Enter UserName as (.*)$")
	public void enterUserName(String UN) {
		//wd.findElement(By.xpath(".//*[@id='nameid']")).sendKeys(UN);
		//System.out.println("I am Entering the UserName"+UN);

		HomePage.enterUserName(wd, UN);
	}

	@cucumber.api.java.en.And("^Enter MobileNO as (.*)$")
	public void enterMobileNo(String MobileNO) {
		wd.findElement(By.xpath(".//*[@id='mobid']")).sendKeys(MobileNO);
		System.out.println("I am Entering the MobileNumber"+MobileNO);

	}

	@Then("^Enter PickupAdd as (.*)$")
	public void enterPickupAdd(String PickupAdd) {
		wd.findElement(By.xpath(".//*[@id='pickid']")).sendKeys(PickupAdd);
		System.out.println("I am Entering the PickupAdd"+PickupAdd);

	}

	@And("^Enter DropAdd as (.*)$")
	public void enterDropAdd(String DropAdd) {
		wd.findElement(By.xpath(".//*[@id='dropid']")).sendKeys(DropAdd);
		System.out.println("I am Entering the DropAdd"+DropAdd);

	}

	@When("^Select the Vehicle Type as (.*)$")
	public void selectVehicleType(String VehicleType) {
		WebElement drop=wd.findElement(By.xpath(".//*[@id='vehid']"));
		Select s=new Select(drop);
		s.selectByVisibleText(VehicleType);
		System.out.println("I am selecting the VehicleType"+VehicleType);

	}

	@Then("^Click the BookLater CheckBox$")
	public void ClickBookLater() {
		wd.findElement(By.xpath(".//*[@id='bookLater']")).click();
		System.out.println("I am clicking the checkbox");

	}

	@But("^Don't click Bookbutton$")
	public void DontclickBookbutton() {
		System.out.println("Dont click");

	}
	@After
	public void teardown(Scenario s) throws IOException{
		
		if(s.isFailed()){
		ScreenshotGenerator.generateScreenshot(wd, s);
		}
	}

}
