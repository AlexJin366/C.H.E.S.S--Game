var countClick = 0;
var tempLocation = "0.0";
function Select(id){
    var defaultP = ["6","6.1","6.2","6.3","6.4","6.5","6.6","6.7","1","1.1","1.2","1.3","1.4","1.5","1.6","1.7"];
    var piece = document.getElementById(id).getAttribute('src');
    if (piece == "Pices/Black/bP.png" || "Pices/White/wP.png"){
        if (defaultP.includes(id)){
            document.getElementsByClassName("")
            
            var location = parseFloat(id);

            piece == "Pices/Black/bP.png" ? location += 2 : location-= 2;

            var newLocation = location.toString();
            document.getElementById(id)
            console.log("current: " + newLocation);
            console.log("pre: "+ tempLocation);
            
            if(countClick!=0){
                console.log("here")
                var color = getComputedStyle(document.getElementById(tempLocation).parentElement).getPropertyValue("background-color");
                document.getElementById(tempLocation).parentElement.classList.remove("SelectSection");
                document.getElementById(newLocation).parentElement.classList.add("SelectSection");
                tempLocation = newLocation;
            }else{
                document.getElementById(newLocation).parentElement.classList.add("SelectSection");
                tempLocation = newLocation;
            }
            countClick++;
            
            
        }
    }
}