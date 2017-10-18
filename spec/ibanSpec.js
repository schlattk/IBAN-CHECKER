describe('iban_checker', function(){
  iban_checker = new Iban_checker(1);
  it('has received a number', function(){
      expect(iban_checker.iban).toBe(1);
  });
  it('has an alphabet index', function(){
      expect(iban_checker.index).toBeDefined();
  });
  it('has a number value associated to a letter key', function(){
      expect(iban_checker.index.C).toBe(12);
  })
});


/* describe('deposit money', function(){
    it('has the possibility of adding money', function(){
    expect(account.deposit).toBeDefined();
  });
    it('increases the balance when money is added', function(){
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