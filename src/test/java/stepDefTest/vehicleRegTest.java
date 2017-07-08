package stepDefTest;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import pages.ConfirmVehicle;
import pages.StartNow;
import pages.VehicleReg;
import pages.VehicleRegNotFound;

import java.util.concurrent.TimeUnit;

public class vehicleRegTest {

    public vehicleRegTest() {
        super();
    }

    WebDriver driver;
    private StartNow startNow;
    private VehicleReg vehicleReg;
    private ConfirmVehicle confirmVehicle;
    private VehicleRegNotFound vehicleRegNotFound;



    @Before
    public void prepare() {
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();

//		driver.manage().window().maximize();
        String baseUrl = "http://www.gov.uk/get-vehicle-information-from-dvla";
        driver.get(baseUrl);
    }

    @After
    public void cleanUp() {
        driver.close();
    }


    @Given("^I am on the vehicle registration home page$")
    public void i_am_on_the_vehicle_registration_home_page() throws Throwable {
        startNow = PageFactory.initElements(driver, StartNow.class);
        startNow.startNowButton.click();

    }

    @When("^I enter my registration details as \"([^\"]*)\"$")
    public void i_enter_my_registration_details_as(String vehicleRegistration) throws Throwable {
        vehicleReg = PageFactory.initElements(driver, VehicleReg.class);
        vehicleReg.registrationNoInput.sendKeys(vehicleRegistration);
        vehicleReg.continueButton.click();
    }

    @Then("^The colour is \"([^\"]*)\"$")
    public void the_colour_is(String colour) throws Throwable {
        confirmVehicle = PageFactory.initElements(driver, ConfirmVehicle.class);
        confirmVehicle.shouldVerifyVehicleColour(colour);
    }

    @Then("^The make is \"([^\"]*)\"$")
    public void the_make_is(String make) throws Throwable {
       confirmVehicle.shouldVerifyVehicleMake(make);
    }

    @Then("^I should get an error message \"([^\"]*)\"$")
    public void i_should_get_an_error_message(String errorMessage) throws Throwable {
        vehicleRegNotFound = PageFactory.initElements(driver, VehicleRegNotFound.class);
        vehicleRegNotFound.shouldVerifyErrorMessage(errorMessage);
    }

}
