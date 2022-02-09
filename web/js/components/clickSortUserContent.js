function clickSortUserContent() {
    "use strict";
    var ele = document.createElement("div");
    ele.classList.add('clickSortStyle');    

    ajax("json/users.json", processUsersData, content);

    function processUsersData(userList) {
        var newUserList = [];

        for (var i = 0; i < userList.length; i++) {

            newUserList[i] = {};
            
            newUserList[i]._Image = SortableTableUtils.makeImage(userList[i].image, "5rem");
            newUserList[i].Email = SortableTableUtils.makeText(userList[i].userEmail);
            
            newUserList[i].Birthdate = SortableTableUtils.makeText(userList[i].birthday);
                    
            newUserList[i].MembershipFee = SortableTableUtils.makeNumber(userList[i].membershipFee);
                    
            newUserList[i].Role = SortableTableUtils.makeText(userList[i].userRoleId + " " + userList[i].userRoleType);
        }
        var userObj = {
            name: "PasswordDeck Users",
            list: newUserList,
            sort: "Email",
            icon: "pics/sortUpDown16.png"
        };
        ele.appendChild(MakeClickSortTable(userObj));
    }
    
    return ele;
}