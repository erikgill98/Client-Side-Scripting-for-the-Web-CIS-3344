//Function for users live
function livePasswords() {

    var ele = document.createElement("div");

    ele.classList.add("clickSortStyle");//Add style clickSort to class

    var title = document.createElement("h2");
    title.style.textAlign = "center";
    ele.appendChild(title);

    //call ajax file and set appropriate values to pass into
    ajax("webAPIs/listOtherAPI.jsp", processPasswords, document.getElementById("placeListHere"));

    function processPasswords(obj) {

        var list = obj.passwordUsersList;
        // print out JS object/array that was converted from JSON data by ajax function
        console.log(list);

        // build new list as we want the fields to appear in the HTML table
        // we can decide the order we want the fields to appear (first property defined is shown first)
        // we can combine, decide to exclude etc...
        var passwordUsersList = [];

        // modify properties (image and price) of the array of objects so it will look 
        // better on the page.
        for (var i = 0; i < list.length; i++) {

            passwordUsersList[i] = {};
            // Don't show the id (no meaningful data)
            passwordUsersList[i].Password_ID = SortableTableUtils.makeNumber(list[i].Password_ID);
            passwordUsersList[i].users_password = SortableTableUtils.makeText(list[i].users_password);
            passwordUsersList[i].image_url = SortableTableUtils.makeImage(list[i].image_url, "4rem");
            passwordUsersList[i].password_answer = SortableTableUtils.makeText(list[i].password_answer);
            passwordUsersList[i].password_question = SortableTableUtils.makeText(list[i].password_question);
            passwordUsersList[i].website_passwords = SortableTableUtils.makeText(list[i].website_passwords);
        }

        console.log("Password List");
        console.log(passwordUsersList);

        var tableList = {
            title: "Password List",
            list: passwordUsersList,
            sort: "Password_ID",
            sortIcon: "icons/sortUpDown16.png"
        };

        // Making a DOM object, nothing shows yet... 
        ele.appendChild(MakeClickSortTable(tableList));
    }
    return ele;
}