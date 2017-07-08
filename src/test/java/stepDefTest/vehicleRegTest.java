package stepDefTest;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import models.VehicleInfo;
import org.junit.After;
import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import pages.ConfirmVehicle;
import pages.StartNow;
import pages.VehicleReg;
import pages.VehicleRegNotFound;

import java.util.ArrayList;
import java.util.List;
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
	private List<VehicleInfo> vehicleInfos;
	private String baseUrl = "http://www.gov.uk/get-vehicle-information-from-dvla";
	private StringBuffer verificationErrors;

	@Before
	public void prepare() {
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		verificationErrors = new StringBuffer();

	}

	@After()
	public void cleanUp(Scenario scenario) {
		final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");
		driver.close();
	}

	@Given("^I am on the vehicle registration home page$")
	public void i_am_on_the_vehicle_registration_home_page() throws Throwable {
		driver.get(baseUrl);
		startNow = PageFactory.initElements(driver, StartNow.class);
		startNow.ClickStartNowButton();
	}

	@When("^I enter my registration details as \"([^\"]*)\"$")
	public void i_enter_my_registration_details_as(String vehicleRegistration) throws Throwable {
		vehicleReg = PageFactory.initElements(driver, VehicleReg.class);
		vehicleReg.EnterRegistration(vehicleRegistration);
		vehicleReg.ClickContinueButton();
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

	@Given("^I have vehicle registrations in a file of type \"([^\"]*)\" with filename \"([^\"]*)\" including corresponding expected make and colour$")
	public void i_have_vehicle_registrations_in_a_file_of_type_with_filename_including_corresponding_expected_make_and_colour(
			String fileType, String fileName) throws Throwable {
		GenerateTestData();
	}

	@When("^I choose to verify the registrations with the dlva$")
	public void i_choose_to_verify_the_registrations_with_the_dlva() throws Throwable {

		for (VehicleInfo vi : vehicleInfos) {
			i_am_on_the_vehicle_registration_home_page();
			i_enter_my_registration_details_as(vi.getRegistration());
			try {
				the_colour_is(vi.getColour());
				the_make_is(vi.getMake());
			} catch (AssertionError error) {
				verificationErrors.append(error.getMessage());
			}

		}
	}

	@Then("^there should be no errors$")
	public void there_should_be_no_errors() throws Throwable {
		Assert.assertEquals("There were errors validating", 0, verificationErrors.length());
	}

	private void GenerateTestData() {
		vehicleInfos = new ArrayList<VehicleInfo>();
		VehicleInfo vi = new VehicleInfo();
		VehicleInfo v2 = new VehicleInfo();
		vi.setRegistration("LS05FXG");
		vi.setColour("Black");
		vi.setMake("Volkswagen");
		v2.setRegistration("GY06FLE");
		v2.setColour("Blue");
		v2.setMake("Mercedes");
		vehicleInfos.add(vi);
		vehicleInfos.add(v2);
	}

}
