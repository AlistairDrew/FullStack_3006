function changeColour() {
    var el=document.getElementsByClassName('light')[0];
   
    
   
       if (rgb2hex(el.style.backgroundColor) == "#00ffff") 
       {
         el.style.backgroundColor = "#ffff00";
       }
       else if (rgb2hex(el.style.backgroundColor) == "#ffff00") {
         el.style.backgroundColor = "#ff00ff ";
       } 
       else if (rgb2hex(el.style.backgroundColor) == "#ff00ff") {
        el.style.backgroundColor = "#00ffff";
      }
      else {
        el.style.backgroundColor = "#00ffff";
      }
   }