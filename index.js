function handleclick() {
    alert("I Got Clicked");
  }
  
//   const buttons = document.querySelectorAll("button"); // get all buttons
//   buttons.forEach(function(button) { // loop through each button
//     button.addEventListener("click", handleclick); // add event listener to each button
//   });
  

//   function handleclick() {
//     alert("I Got Clicked");
//   }
  
//   const buttons = document.querySelectorAll("button");
//   for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener("click", handleclick);
    //   }
  // function playaudio()
  // {
  //   var audio =new Audio("sounds/tom-1.mp3");
  //   audio.play();
  // }
  var Numberofdrumbuttons = document.querySelectorAll(".drum").length;
  for(var i=0;i<Numberofdrumbuttons;i++)
  {
    //    console.log("this");
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
      var ButtonPress = this.innerHTML;// button k jo andar element hai
    // console.log(ButtonPress);
    makesound(ButtonPress);
    ButtonAniamtion(ButtonPress);
    
         
  });
}
// when keyboard button are pressed
document.addEventListener("keydown",function(event)
{
  makesound(event.key);
  ButtonAniamtion(event.key);
});

function makesound(key)
{
         
         switch(key)
         {
           case "w":
             var tom1 =new Audio("sounds/crash.mp3");
         tom1.play();
             break;
     
             case "a":
             var tom2=new Audio("sounds/kick-bass.mp3");
             tom2.play();
             break;
     
             case "s":
             var tom3=new Audio("sounds/snare.mp3");
             tom3.play();
             break;
     
             case "d":
             var tom4=new Audio("sounds/tom-1.mp3");
             tom4.play();
             break;
     
             case "j":
             var tom5=new Audio("sounds/tom-2.mp3");
             tom5.play();
             break;
     
     
             case "k":
             var tom6=new Audio("sounds/tom-3.mp3");
             tom6.play();
             break;
     
             case "l":
             var tom7=new Audio("sounds/tom-4.mp3");
             tom7.play();
             break;
     
            
             default:
               console.log(ButtonPress);
         }
         
        
        }

        function ButtonAniamtion(currentkey)
        {
          var activebutton = document.querySelector("." + currentkey);
          // console.log("active button : "+ activebutton);
          activebutton.classList.add("pressed");
          setTimeout(function()
          {
            activebutton.classList.remove("pressed")},100);
          }
        
    
  


