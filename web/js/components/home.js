function home () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

                    <h2>Web-site Function!</h2>
            <p>
                Every person that uses the Internet has an account somewhere. Over time, these accounts can add up leading to forgotten passwords.
                PasswordDeck offers the user a safe way to store all their passwords, payments and personals details for whenever you need them. 
                Here at PasswordDeck, we are a 
                <a href="https://us.norton.com/internetsecurity-how-to-password-managers-are-the-key-to-secure-passwords.html#:~:text=A%20password%20manager%20is%20a,help%20protect%20your%20online%20accounts."
                   >password manager</a> that can simplify your online life.
            </p>
                <p style="text-align:center;">
                <img src="pics/passSecurity.png" style="width:20%; border-radius:10px;">
            </p>
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }