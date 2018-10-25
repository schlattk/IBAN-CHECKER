
  let result = document.getElementById("result");
  let field = document.getElementById("app");
  let button = document.getElementById("button");

  let invalidInputTest = function(){
    field.value = "123";
    button.click();
    if (result.textContent === "Your IBAN is INVALID"){
      console.log("INVALID PASSES TEST");
    }
    else {console.log(`INVALID FAILS TEST AND DISPLAYS ${result.textContent}`)
    }
    field.value = "";
    result.textContent = "";
   }

   let validInputTest = function(){
     field.value = "BE71 0961 2345 6769";
     button.click();
     if (result.textContent === "Your IBAN is VALID"){
       console.log("VALID PASSES TEST");
     }
     else {console.log(`VALID FAILS TEST AND DISPLAYS ${result.textContent}`)
     }
     field.value = "";
     result.textContent = "";
    }

invalidInputTest();
validInputTest();
