//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let newArr = touristSpots.sort((a, b)=>{
    if(a.includes("The")){
        let index = a.indexOf("The");
        let newStr = a.slice(index + 1);
        return (newStr > b) ? 1 : -1; 
    }else if(b.includes("The")){
        let index = b.indexOf("The");
        let newStr = b.slice(index + 1);
        return (a > newStr) ? 1 : -1; 
    }else{
        return (a > b) ? 1 : -1;
    }
});
console.log(newArr);
let ul = document.querySelector("ul");
newArr.forEach((element)=>{
    let li = document.createElement("li");
    li.textContent = element;
    ul.append(li);
});
