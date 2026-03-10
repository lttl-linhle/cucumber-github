Feature: Calculator
  As a user
  I want to use a calculator
  So that I don't need to calculate in my head

  @TO-18
  Scenario: Add two numbers
    Given I have entered 50 into the calculator
    And I have entered 70 into the calculator
    When I press add
    Then the result should be 120 on the screen

  @TO-19
  Scenario Outline: Add multiple numbers
    Given I have entered <input_1> into the calculator
    And I have entered <input_2> into the calculator
    When I press add
    Then the result should be <output> on the screen

    Examples:
      | input_1 | input_2 | output |
      | 20      | 30      | 50     |
      | 2       | 5       | 7      |
      | 0       | 40      | 40     |
