

class Controller{

  constructor(){
    this.number = "";
    this.result ="";
    }

  read(){
    let input = document.getElementById('app');
    this.number = input.value;
    this.write(this.number);
  }

  write(number){
    const test = new Test_iban(number);
    if(test.check()) {this.result = "VALID"} else {this.result = "INVALID"};
    let result = document.getElementById("result");
    result.textContent = "";
    result.textContent = `Your IBAN is ${this.result}`;
  }
};

const initialize = function(){
  controller = new Controller;
  controller.read();
}

document.getElementById("app").addEventListener("dblclick",initialize);
