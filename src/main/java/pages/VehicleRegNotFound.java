package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class VehicleRegNotFound {
	public VehicleRegNotFound(WebDriver driver) {
		super();
		this.driver = driver;
		PageFactory.initElements(driver, this);
		WebDriverWait wait = new WebDriverWait(driver, 60);
		wait.until(ExpectedConditions.elementToBeClickable(VehicleRegNotFound));
	}

	WebDriver driver;
	@FindBy(css = ".heading-large")
	private WebElement VehicleRegNotFound;

	public void shouldVerifyErrorMessage(String errorMessage) {
		Assert.assertTrue("Vehicle details could not be found",
				VehicleRegNotFound.getText().equalsIgnoreCase(errorMessage));
	}
}
