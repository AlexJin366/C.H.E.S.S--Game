function Select(id){
    var defaultP = ["6","6.1","6.2","6.3","6.4","6.5","6.6","6.7","1","1.1","1.2","1.3","1.4","1.5","1.6","1.7"];
    var piece = document.getElementById(id).getAttribute('src');
    if (piece == "Pices/Black/bP.png" || "Pices/White/wP.png"){
        if (defaultP.includes(id)){
            var location = parseFloat(id);
            location += 2;
            var newLocation = location.toString();
            console.log(newLocation);
            document.getElementById(newLocation).parentElement.style.background = "#bfbc9f";  
        }
        
    }
}