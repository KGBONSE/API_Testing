package models;

public class VehicleInfo {
	public String getRegistration() {
		return Registration;
	}
	public void setRegistration(String registration) {
		Registration = registration;
	}
	public String getMake() {
		return Make;
	}
	public void setMake(String make) {
		Make = make;
	}
	public String getColour() {
		return Colour;
	}
	public void setColour(String colour) {
		Colour = colour;
	}
	private String Registration;
	private String Make;
	private String Colour;
}
