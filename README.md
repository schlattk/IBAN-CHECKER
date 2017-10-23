# iban_checker

This apps takes as an input the IBAN (International Bank Account Number) and
checks wether it is valid using an algorithm given by the international banking
authority.

Implemented using the prototype pattern

How to use:

Clone the repo
Open SpecRunner.html and iban_checker.html in the browser

all tests(jasmine) should be passing

iban = new Iban_checker;
  Iban_checker {iban: "0", transformed_iban: "1", valid: true, divisor: 97}
iban.check('AL35202111090000000001234567');
  undefined
iban.valid
  true
iban.check('AL35202111090000000001234561');
 undefined
iban.valid
 false
