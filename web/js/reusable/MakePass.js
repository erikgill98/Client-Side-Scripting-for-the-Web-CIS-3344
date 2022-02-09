function MakePass(params) {

    var theEmail = params.theEmail;
    var numPass = params.numPass;
    var style = params.style;
    var theImg = params.theImg;
    
    var passObj = document.createElement("div");
    passObj.classList.add(style);
    
    passObj.theProject = params.theProject;
    
    var passInfo = document.createElement("div");
    passObj.appendChild(passInfo);

    function display() {
        // make the current properties visible on the page
        passInfo.innerHTML = "Users Email: " + theEmail + "<br/> Number of Password: " +
                numPass + "<br/> Silly Me: " + passObj.theProject;
    }
    ;

//email button

    passObj.setUserEmail = function (newEmail) {
        theEmail = newEmail;
        console.log(theEmail);
        display();
    };


    var emailButton = document.createElement("button");
    emailButton.innerHTML = "Change the email to: ";
    passObj.appendChild(emailButton);

    var newEmailInput = document.createElement("input");
    passObj.appendChild(newEmailInput);

    emailButton.onclick = function () {
        passObj.setUserEmail(newEmailInput.value);
    };

    passObj.appendChild(document.createElement("br")); // new line

//password button    
    passObj.ChangeNumPass = function (numNewPass) {
        numPass = numNewPass;
        display(); // show updated price on the page
    };

    var numPassButton = document.createElement("button");
    numPassButton.innerHTML = "Change the number of passwords to ";
    passObj.appendChild(numPassButton);

    var numPassInput = document.createElement("input");
    passObj.appendChild(numPassInput);

    numPassButton.onclick = function () {
        passObj.ChangeNumPass(numPassInput.value);
    };

    passObj.appendChild(document.createElement("br"));

    //project fix 
    passObj.projectFix = function (newProjFix) {
        passObj.theProject = newProjFix;
        display(); // show updated price on the page
    };

    var buttonThree = document.createElement("button");
    buttonThree.innerHTML = "Why did I wait so long to fix this?  ";
    passObj.appendChild(buttonThree);

    var projectInput = document.createElement("input");
    passObj.appendChild(projectInput);

    buttonThree.onclick = function () {
        passObj.projectFix(projectInput.value);
    };

    passObj.appendChild(document.createElement("br"));

    // creating new div with img
    var divImg = document.createElement("img");
    divImg.src = theImg;
    passObj.appendChild(divImg);

    display(); // show initial properties on the page 
    return passObj;
}



