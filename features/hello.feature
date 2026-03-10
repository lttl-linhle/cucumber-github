Feature: Hello Cucumber
  Scenario: Say Hello
    Given I have a greeting "Hello"
    When I say it to "Cucumber"
    Then I should hear "Hello Cucumber!"
