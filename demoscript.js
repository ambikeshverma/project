var userType;
//for taking user type
function takingUserType(){

    userType = document.getElementById("userType").value; 
    if(userType=="Teacher")
        window.location.href="teacher.html"; 
    else 
         window.location.href="student.html";
}
document.getElementById('Enter').addEventListener('click', takingUserType);


//for printing Welcome message
function welcome(){
    alert("Welcome " +userType);
}
document.getElementById('Enter').addEventListener('click', welcome);



//this whole function only bind all the funtion of this program for runing on single click if condtion is true
function teacherF(){
var day;
var teacher;
var date = new Date();
var h = date.getHours(); // 0 - 23  
var m = date.getMinutes(); // 0 - 59
if(h == 0){
    h = 12;
}

if(h > 12){
    h = h - 12;
}
 
   function main(){
    
    day =document.getElementById("day").value;
    teacher=document.getElementById("faculty").value;
    //beepForFiveSeconds();
    switch(day){
        case "Monday": if(teacher=="Sweety"){
            if (h==09)
                document.getElementById("clock").innerText= "Software Engineering | CS31 | Room no.-520";
           else if (h==10)
               document.getElementById("clock").innerText="No Lecture | Next lecture is at 11'o clock"; 
           else if (h==11)
               document.getElementById("clock").innerText="Software Engineering | CS30 | Room no.-520";
           else if (h==12)
                document.getElementById("clock").innerText="Software Engineering | CS32 | Room no.-606";
           else if (h==01)
               document.getElementById("clock").innerText="Its Lunch Break";
           else if (h==02)
               document.getElementById("clock").innerText="Software Engineering | CS33 | Room no.-606";
           else if (h==03)
            document.getElementById("clock").innerText="Now No Lecture today";
           else if (h==04)
            document.getElementById("clock").innerText="Now No Lecture today";
           else if (h==05)
            document.getElementById("clock").innerText="Now No Lecture today";
        }
                
                       else 
                       document.getElementById("clock").innerText= "Invalid";
                    break;
        case "Tuesday" : if(teacher== "Sweety"){
            if (h==09)
                document.getElementById("clock").innerText= "Software Engineering | CS33 | Room no.-606";
           else if (h==10)
               document.getElementById("clock").innerText="Software Engineering | CS32 | Room no.-605"; 
           else if (h==11)
               document.getElementById("clock").innerText="No Lecture | Upto 2'o clock";
           else if (h==12)
                document.getElementById("clock").innerText="No Lecture | Upto 2'o clock";
           else if (h==01)
               document.getElementById("clock").innerText="Its Lunch Break";
           else if (h==02)
               document.getElementById("clock").innerText="Software Engineering | CS30 | Room no.-520";
           else if (h==03)
            document.getElementById("clock").innerText="Now No Lecture today";
           else if (h==04)
            document.getElementById("clock").innerText="Now No Lecture today";
           else if (h==05)
            document.getElementById("clock").innerText="End of the Day";
        }
                         
                         else 
                         document.getElementById("clock").innerText= "Invalid";
                    break;
         case "Wednesday" : if(teacher== "Sweety"){
                        if (h==09)
                            document.getElementById("clock").innerText= "No Lecture | Upto 11'o clock";
                       else if (h==10)
                           document.getElementById("clock").innerText="No Lecture | Upto 11'o clock"; 
                       else if (h==11)
                           document.getElementById("clock").innerText="Software Engineering | CS32 | Room no.-605";
                       else if (h==12)
                            document.getElementById("clock").innerText="No Lecture | Upto 2'o clock";
                       else if (h==01)
                           document.getElementById("clock").innerText="Its Lunch Break";
                       else if (h==02)
                           document.getElementById("clock").innerText="Software Engineering | CS33 | Room no.-606";
                       else if (h==03)
                        document.getElementById("clock").innerText="No Lecture | Next lecture is at 4'o clock";
                       else if (h==04)
                        document.getElementById("clock").innerText="Software Engineering | CS31 | Room no.-604";
                       else if (h==05)
                        document.getElementById("clock").innerText="End of the Day";
                    }
                                     
                                     else 
                                     document.getElementById("clock").innerText= "Invalid";
                                break;
         case "Thursday" : if(teacher== "Sweety"){
                                    if (h==09)
                                        document.getElementById("clock").innerText= "Software Engineering | CS30 | Room no.-502";
                                   else if (h==10)
                                       document.getElementById("clock").innerText="No Lecture | Upto 2'o clock"; 
                                   else if (h==11)
                                       document.getElementById("clock").innerText="No Lecture | Upto 2'o clock";
                                   else if (h==12)
                                        document.getElementById("clock").innerText="No Lecture | Upto 2'o clock";
                                   else if (h==01)
                                       document.getElementById("clock").innerText="Its Lunch Break";
                                   else if (h==02)
                                       document.getElementById("clock").innerText="Software Engineering | CS32 | Room no.-605";
                                   else if (h==03)
                                    document.getElementById("clock").innerText="No Lecture | Next lecture is at 4'o clock";
                                   else if (h==04)
                                    document.getElementById("clock").innerText="Software Engineering | CS31 | Room no.-604";
                                   else if (h==05)
                                    document.getElementById("clock").innerText="End of the Day";
                                }
                                else 
                                document.getElementById("clock").innerText= "Invalid";
                           break;
         case "Friday" : if(teacher== "Sweety"){
                            if (h==09)
                                document.getElementById("clock").innerText= "Software Engineering | CS31 | Room no.-604";
                           else if (h==10)
                               document.getElementById("clock").innerText="No Lecture | Upto 11'o clock"; 
                           else if (h==11)
                               document.getElementById("clock").innerText="Software Engineering | CS33 | Room no.-605";
                           else if (h==12)
                                document.getElementById("clock").innerText="No Lecture | Upto 3'o clock";
                           else if (h==01)
                               document.getElementById("clock").innerText="Its Lunch Break";
                           else if (h==02)
                               document.getElementById("clock").innerText="No Lecture | Upto 3'o clock";
                           else if (h==03)
                            document.getElementById("clock").innerText="Software Engineering | CS30 | Room no.-502";
                           else if (h==04)
                            document.getElementById("clock").innerText="No Lecture";
                           else if (h==05)
                            document.getElementById("clock").innerText="End of the Day";
                        }
                        else 
                        document.getElementById("clock").innerText= "Invalid";
                   break;

       }

}
document.getElementById('submitButton').addEventListener('click', main);


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
   
    if(h == 0){
        h = 12;
    }
  
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    if(m==00){
        
        switch(day){
            case "Monday": if(teacher=="Sweety"){
                if (h==09)
                    document.getElementById("clock").innerText= "Software Engineering | CS31 | Room no.-520";
               else if (h==10)
                   document.getElementById("clock").innerText="No Lecture | Next lecture is at 11'o clock"; 
               else if (h==11)
                   document.getElementById("clock").innerText="Software Engineering | CS30 | Room no.-520";
               else if (h==12)
                    document.getElementById("clock").innerText="Software Engineering | CS32 | Room no.-606";
               else if (h==01)
                   document.getElementById("clock").innerText="Its Lunch Break";
               else if (h==02)
                   document.getElementById("clock").innerText="Software Engineering | CS33 | Room no.-606";
               else if (h==03)
                document.getElementById("clock").innerText="Now No Lecture today";
               else if (h==04)
                document.getElementById("clock").innerText="Now No Lecture today";
               else if (h==05)
                document.getElementById("clock").innerText="Now No Lecture today";
            }
                    
                           else 
                           document.getElementById("clock").innerText= "Invalid";
                        break;
            case "Tuesday" : if(teacher== "Sweety"){
                if (h==09)
                    document.getElementById("clock").innerText= "Software Engineering | CS33 | Room no.-606";
               else if (h==10)
                   document.getElementById("clock").innerText="Software Engineering | CS32 | Room no.-605"; 
               else if (h==11)
                   document.getElementById("clock").innerText="No Lecture | Upto 2'o clock";
               else if (h==12)
                    document.getElementById("clock").innerText="No Lecture | Upto 2'o clock";
               else if (h==01)
                   document.getElementById("clock").innerText="Its Lunch Break";
               else if (h==02)
                   document.getElementById("clock").innerText="Software Engineering | CS30 | Room no.-520";
               else if (h==03)
                document.getElementById("clock").innerText="Now No Lecture today";
               else if (h==04)
                document.getElementById("clock").innerText="Now No Lecture today";
               else if (h==05)
                document.getElementById("clock").innerText="End of the Day";
            }
                             
                             else 
                             document.getElementById("clock").innerText= "Invalid";
                        break;
             case "Wednesday" : if(teacher== "Sweety"){
                            if (h==09)
                                document.getElementById("clock").innerText= "No Lecture | Upto 11'o clock";
                           else if (h==10)
                               document.getElementById("clock").innerText="No Lecture | Upto 11'o clock"; 
                           else if (h==11)
                               document.getElementById("clock").innerText="Software Engineering | CS32 | Room no.-605";
                           else if (h==12)
                                document.getElementById("clock").innerText="No Lecture | Upto 2'o clock";
                           else if (h==01)
                               document.getElementById("clock").innerText="Its Lunch Break";
                           else if (h==02)
                               document.getElementById("clock").innerText="Software Engineering | CS33 | Room no.-606";
                           else if (h==03)
                            document.getElementById("clock").innerText="No Lecture | Next lecture is at 4'o clock";
                           else if (h==04)
                            document.getElementById("clock").innerText="Software Engineering | CS31 | Room no.-604";
                           else if (h==05)
                            document.getElementById("clock").innerText="End of the Day";
                        }
                                         
                                         else 
                                         document.getElementById("clock").innerText= "Invalid";
                                    break;
             case "Thursday" : if(teacher== "Sweety"){
                                        if (h==09)
                                            document.getElementById("clock").innerText= "Software Engineering | CS30 | Room no.-502";
                                       else if (h==10)
                                           document.getElementById("clock").innerText="No Lecture | Upto 2'o clock"; 
                                       else if (h==11)
                                           document.getElementById("clock").innerText="No Lecture | Upto 2'o clock";
                                       else if (h==12)
                                            document.getElementById("clock").innerText="No Lecture | Upto 2'o clock";
                                       else if (h==01)
                                           document.getElementById("clock").innerText="Its Lunch Break";
                                       else if (h==02)
                                           document.getElementById("clock").innerText="Software Engineering | CS32 | Room no.-605";
                                       else if (h==03)
                                        document.getElementById("clock").innerText="No Lecture | Next lecture is at 4'o clock";
                                       else if (h==04)
                                        document.getElementById("clock").innerText="Software Engineering | CS31 | Room no.-604";
                                       else if (h==05)
                                        document.getElementById("clock").innerText="End of the Day";
                                    }
                                    else 
                                    document.getElementById("clock").innerText= "Invalid";
                               break;
             case "Friday" : if(teacher== "Sweety"){
                                if (h==09)
                                    document.getElementById("clock").innerText= "Software Engineering | CS31 | Room no.-604";
                               else if (h==10)
                                   document.getElementById("clock").innerText="No Lecture | Upto 11'o clock"; 
                               else if (h==11)
                                   document.getElementById("clock").innerText="Software Engineering | CS33 | Room no.-605";
                               else if (h==12)
                                    document.getElementById("clock").innerText="No Lecture | Upto 3'o clock";
                               else if (h==01)
                                   document.getElementById("clock").innerText="Its Lunch Break";
                               else if (h==02)
                                   document.getElementById("clock").innerText="No Lecture | Upto 3'o clock";
                               else if (h==03)
                                document.getElementById("clock").innerText="Software Engineering | CS30 | Room no.-502";
                               else if (h==04)
                                document.getElementById("clock").innerText="No Lecture";
                               else if (h==05)
                                document.getElementById("clock").innerText="End of the Day";
                            }
                            else 
                            document.getElementById("clock").innerText= "Invalid";
                       break;
    
           }
}

 
  
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
  
   // var time = h + ":" + m + ":" + s + " " + session;
   // document.getElementById("output").innerText = time;
    document.getElementById("Hour").innerText = h;
    document.getElementById("Min").innerText = m;
    document.getElementById("Sec").innerText = s;
    document.getElementById("session").innerText = session;
    //document.getElementById("output").textContent = time;
  
    setTimeout(showTime, 1000);

}
  showTime();



// Audio context for generating sound
let audioContext;
let oscillator;
let beepTimeout;

// Function to play a beep sound for 5 seconds
function playBeep() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // Type of sound wave
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Frequency in Hz
    oscillator.connect(audioContext.destination);
    oscillator.start();

    // Stop the beep after 5 seconds
    beepTimeout = setTimeout(() => {
        oscillator.stop();
    }, 5000);
}

// Function to check the current time and play a beep at the start of each hour
function checkTime() {
    const now = new Date();
    const secondsUntilNextHour = (60 - now.getMinutes()) * 60 - now.getSeconds();
    setTimeout(() => {
        playBeep();
        setInterval(playBeep, 3600000); // Set up to beep every hour
    }, secondsUntilNextHour * 1000);
}

// Start checking the time
checkTime();



}



/*function Check(){
   var day =document.getElementById("day").value;
    var teacher=document.getElementById("faculty").value;
    document.getElementById("clock").innerText= " CS31 | Room no.-520";
    //beepForFiveSeconds();
    switch(day){
        case "Monday": if(teacher=="Sweety"){
               document.getElementById("first").innerText= " CS31 | Room no.-520";
               document.getElementById("second").innerText="No Lecture "; 
               document.getElementById("third").innerText=" CS30 | Room no.-520";
               document.getElementById("fourth").innerText=" CS32 | Room no.-606";
               document.getElementById("six").innerText=" CS33 | Room no.-606";
               document.getElementById("seventh").innerText="Now No Lecture today";
               document.getElementById("eight").innerText="Now No Lecture today";
               
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


document.getElementById('Yes').addEventListener('click', Check);*/






