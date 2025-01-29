

function groceryBill(){
     let groceryOne = parseFloat(document.getElementById("groceryOne").value);
     let groceryTwo = parseFloat(document.getElementById("groceryTwo").value);
     let groceryThree = parseFloat(document.getElementById("groceryThree").value);
     let groceryTotal;
     
     groceryTotal = (groceryOne + groceryTwo + groceryThree)

     document.getElementById('result').innerText = `The total amout is $${groceryTotal}`;
     
}