function MakeRealPortfolio(params) {

    //taking in list and title
    var objList = params.objList;
    var title = params.title;

    //adding styling
    var portObj = document.createElement("div");
    portObj.classList.add("portfolioStyle");

    // create container for html
    var container = document.createElement("div");
    
    //adding page header
    var header = document.createElement("h1");
    header.innerHTML = title;
    header.classList.add("header");
    container.appendChild(header);
    portObj.appendChild(container);
    
    //creating "All" button
    var buttonContainer = document.createElement("div");
    var sortList = [];
    portObj.appendChild(buttonContainer);
    var btn = document.createElement("button");
    btn.innerHTML = "All";
    buttonContainer.appendChild(btn);
    
    //showing every image in list
    btn.addEventListener("click", function () {
        var buttons = buttonContainer.getElementsByClassName("active");
        for (var j = 0; j < buttons.length; j++) {
            //removing the active filter tag
            buttons[j].classList.remove("active");
        }
        this.classList.add("active");
        showAll();
    });

    var columnContainer = document.createElement("div");
    columnContainer.classList.add("columnContainer");
    portObj.appendChild(columnContainer);
    
    
    //for loop that goes through list and creates divs for items
    for (var i = 0; i < objList.length; i++) {

        console.log(objList[i]);
        var column = document.createElement("div");
        column.classList.add("column");
        column.classList.add(objList[i].strength);
        if (sortList.indexOf(objList[i].strength) === -1) {
            sortList.push(objList[i].strength);
        };

        var columnContent = document.createElement("div");
        columnContent.classList.add("columnContent");
        column.appendChild(columnContent);

        var container = document.createElement("div");
        container.classList.add("container");
        columnContent.appendChild(container);
        
        //div for image
        var image = document.createElement("img");
        image.src = objList[i].imgSRC;
        container.appendChild(image);
        
        //div for image title
        var header4 = document.createElement("h4");
        header4.innerHTML = objList[i].header;
        container.appendChild(header4);

        //overlay stylng for each image div
        var overlay = document.createElement("div");
        overlay.classList.add("overlay");
        container.appendChild(overlay);

        //adding text to overlay
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

    return portObj;

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


    function showAll() {
        var columnEles = columnContainer.getElementsByClassName("column");

        for (var i = 0; i < columnEles.length; i++) {
            columnEles[i].style.display = "block";
        }
    }
}