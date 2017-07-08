Feature: Verifying vehicle registration details 
  As a user
  I want to be able to navigate to the vehicle regisstration page
  So I can use the vehicle registration to verify the make and colour of a vehicle
  
Background:
Given I have vehicle registrations in a file of type "CSV" with filename "vr.csv" including corresponding expected make and colour

@test
Scenario: Should verify vehicle registrations  make and colour
When I choose to verify the registrations with the dlva
Then there should be no errors