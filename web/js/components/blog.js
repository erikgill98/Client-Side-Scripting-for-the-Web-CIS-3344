function blog() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
            <h2>Other Database Description!</h2>
            <ol>
                <li>One Table is Users</li>
                <li>Users are Internet Users, another table is passwords (users can have many passwords)</li>
                <li>Payment Information, users can only have one payment type</li>
                <li>Account information, users have emails and passwords which are linked to seperate websites</li>
            </ol>
            
            <h2>Web Design Exp!</h2>
            <p>
                My web design/development was nothing before this class. I have never designed or coded my own Web-site before this assignment, although
                I have briefly worked in HTML last semester for one assignment.
            </p>
            
            <h2>Easy, Hard, Valuable HW Info!</h2>
            <p>
                There was definitely some challenging aspects to this homework. One thing I found easy on this assignment was adding my own image and matching the colors to it. 
                I had trouble with making TitleNav responsive, however I did end up figuring it out by using a flex-box.
                An aspect of this homework that will be valuable in the future will be the flex-box.
            </p>
    
            <h2>JS UI Homework</h2>
            <p>
                This homework was much easier than the previous one, however I did have some issues at the start with understanding the different JavaScript files and their uses.
                After some time though I got a grasp of what I had to do and change for the website to look presentable. It may sound simple but the biggest issue I had was realizing that I
                just had to copy and paste my previous paragraphs written into the Blog.js and Home.js files. Overall, I believe this homework will be valuable for my in the future because I now
                understand how js files can link into an html.
            </p>
    
            <h2>JS Objects Homework</h2>
            <p>
                This homework was the most challenging for me. I had various different issues with getting my objects to work. My original idea was to have 1 drop down menu to select different
                password strengths and 1 textbox where the user could input their own password to check if it was strong, medium, or weak. I wasn't able to get either of those working so I ultimetely gave up.
                I then proceeded to follow along with what the previous lab did by entering 2 textboxs to change a element on the page. It sounded simple in theory, but one of my buttons wasn't working.
                I was attempting to fix it for multiple hours to realize that it was just a mix up in my function parameters. In the end, I believe this homework was valuable on teaching us how to use 
                objects and how to implement them in a website.'
            </p>
    
            <h2>Slide Show Components </h2>
            <p>
                This homework was not as challenging as last weeks. I referenced the code from Lab 4 and the example code provided from the zip file. One of the main issues I had doing was getting my
                images to show up. The easiest part of this assignment for me was linking to the new slideshow page. One aspect of this homework that I found confusing was reading the requirements 
                for the homework. I'm not sure if I met each requirement to its full extent.
            </p>
    
            <h2>ClickSort Components</h2>
            <p>
                This homework was easier for me than the last. It may have been because we had 2 weeks to do it, I was able to look at it longer which made it easier to understand.
                For this lab I referenced 33_clickSort from the sample code to help me finish this weeks assignment. One part of this assigment that was confusing to me was getting the extra credit to work
                but once I realized it wasn't as complicated as I thought it was, I understood what to do pretty easily. I used the same images of the professors that were provided because it fit into my 
                websites idea of a password manager.
            </p>
            <h2>Tutorial Proposal</h2>
            <p>
                I didn't find much confusing or hard about this assignment, although when I first started it I didn't realize we only had to put it into an HTML file. It was fun/challenging to get our proposal to work
                I enjoyed seeing getting my proposal to work, even if the data is hardcoded in right now. I do believe the next homework for me will be challenging. 
            </p>
            <h2>Database</h2>
            <p>
                I enjoyed this database homework. After taking Database Management Systems (2109), I've realized I enjoying working with databases, whether it's creating 
                or modifying them. I found making the database valuable and easy, however I ran into an error that took me alittle bit to figure out. In my "other" table, 
                I created a "user_passwords" that would mess with the "user_passwords" in web_user table. I just changed the name in my table to fix it.
    
                Click <a target="_blank" href='hw08-DB.pdf'>here</a> to see my database document.
            </p>
            <h2>Component</h2>
            <p>
                I found this homework extremely challenging. I found implementing the hover animation on an image to be fairly simple, however converting the w3schools to be reusable 
                was very difficult. Although this assignment was hard, I feel as if I learned a lot about how to create JavaScript functions.
            </p>
            <h2>Web API</h2>
            <p>
                I enjoyed this homework more than the others. I really enjoy working with databases, so implementing a database into my website was pretty fun for me. I had some trouble getting
                my entire database to show up, but that was because I spelled something wrong and spent more time than I would have liked trying to find a spelling error. Other than that, I didn't
                have many issues regarding this assignment.
                <a href="errors.pdf" target="_blank"> Click here for errors</a><br>
                <a href="webAPIs/listOtherAPI.jsp" target="_blank"> Click here for Other API</a><br>
                <a href="webAPIs/listUsersAPI.jsp" target="_blank"> Click here for Users API</a>
            </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}