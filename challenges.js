function doubleNumber(num=0){
    let total = num * 2;
    console.log(num *2);
    return total;
}

doubleNumber(4); // 8
doubleNumber(10); // 20
doubleNumber();// 0

function combineNames(fname="Unknown",lname="Unknown"){
    return fname + lname;
}

combineNames("Alice", "Johnson");   // Should print: Alice Johnson
combineNames("Alice");              // Should print: Alice Unknown
combineNames();                     // Should print: Unknown Unknown

function convertToSeconds(min){
    return min *60;
}

convertToSeconds(5);
convertToSeconds(10);


function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather");
    p.classList.remove("hot","cold","normal");
    
    if(tmp<15){
        p.classList.add("cold");
        outfit="Jacket"; 
    }else if(tmp<25){
        outfit="sweater";
        p.classList.add("normal");
    }else{
        outfit="t-shirt"; 
        p.classList.add("hot");
    }

    p.innerHTML="You should wear : " + outfit;
}