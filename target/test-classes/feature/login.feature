@HomePage
Feature: We are going to validate NTL Taxi Home Page.

  Scenario Outline: Validate Home Page with valid data.
    Given Open Browser as <BROWSER>
    Then Enter URL as <URL>
    Then Enter UserName as <NAME>
    And Enter MobileNO as <MOBILE>
    Then Enter PickupAdd as <PICADD>
    And Enter DropAdd as <DROPADD>
    When Select the Vehicle Type as <VTYPE>
    Then Click the BookLater CheckBox
    But Don't click Bookbutton

    Examples:
    |BROWSER|URL|NAME|MOBILE|PICADD|DROPADD|VTYPE|
    |Firefox|http://www.ntltaxi.com/|vmetrya|98798798|ADYAR|ADYAR|Sedan|
    |Firefox|http://www.ntltaxi.com/|vmetryb|98798798|ADYAR|ADYAR|Sedan|
    |Firefox|http://www.ntltaxi.com/|vmetryc|98798798|ADYAR|ADYAR|Sedan|
                
        
    