


function student(){
    var day =document.getElementById("day").value;
    var section=document.getElementById("section").value;
  
    switch (day){
    case "Monday": if(section=="CS32"){
         document.getElementById("first").innerText = "COMPUTER GRAPHICS LAB";
         document.getElementById("second").innerText = "COMPUTER GRAPHICS LAB";
         document.getElementById("third").innerText = "AUTOMETA";
         document.getElementById("fourth").innerText = "SOFTWARE ENGINEERING";
         document.getElementById("six").innerText = "MICROPROCESSOR & INTERFACING";
         document.getElementById("seventh").innerText = "COMPUTER NETWORK";
         document.getElementById("eigth").innerText = "EME";
     }
     break;
    case "Tuesday": if(section=="CS32"){
        document.getElementById("first").innerText = "COMPUTER GRAPHICS";
        document.getElementById("second").innerText = "SOFTWARE ENGINEERING";
        document.getElementById("third").innerText = "LIBRARY";
        document.getElementById("fourth").innerText = "EME";
        document.getElementById("six").innerText = "AUTOMETA THEORY";
        document.getElementById("seventh").innerText = "COMPUTER NETWORK";
        document.getElementById("eigth").innerText = "COMPUTER GRAPHICS";
    }
    break;
    case "Wednesday": if(section=="CS32"){
        document.getElementById("first").innerText = "AUTOMETA THEORY";
        document.getElementById("second").innerText = "COMPUTER GRAPHICS";
        document.getElementById("third").innerText = "SOFTWARE ENGINEERING";
        document.getElementById("fourth").innerText = "EME";
        document.getElementById("six").innerText = "MICROPROCESSOR & INT.";
        document.getElementById("seventh").innerText = "AUTOMETA THEORY";
        document.getElementById("eigth").innerText = "LIBRARY";
    }
    break;
    case "Thursday": if(section=="CS32"){
        document.getElementById("first").innerText = "MICROPROCESSOR & INT. LAB";
        document.getElementById("second").innerText = "MICROPROCESSOR & INT. LAB";
        document.getElementById("third").innerText = "LIBRARY";
        document.getElementById("fourth").innerText = "MICROPROCESSOR & INT.";
        document.getElementById("six").innerText = "SOFTWARE ENGINEERING";
        document.getElementById("seventh").innerText = "COMPUTER NETWORK";
        document.getElementById("eigth").innerText = "COMPUTER GRAPHICS";
    }
    break;
    case "Friday": if(section=="CS32"){
        document.getElementById("first").innerText = "MICROPROCESSOR & INT.";
        document.getElementById("second").innerText = "COMPUTER GRAPHICS";
        document.getElementById("third").innerText = "COMPUTER NETWORK LAB";
        document.getElementById("fourth").innerText = "COMPUTER NETWORK LAB";
        document.getElementById("six").innerText = "COMPUTER NETWORK";
        document.getElementById("seventh").innerText = "MICROPROCESSOR & INT.";
        document.getElementById("eigth").innerText = "AUTOMETA THEORY";
    }
    break;
    }
 }
 document.getElementById('Yes').addEventListener('click', student);
 

 

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

function currentClass(){
    var day =document.getElementById("day").value;
    var section=document.getElementById("section").value;
    var date = new Date();
    var h = date.getHours();// 0 - 23 
    if(h > 12)
        h = h - 12;
    h = (h < 10) ? "0" + h : h;
 
    switch (day){
        case "Monday": if(section=="CS32"){
            if(h==09)
             document.getElementById("clock").innerText = "COMPUTER GRAPHICS LAB";
            else if(h==10)
                document.getElementById("clock").innerText = "COMPUTER GRAPHICS LAB";
            else if(h==11)
                document.getElementById("clock").innerText = "AUTOMETA";
            else if(h==12)
                document.getElementById("clock").innerText = "SOFTWARE ENGINEERING";
            else if(h==01)
                document.getElementById("clock").innerText = "LUNCH TIME";
            else if(h==02)
                document.getElementById("clock").innerText = "MICROPROCESSOR & INTERFACING";
            else if(h==03)
                document.getElementById("clock").innerText = "COMPUTER NETWORK";
            else if(h==04)
             document.getElementById("clock").innerText = "EME";
            else 
            document.getElementById("clock").innerText = "NO LECTURE";

           }
           break;
        case "Tuesday": if(section=="CS32"){
              if(h==9)
                 document.getElementById("clock").innerText = "COMPUTER GRAPHICS";
              else if(h==10)
                 document.getElementById("clock").innerText = "SOFTWARE ENGINEERING";
              else if(h==11)
                  document.getElementById("clock").innerText = "LIBRARY";
              else if(h==12)
                  document.getElementById("clock").innerText = "EME";
              else if(h==01)
                  document.getElementById("clock").innerText = "LUNCH TIME";
              else if(h==02)
                  document.getElementById("clock").innerText = "AUTOMETA THEORY";
              else if(h==03)
                  document.getElementById("clock").innerText = "COMPUTER NETWORK";
              else if(h==04)
                 document.getElementById("clock").innerText = "COMPUTER GRAPHICS";
              else 
                 document.getElementById("clock").innerText = "NO LECTURE";
              }
               break;
        case "Wednesday": if(section=="CS32"){
              if(h==9)
                document.getElementById("clock").innerText = "AUTOMETA THEORY";
              else if(h==10)
                document.getElementById("clock").innerText = "COMPUTER GRAPHICS";
              else if(h==11)
                document.getElementById("clock").innerText = "SOFTWARE ENGINEERING";
              else if(h==12)
                document.getElementById("clock").innerText = "EME";
              else if(h==01)
                document.getElementById("clock").innerText = "LUNCH TIME";
              else if(h==02)
                document.getElementById("clock").innerText = "MICROPROCESSOR & INT.";
              else if(h==03)
                document.getElementById("clock").innerText = "AUTOMETA THEORY";
             else if(h==04)
                document.getElementById("clock").innerText = "LIBRARY";
             else 
                document.getElementById("clock").innerText = "NO LECTURE";
             }
             break;
        case "Thursday": if(section=="CS32"){
             if(h==9)
                document.getElementById("clock").innerText = "MICROPROCESSOR & INT. LAB";
             else if(h==10)
                document.getElementById("clock").innerText = "MICROPROCESSOR & INT. LAB";
             else if(h==11)
                document.getElementById("clock").innerText = "LIBRARY";
             else if(h==12)
                document.getElementById("clock").innerText = "MICROPROCESSOR & INT.";
             else if(h==01)
                document.getElementById("clock").innerText = "LUNCH TIME";
             else if(h==02)
                document.getElementById("clock").innerText = "SOFTWARE ENGINEERING";
             else if(h==03)
                document.getElementById("clock").innerText = "COMPUTER NETWORK";
             else if(h==04)
                document.getElementById("clock").innerText = "COMPUTER GRAPHICS";
             else 
                document.getElementById("clock").innerText = "NO LECTURE";
             }
              break;
        case "Friday": if(section=="CS32"){
            if(h==9)
               document.getElementById("clock").innerText = "MICROPROCESSOR & INT.";
            else if(h==10)
               document.getElementById("clock").innerText = "COMPUTER GRAPHICS";
            else if(h==11)
               document.getElementById("clock").innerText = "COMPUTER NETWORK LAB";
            else if(h==12)
                document.getElementById("clock").innerText = "COMPUTER NETWORK LAB";
            else if(h==01)
                document.getElementById("clock").innerText = "LUNCH TIME";
            else if(h==02)
                document.getElementById("clock").innerText = "COMPUTER NETWORK";
            else if(h==03)
                document.getElementById("clock").innerText = "MICROPROCESSOR & INT.";
            else if(h==04)
                document.getElementById("clock").innerText = "AUTOMETA THEORY";
           else 
                document.getElementById("clock").innerText = "NO LECTURE";
            }
           break;
           }
}

document.getElementById('show').addEventListener('click', currentClass);