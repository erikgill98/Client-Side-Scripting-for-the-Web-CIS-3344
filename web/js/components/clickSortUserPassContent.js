function clickSortUserPassContent() {
    "use strict";
    var ele = document.createElement("div");
    ele.classList.add('clickSortStyle');    

    ajax("json/userPass.json", processUsersData, content);

    function processUsersData(userList) {
        var newUserList = [];

        for (var i = 0; i < userList.length; i++) {

            newUserList[i] = {};
            
            newUserList[i]._Image = SortableTableUtils.makeImage(userList[i].image, "5rem");
            newUserList[i].Email = SortableTableUtils.makeText(userList[i].userEmail);
            
            newUserList[i].PasswordStrength = SortableTableUtils.makeText(userList[i].passwordstrength);
                    
            newUserList[i].WebsitePasswords = SortableTableUtils.makeText(userList[i].websitepasswords);
                    
            newUserList[i].PaymentType = SortableTableUtils.makeText(userList[i].paymenttype);
        }
        var userObj = {
            name: "PasswordDeck User Info",
            list: newUserList,
            sort: "Email",
            icon: "pics/sortUpDown16.png"
        };
        ele.appendChild(MakeClickSortTable(userObj));
    }
    
    return ele;
}