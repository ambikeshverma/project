function Check(){
    var day =document.getElementById("day").value;
     var teacher=document.getElementById("faculty").value;
     //document.getElementById("clock").innerText= " CS31 | Room no.-520";
     //beepForFiveSeconds();
     switch(day){
         case "Monday": if(teacher=="Sweety"){
                document.getElementById("first").innerText= " CS31 | Room no.-520";
                document.getElementById("second").innerText="No Lecture "; 
                document.getElementById("third").innerText=" CS30 | Room no.-520";
                document.getElementById("fourth").innerText=" CS32 | Room no.-606";
                document.getElementById("six").innerText=" CS33 | Room no.-606";
                document.getElementById("seventh").innerText="Now No Lecture today";
                document.getElementById("eigth").innerText="Now No Lecture today";
                
         }
                 else 
                        document.getElementById("clock").innerText= "Invalid";
                     break;
 
         case "Tuesday" : if(teacher== "Sweety"){
                document.getElementById("first").innerText= " CS33 | Room no.-606";
                document.getElementById("second").innerText=" CS32 | Room no.-605"; 
                document.getElementById("third").innerText="No Lecture";
                document.getElementById("fourth").innerText="No Lecture ";
                document.getElementById("six").innerText=" CS30 | Room no.-520";
                document.getElementById("seventh").innerText="No lecture";
                document.getElementById("eigth").innerText="No Lecture";
         }
             else 
                document.getElementById("clock").innerText= "Invalid";
                     break;
 
          case "Wednesday" : if(teacher== "Sweety"){
                             document.getElementById("first").innerText= "No Lecture ";
                             document.getElementById("second").innerText="No Lecture "; 
                             document.getElementById("third").innerText=" CS32 | Room no.-605";
                             document.getElementById("fourth").innerText="No Lecture ";
                             document.getElementById("six").innerText=" CS33 | Room no.-606";
                             document.getElementById("seventh").innerText="No Lecture ";
                             document.getElementById("eigth").innerText="CS31 | Room no.-604";
                             
                     }
                                      
                                      else 
                                      document.getElementById("clock").innerText= "Invalid";
                                 break;
          case "Thursday" : if(teacher== "Sweety"){
 
                          document.getElementById("first").innerText= "CS30 | Room no.-502";
                          document.getElementById("second").innerText="No Lecture"; 
                          document.getElementById("third").innerText="No Lecture";
                          document.getElementById("fourth").innerText="No Lecture";
                          document.getElementById("six").innerText="CS32 | Room no.-605";
                          document.getElementById("seventh").innerText="No Lecture "; 
                          document.getElementById("eigth").innerText=" CS31 | Room no.-604";
                          
                                 }
                                 else 
                                 document.getElementById("clock").innerText= "Invalid";
                            break;
          case "Friday" : if(teacher== "Sweety"){
                                 document.getElementById("first").innerText= "CS31 | Room no.-604";
                               document.getElementById("second").innerText="No Lecture"; 
                               document.getElementById("third").innerText=" CS33 | Room no.-605";
                               document.getElementById("fourth").innerText="No Lecture";   
                              document.getElementById("six").innerText="No Lecture ";
                             document.getElementById("seventh").innerText=" CS30 | Room no.-502";
                             document.getElementById("eigth").innerText="No Lecture";
                         }
                         else 
                         document.getElementById("clock").innerText= "Invalid";
                    break;
 
        }
 }
 
 
 document.getElementById('Yes').addEventListener('click', Check);
 
 function home(){
       
           window.location.href="index.html";   
   }