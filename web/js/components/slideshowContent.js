function slideShowContent() {
    "use strict";
    var content = `

        <h3>My Slide Show Components</h3>
        <p>
            I hope my SlideShow is up to par.
        </p>
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content; // the HTML code specified just above...
    var twoObjects = document.createElement("div");
    twoObjects.classList.add('flexContainer'); // see styling in this file, above...
    ele.appendChild(twoObjects);

    // Example showing why you need to get the ss reference, so the HTML page can invoke 
    // any public methods that may be available from the returned slide show object.

    function processUserList(userList) {
       
        for (var i = 0; i < userList.length; i++) {
            //userList[i].image = userList[i].photo;
            userList[i].caption = userList[i].userEmail;
            console.log("image " + i + " " + userList[i].image);
        }
        // userList should already have a property called "image", so provide that... 
        var params = {
            picList: userList,
            slideShowStlye: "slideShow",
            captionStyle: "userEmail"
        };
        console.log("I AM HERE");
        console.log(params);
        var ss1 = MakeSlideShow(params);
        twoObjects.appendChild(ss1);

        ss1.setPicNum(0);

    }
    ajax("json/users.json", processUserList, document.getElementById("thirdSlideId"));

    function processCarList(carList) {

        // MakeSlideShow expects a property called "image", so provide that... 
        for (var i = 0; i < carList.length; i++) {
            carList[i].image = carList[i].pic;
            carList[i].caption = carList[i].make;
            console.log("image " + i + " " + carList[i].image);
        }

        var params = {
            picList: carList,
            slideShowStlye: "slideShow",
            captionStyle: "caption"
        };

        var ss2 = MakeSlideShow(params);
        twoObjects.appendChild(ss2);

        // Example showing why you need to get the ss reference, so the HTML page can invoke 
        // any public methods that may be available from the returned slide show object.
        ss2.setPicNum(0);
    }
    ajax("json/cars.json", processCarList, document.getElementById("secondSlideId"));


    return ele;
}


