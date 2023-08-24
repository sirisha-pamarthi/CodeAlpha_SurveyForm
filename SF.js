var form1 = document.getElementById("form1");
        var form2 = document.getElementById("form2");
        var form3 = document.getElementById("form3");

        var Next1 = document.getElementById("Next1");
        var Next2 = document.getElementById("Next2");
        var Prev1 = document.getElementById("Prev1");
        var Prev2 = document.getElementById("Prev2");


        Next1.onclick = function(){
        form1.style.left = "-450px";
        form2.style.left = "40px";
        }
        Prev1.onclick = function(){
        form1.style.left = "40px";
        form2.style.left = "450px";
        }
        Next2.onclick = function(){
        form2.style.left = "-450px";
        form3.style.left = "40px";
        }
        Prev2.onclick = function(){
        form2.style.left = "40px";
        form3.style.left = "450px";
        }
        submit.onclick = function(){
                alert("survey submitted successfully");
        }
