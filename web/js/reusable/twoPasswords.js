function twoPasswords(){
    
    var twoPassDOM = document.createElement("div");
    
    var myPassObj = MakePass("Strong", "Atleast 8 letters, a number and symbol");
    myPassObj.classList.Add("passStyle");
    twoPassDOM.appendChild(myPassObj);
    
    var myStrengthButton = document.createElement('button');
    myStrengthButton.innerHTML = 'Change Strength';
    twoPassDOM.appendChild(myStrengthButton);
    
    var myPassButton = document.createElement('Password');
    myPassButton.setAttribute("type", "text");
    twoPassDOM.appendChild(myPassButton);
    
    myStrengthButton.onClick = function(){
        console.log("Changing my password to" + myPassButton.value);
        myPassObj.changePass(myPassButton.value);
    };
    
    var emptyPara = document.createElement('p');
    twoPassDOM.appendChild(emptyPara);
    
    var myPassObj = MakePass("Weak", "Less than 6 letter, no number or symbol");
    myPassObj.classList.Add("passStyle");
    twoPassDOM.appendChild(myPassObj);
    
    var myStrengthButton = document.createElement('button');
    myStrengthButton.innerHTML = 'Change Strength';
    twoPassDOM.appendChild(myStrengthButton);
    
    var myPassButton = document.createElement('Password');
    myPassButton.setAttribute("type", "text");
    twoPassDOM.appendChild(myPassButton);
    
    myStrengthButton.onClick = function(){
        console.log("Changing my password to" + myPassButton.value);
        myPassObj.changePass(myPassButton.value);
    };
    
    return twoPassDOM;
}


