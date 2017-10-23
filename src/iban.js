'use strict';

var Iban_checker = function(){
  this.iban = '0';
  this.transformed_iban = '1';
  this.valid = true;
  this.divisor = 97;
};
  Iban_checker.prototype.transform = function(number){
    this.iban = number.toString();
    this.transformed_iban = (this.iban.slice(4) + this.iban.slice(0,4)).split('').map(v => isNaN(v) ? (v.charCodeAt(0) & 255)- 55 : v).join('');
  };
  Iban_checker.prototype.check = function(number){
    this.transform(number);
    var divident = this.transformed_iban.slice(0,10);
    var remainder = divident % this.divisor;
    divident = remainder + this.transformed_iban.slice(10,20);
    remainder = divident % this.divisor;
    divident = remainder + this.transformed_iban.slice(20,30);
    remainder = divident % this.divisor;
    remainder != 1 ? this.valid = false : this.valid = true;
  }
