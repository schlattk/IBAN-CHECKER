describe('iban_checker', function(){
  let iban_checker = new Test_iban(1);
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

describe('has a function that transforms the IBAN', function(){
  let iban_checker = new Test_iban('DE19760300800930875295');
  it('converts the mixed string into a transformed numberstring ', function(){
      expect(iban_checker.transform('DE19760300800930875295')).toBe('760300800930875295131419');
  });
});

describe('has a function that check whether an IBAN is valid', function(){
  let iban_checker = new Test_iban('BE71096123456769');
  iban_checker.check();
  it('returns whether valid is either true or false', function(){
      expect(iban_checker.valid).toBe(true);
  });
});
  describe('has a function that check whether an IBAN is valid', function(){
    let iban_checker = new Test_iban('00800930875295');
    iban_checker.check();
    it('returns whether valid is either true or false', function(){
        expect(iban_checker.valid).toBe(false);
    });
});
