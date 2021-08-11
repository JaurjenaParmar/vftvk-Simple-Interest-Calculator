function calculate()
 {
     var Amount = document.getElementById("Amount").value;
 
     if(Amount == "" ||  Amount <= 0)
     {
         alert("Enter a positive number"); //displays an alert box if nothing or value less than or equal to 0 is entered
         document.getElementById("Amount").focus(); // returns focus back to amount input column when user clicked OK while alert box displayed
         return;
     }
 
     var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
     var interest = Amount * years * rate / 100;
 
     var dateNow = new Date(); // assigns present date to variable "dateNow"
     var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years); //parseInt() function is used to convert string to integer
     
     var resultDisplay = document.getElementById("result");
     resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" 
        + Amount + "</span>"  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + 
            "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
 }
 
 function SlidersValue() // for updating sliders value
 {
     var slider = document.getElementById("rate");
     var output = document.getElementById("rate_display");
     output.innerHTML = slider.value+"%"; // Default slider value changes when you move the slider


     // updates slider value with the current value when you drag the slider
     slider.oninput = function() 
     {
         output.innerHTML = this.value+"%";
     }  
 }     