function passContent() {

var content = `
        <style>
            p {
                margin-left: 1.5rem;
            }
            .flexContainer {
                background-color: #873546;
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                font-color: white;
            }
        </style>
        <h3>Homework 3 JS Objects!</h3>
        <p>
            I created buttons that you can change the email and numbers. To use my component, you would input a new email into the 
            change email button then select the button, and the same goes for the passwords. My third button is just a fix for my project, I wasn't
            sure what to put.
        </p>
    `;

    var params1 = {
        theEmail: "FakeEmail@temple.edu",
        numPass: "1",
        theProject: "Not Sure",
        style: "PassStyle",
        theImg: "pics/BetterPassy.jpg"
    };
    
    var params2 = {
        theEmail: "aRealEmail@temple.edu",
        numPass: "1",
        theProject: "Silly me",
        style: "PassStyle",
        theImg: "pics/passy.png"
    };
    
        var ele = document.createElement("div");
        ele.innerHTML = content; // the HTML code specified just above...
        var twoPasswords = document.createElement("div");
        twoPasswords.classList.add('flexContainer'); // see styling in this file, above...
        ele.appendChild(twoPasswords);
        twoPasswords.appendChild(MakePass(params1));
        twoPasswords.appendChild(MakePass(params2));
        var trailer = document.createElement("p");
        ele.appendChild(trailer);
        return ele;
}