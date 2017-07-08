package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class StartNow {
    public StartNow(WebDriver driver) {
        super();
        this.driver = driver;
        PageFactory.initElements(driver, this);
        WebDriverWait wait = new WebDriverWait(driver, 40);
        wait.until(ExpectedConditions.elementToBeClickable(startNowButton));
    }

    WebDriver driver;
    @FindBy(css=".button")
    private WebElement startNowButton;

	public void ClickStartNowButton() {
		startNowButton.click();
	}

}