describe('iban_checker', function(){
  iban_checker = new Iban_checker();
  it('has a number', function(){
      expect(iban_checker.iban).toBeDefined();
  });
  it ('has a transformed number',function(){
      expect(iban_checker.transformed_iban).toBeDefined();
  });
  it('has an index', function(){
      expect(iban_checker.index).toBeDefined();
  });
  it ('has a valid/invalid variable',function(){
      expect(iban_checker.valid).toBeDefined();
  });
  it('has a number value associated to a letter key', function(){
      expect(iban_checker.index['C']).toBe(12);
  });
  it('has a number value associated to a number key', function(){
      expect(iban_checker.index['1']).toBe(1);
  });
});

describe('checks whether IBAN is correct', function(){
  iban_checker = new Iban_checker();
  iban_checker.transform('DE19760300800930875295');
  it('converts the mixed string into a transformed string ', function(){
      expect(iban_checker.transformed_iban).toBe('760300800930875295131419');
  });
});

describe('checks whether IBAN is correct', function(){
      iban_checker1 = new Iban_checker();
      iban_checker1.transform('GB82WEST12345698765432');
          it('converts the mixed string into a transformed string ', function(){
          expect(iban_checker1.transformed_iban).toBe('3214282912345698765432161182');
          });
  });

    /*it('increases the balance when money is added', function(){
    account.deposit(1000);
    expect(account.balance).toBe(1000);
  });
    it('adds the deposit and the time in the record', function(){
    expect(account.record[0].date).toEqual(jasmine.any(Date));
    });
    it('adds consecutive dates to the record', function(){
    account.deposit(0);
    expect(account.record[1].date).toBeGreaterThan(account.record[0].date);
    });

});

describe('withdraw money', function(){
    it('has the possibility of withdrawing money', function(){
    expect(account.withdraw).toBeDefined();
  });
    it('reduces the balance when money is withdrawn', function(){
    account.withdraw(1000);
    expect(account.balance).toBe(0);
  });
    it('adds the withdrawal and the time in the record', function(){
    expect(account.record[1].date).toEqual(jasmine.any(Date));
    });
}); */
