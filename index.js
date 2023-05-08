/*First 50 unit RS.0.75
next 100 units Rs 1.00 unit
next 100 units Rs 1.30 unit
above 250 units Rs 1.50 unit
*/


function EBbill(){
    let units = Number(document.getElementById('input').value);
    console.log(units)
    let Result = document.querySelector('#result');
    if (units<=50)
        Result.innerHTML= "Your bill amount is  Rs." +  (units * 0.75);
    else if (units>50 && units<=150)
        Result.innerHTML= "Your bill amount is  Rs." +  (((units - 50)*1)+ 37.5);
    else if (units>150 && units <=250)
        Result.innerHTML= "Your bill amount is  Rs." +  (((units - 150)*1.30)+ 137.5);
    else
        Result.innerHTML= "Your bill amount is  Rs." +  (((units - 250)*1.50)+ 267.5);

}