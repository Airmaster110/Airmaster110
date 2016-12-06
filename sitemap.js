/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function buildMap(x) {
    var z = docuemnt.getElementById(x);
    var bullet = docuemnt.createElement("ul");
    var listItem = document.createElement("li");
    z.appendChild(bullet);
    
    var linkIndex = document.createElement("A");
    var listItem = document.createElement("li");
    linkIndex.setAttribute("href", "index.html");
    linkIndex.textContent = "Home";
    listItem.appendChild(linkIndex);
    bullet.appendChild(listItem);
    
    var linkBio = document.createElement("A");
    var listItem = document.createElement("li");
    linkIndex.setAttribute("href", "bio.html");
    linkIndex.textContent = "Bio";
    listItem.appendChild(linkBio);
    bullet.appendChild(listItem);
    
    var linkItem = document.createElement("A");
    listItem.textContent = "Class Projects";
    bullet.appendChild(listItem);
    
    var nestedList = document.createElement("ul");
    listItem.appendChild(nestedList);
    
    var linkBreakout = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkBreakout.setAttribute("href", "breakout.html");
    nestedListItem.appendChild(linkBreakout);
    nestedList.appendChild(nestedListitem);
    
    var linkJSEvents = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkJSEvents.setAttribute("href", "scriptevents.html");
    nestedListItem.appendChild(linkJSEvents);
    nestedList.appendChild(nestedListitem);
    
    var linkPopup = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkPopup.setAttribute("href", "popup.html");
    nestedListItem.appendChild(linkPopup);
    nestedList.appendChild(nestedListitem);
    
    var linkToDoList = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkToDoList.setAttribute("href", "popup.html");
    nestedListItem.appendChild(linkToDoList);
    nestedList.appendChild(nestedListitem);
    
    var linkChalkboard = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkChalkboard.setAttribute("href", "chalkbaord.html");
    nestedListItem.appendChild(linkChalkboard);
    nestedList.appendChild(nestedListitem);
    
    var linkTicTacToe = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkTicTacToe.setAttribute("href", "tictactoe.html");
    nestedListItem.appendChild(linkTicTacToe);
    nestedList.appendChild(nestedListitem);
    
    var linkMultiplication = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkMultiplication.setAttribute("href", "timestable.html");
    nestedListItem.appendChild(linkMultiplication);
    nestedList.appendChild(nestedListitem);
    
    var linkMoreMultiplication = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkMoreMultiplication.setAttribute("href", "usertimstable.html");
    nestedListItem.appendChild(linkMoreMultiplication);
    nestedList.appendChild(nestedListitem);
}

