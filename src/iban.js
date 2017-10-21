'use strict';

var Iban_checker = function(){
  this.iban = '0';
  this.transformed_iban = '1';
  this.valid = true;
};
  Iban_checker.prototype.transform = function(number){
    this.iban = number;
    this.transformed_iban = (this.iban.slice(4) + this.iban.slice(0,4)).split('').map(v => isNaN(v) ? (v.charCodeAt(0) & 255)- 55 : v).join('');
  };
  Iban_checker.prototype.check = function(number){
    this.transform(number);
    const divisor = 97;
    var divident = this.transformed_iban.slice(0,9);
    var remainder = divident % divisor;
    divident = remainder + this.transformed_iban.slice(9,16);
    remainder = divident % divisor;
    divident = remainder + this.transformed_iban.slice(16,23);
    remainder = divident % divisor;
    divident = remainder + this.transformed_iban.slice(23,30);
    remainder = divident % divisor;
    remainder != 1 ? this.valid = false : this.valid = true;
  }
