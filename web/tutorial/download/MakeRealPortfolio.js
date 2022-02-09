function MakeRealPortfolio(params) {

    var objList = params.objList;
    var title = params.title;

    var portObj = document.createElement("div");
    portObj.classList.add("portfolioStyle");

    // create container for html
    var container = document.createElement("div");
   
    var header = document.createElement("h1");
    header.innerHTML = title;
    header.classList.add("header");
    container.appendChild(header);
    portObj.appendChild(container);

    //create "All" button
    var buttonContainer = document.createElement("div");
    //sortList for buttons titles
    var sortList = [];
    portObj.appendChild(buttonContainer);

    var btn = document.createElement("button");
    btn.innerHTML = "All";
    buttonContainer.appendChild(btn);

    //all button click
    btn.addEventListener("click", function () {
        var buttons = buttonContainer.getElementsByClassName("active");
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("active");
        }
        this.classList.add("active");
        portObj.showAll();
    });

    var columnContainer = document.createElement("div");
    columnContainer.classList.add("columnContainer");
    portObj.appendChild(columnContainer); 
    
    //for loop that goes through list
    for (var i = 0; i < objList.length; i++) {

        console.log(objList[i]);
        var column = document.createElement("div");
        column.classList.add("column");
        column.classList.add(objList[i].filter);
        if (sortList.indexOf(objList[i].filter) === -1) {
            sortList.push(objList[i].filter);
        };

        var columnContent = document.createElement("div");
        columnContent.classList.add("columnContent");
        column.appendChild(columnContent);

        var container = document.createElement("div");
        container.classList.add("container");
        columnContent.appendChild(container);

        var image = document.createElement("img");
        image.src = objList[i].imgSRC;
        container.appendChild(image);

        var header4 = document.createElement("h4");
        header4.innerHTML = objList[i].header;
        container.appendChild(header4);

        var overlay = document.createElement("div");
        overlay.classList.add("overlay");
        container.appendChild(overlay);

        var text = document.createElement("div");
        text.classList.add("text");
        overlay.appendChild(text);
        text.innerHTML = objList[i].overlayText;

        columnContainer.appendChild(column);
    }

    //loop creating buttons via sortList
    for (var i = 0; i < sortList.length; i++) {
        //button div
        btn = document.createElement("button");
        //putting text into button
        btn.innerHTML = sortList[i];
        buttonContainer.appendChild(btn);

        //when clicked only shows images with filter tag that's clicked
        btn.addEventListener("click", function () {
            var buttons = buttonContainer.getElementsByClassName("active");
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove("active");
            }
            this.classList.add("active");
            selectFilt(this.innerHTML);
        });
    }
    //new select filt
    function selectFilt(classname) {
        var columnEles = columnContainer.getElementsByClassName("column");

        for (var i = 0; i < columnEles.length; i++) {
            columnEles[i].style.display = "none";
        }

        columnEles = columnContainer.getElementsByClassName(classname);

        for (var i = 0; i < columnEles.length; i++) {
            columnEles[i].style.display = "block";
        }
    }

    portObj.showAll = function() {
        var columnEles = columnContainer.getElementsByClassName("column");

        for (var i = 0; i < columnEles.length; i++) {
            columnEles[i].style.display = "block";
        }
    };
    
    return portObj;
}