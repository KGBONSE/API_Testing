package pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class VehicleReg {
    public VehicleReg(WebDriver driver){
        super();
        this.driver = driver;
        PageFactory.initElements(driver, this);
        WebDriverWait wait = new WebDriverWait(driver, 40);
        wait.until(ExpectedConditions.elementToBeClickable(registrationNoInput));
    }

    WebDriver driver;
    @FindBy(css="#Vrm")
    private WebElement registrationNoInput;

    @FindBy(css=".button")
    private WebElement continueButton;
    
    public void ClickContinueButton(){
    	continueButton.click();
    }
    
    public void EnterRegistration(String regDetails){
    	registrationNoInput.sendKeys(regDetails);
    }
}
