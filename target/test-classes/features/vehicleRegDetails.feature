Feature: Verifying vehicle registration details 
  As a user
  I want to be able to navigate to the vehicle regisstration page
  So I can use the vehicle registration to verify the make and colour of a vehicle

@test 
Scenario Outline: Should verify make and colour of vehicles 
	Given I am on the vehicle registration home page 
	When I enter my registration details as "<vehicleReg>" 
	Then The colour is "<colour>" 
	And The make is "<make>" 
	Examples: 
		| vehicleReg | colour | make       |
		| LS05FXG    | Black  | Volkswagen |
		| GY06FLE    | Blue   | Mercedes   |
		| HY08VGJ    | Black  | Ford       |
		| LT09UEL    | Silver | Ford       |
		| VE10TKY    | Grey   | Volkswagen |
		| LS06FXH    | Silver | Toyota     |

@test		
Scenario Outline: Entering a wrong vehicle registration details 
	Given I am on the vehicle registration home page 
	When I enter my registration details as "<vehicleReg>" 
	Then I should get an error message "<errorMessage>" 
	Examples: 
		| vehicleReg | errorMessage                       |
		| CU57ABC    | Vehicle details could not be found |
			
			
