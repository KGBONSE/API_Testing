package pages;


import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ConfirmVehicle {
    public ConfirmVehicle(WebDriver driver){//constructor
        super();
        this.driver = driver;
        PageFactory.initElements(driver, this);
        WebDriverWait wait = new WebDriverWait(driver, 40);
        wait.until(ExpectedConditions.elementToBeClickable(confirmVehicleReg));
    }

    WebDriver driver;
    @FindBy(css=".button")
    private WebElement confirmVehicleReg;

    @FindBy(xpath=".//li/span[text()='Colour']//following-sibling::span/strong")
    private WebElement vehicleColourSpan;

    @FindBy(xpath=".//li/span[text()='Make']//following-sibling::span/strong")
    private WebElement vehicleMakeSpan;

    public void shouldVerifyVehicleMake(String vehicleMake){
        Assert.assertTrue("Make of Vehicle", vehicleMakeSpan.getText().equalsIgnoreCase(vehicleMake));
    }

    public void shouldVerifyVehicleColour(String vehicleColour){
        Assert.assertTrue("Colour of Vehicle", vehicleColourSpan.getText().equalsIgnoreCase(vehicleColour));
    }
}

