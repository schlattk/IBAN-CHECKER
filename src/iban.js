'use strict';

var Iban_checker = function(){
  this.iban = '0';
  this.transformed_iban = '1';
  this.valid = true;
  this.index = {A:10,
                B:11,
                C:12,
                D:13,
                E:14,
                F:15,
                G:16,
                H:17,
                I:18,
                J:19,
                K:20,
                L:21,
                M:22,
                N:23,
                O:24,
                P:25,
                Q:26,
                R:27,
                S:28,
                T:29,
                U:30,
                V:31,
                W:32,
                X:33,
                Y:34,
                Z:35,
                1:1,
                2:2,
                3:3,
                4:4,
                5:5,
                6:6,
                7:7,
                8:8,
                9:9,
                0:0};
  };

  Iban_checker.prototype.transform = function(number){
    this.iban = number;
    var sliced = this.iban.slice(0,4);
    this.transformed_iban = this.iban.slice(4) + sliced;
    var mixed_array = this.transformed_iban.split('');
    var number_array = [];
    number_array = mixed_array.map(v => this.index[v]);
    this.transformed_iban = number_array.join('');
  };
