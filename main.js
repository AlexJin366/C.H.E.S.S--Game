var countClick = 0;
var tempLocation = "0.0";
var tempLocation2 = "0.0";
var tempid = "0.0"
function Select(id){
    var defaultP = ["6","6.1","6.2","6.3","6.4","6.5","6.6","6.7","1","1.1","1.2","1.3","1.4","1.5","1.6","1.7"];
    var piece = document.getElementById(id).getAttribute('src');
    if (piece == "Pices/Black/bP.png" || "Pices/White/wP.png"){
        if (defaultP.includes(id)){
            document.getElementsByClassName("")
            
            var location = parseFloat(id);
            var location2 = parseFloat(id);

            piece == "Pices/Black/bP.png" ? location += 2 : location-= 2;
            piece == "Pices/Black/bP.png" ? location2 += 1 : location2 -= 1;

            var newLocation = location.toString();
            var newLocation2 = location2.toString();

            if(countClick!=0){
                
                document.getElementById(tempLocation2).parentElement.classList.remove("SelectSection");
                document.getElementById(tempLocation).parentElement.classList.remove("SelectSection");
                document.getElementById(newLocation).parentElement.classList.add("SelectSection");
                document.getElementById(newLocation2).parentElement.classList.add("SelectSection");
                tempLocation = newLocation;
                tempLocation2 = newLocation2;
                

            }else{

                document.getElementById(newLocation).parentElement.classList.add("SelectSection");
                document.getElementById(newLocation2).parentElement.classList.add("SelectSection");
                tempLocation = newLocation;
                tempLocation2 = newLocation2;
            }
            countClick++;
            
            
        }
    }
}

