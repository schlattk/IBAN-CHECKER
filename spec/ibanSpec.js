describe('iban_checker', function(){

  iban_checker = new Test_iban(1);
  it('has a number', function(){
      expect(iban_checker.iban).toBeDefined();
  });
  it ('has a divisor',function(){
      expect(iban_checker.divisor).toBe(97);
  });
  it ('has a valid/invalid variable',function(){
      expect(iban_checker.valid).toBeDefined();
  });
  it('has a transform function', function(){
      expect(iban_checker.transform).toBeDefined();
  });
  it ('has a calc function',function(){
      expect(iban_checker.calc).toBeDefined();
  });
  it ('has a check function',function(){
      expect(iban_checker.check).toBeDefined();
  });

});
