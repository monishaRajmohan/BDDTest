package pages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class HomePage {
	
	public static void loadURL(WebDriver wd,String url){
		wd.get(url);
	}
	public static void enterUserName(WebDriver wd, String userName){
		wd.findElement(By.xpath(".//*[@id='nameid']")).sendKeys(userName);
		
	}
	public static void enterMobileNumber(WebDriver wd, String mobileNumber){
		wd.findElement(By.xpath(".//*[@id='mobid']")).sendKeys(mobileNumber);
		
	}
	public static void enterPickupPlace(WebDriver wd, String pickupPlace){
		wd.findElement(By.xpath(".//*[@id='pickid']")).sendKeys(pickupPlace);
	}
	public static void enterDropPlace(WebDriver wd, String dropPlace){
		wd.findElement(By.xpath(".//*[@id='dropid']")).sendKeys(dropPlace);
	}
	public static void selectVtype(WebDriver wd, String Vtype){
		WebElement drop=wd.findElement(By.xpath(".//*[@id='vehid']"));
		Select s=new Select(drop);
		s.selectByVisibleText(Vtype);
	//	s.selectByIndex(1);
		
	}
	public static void clickBooKLater(WebDriver wd){
		wd.findElement(By.xpath(".//*[@id='bookLater']")).click();
	}


}
