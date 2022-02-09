//Function for users live
function liveUsers() {

    var ele = document.createElement("div");

    ele.classList.add("clickSortStyle");//Add style clickSort to class

    var title = document.createElement("h2");
    title.style.textAlign = "center";
    ele.appendChild(title);

    //call ajax file and set appropriate values to pass into
    ajax("webAPIs/listUsersAPI.jsp", processUsers, document.getElementById("placeListHere"));

    function processUsers(obj) {

        var list = obj.webUserList;
        // print out JS object/array that was converted from JSON data by ajax function
        console.log(list);

        // build new list as we want the fields to appear in the HTML table
        // we can decide the order we want the fields to appear (first property defined is shown first)
        // we can combine, decide to exclude etc...
        var webUserList = [];

        // modify properties (image and price) of the array of objects so it will look 
        // better on the page.
        for (var i = 0; i < list.length; i++) {

            webUserList[i] = {};
            // Don't show the id (no meaningful data)
            webUserList[i].Web_User_Id = SortableTableUtils.makeNumber(list[i].webUserId);
            webUserList[i].Image = SortableTableUtils.makeImage(list[i].image, "4rem");
            webUserList[i].User_Email = SortableTableUtils.makeText(list[i].userEmail);
            webUserList[i].Birthday = SortableTableUtils.makeDate(list[i].birthday);
            webUserList[i].Membership_Fee = SortableTableUtils.makeNumber(list[i].membershipFee);
            webUserList[i].Role_Id = SortableTableUtils.makeNumber(list[i].userRoleId);
        }

        console.log("USER LIST");
        console.log(webUserList);

        var tableList = {
            title: "User List",
            list: webUserList,
            sort: "User_Email",
            sortIcon: "icons/sortUpDown16.png"
        };

        // Making a DOM object, nothing shows yet... 
        ele.appendChild(MakeClickSortTable(tableList));
    }
    return ele;
}