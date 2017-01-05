/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function buildMap(x) {
    var z = document.getElementById(x);
    var bullet = document.createElement("ul");
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
    linkBio.setAttribute("href", "404.html");
    linkBio.textContent = "Bio";
    listItem.appendChild(linkBio);
    bullet.appendChild(listItem);
    
    var linkAnimeMemes = document.createElement("A");
    var listItem = document.createElement("li");
    linkAnimeMemes.setAttribute("href", "animememes.html");
    linkAnimeMemes.textContent = "Anime Memes";
    listItem.appendChild(linkAnimeMemes);
    bullet.appendChild(listItem);
    
    var linkItem = document.createElement("A");
    var listItem = document.createElement("li");
    listItem.textContent = "Class Projects";
    bullet.appendChild(listItem);
    
    var nestedList = document.createElement("ul");
    listItem.appendChild(nestedList);
    
    var linkBreakout = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkBreakout.setAttribute("href", "breakout.html");
    linkBreakout.textContent = "Breakout";
    nestedListItem.appendChild(linkBreakout);
    nestedList.appendChild(nestedListItem);
    
    var linkJSEvents = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkJSEvents.setAttribute("href", "scriptevents.html");
    linkJSEvents.textContent = "Script Events";
    nestedListItem.appendChild(linkJSEvents);
    nestedList.appendChild(nestedListItem);
    
    var linkPopup = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkPopup.setAttribute("href", "popup.html");
    linkPopup.textContent = "Pop Up";
    nestedListItem.appendChild(linkPopup);
    nestedList.appendChild(nestedListItem);
    
    var linkToDoList = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkToDoList.setAttribute("href", "todolist.html");
    linkToDoList.textContent = "To Do List";
    nestedListItem.appendChild(linkToDoList);
    nestedList.appendChild(nestedListItem);
    
    var linkChalkboard = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkChalkboard.setAttribute("href", "chalkboard.html");
    linkChalkboard.textContent = "ChalkBoard";
    nestedListItem.appendChild(linkChalkboard);
    nestedList.appendChild(nestedListItem);
    
    var linkTicTacToe = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkTicTacToe.setAttribute("href", "tictactoe.html");
    linkTicTacToe.textContent = "Tic Tac Toe";
    nestedListItem.appendChild(linkTicTacToe);
    nestedList.appendChild(nestedListItem);
    
    var linkMultiplication = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkMultiplication.setAttribute("href", "timestable.html");
    linkMultiplication.textContent = "Times Table";
    nestedListItem.appendChild(linkMultiplication);
    nestedList.appendChild(nestedListItem);
    
    var linkMoreMultiplication = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkMoreMultiplication.setAttribute("href", "usertimestable.html");
    linkMoreMultiplication.textContent = "User Times Table";
    nestedListItem.appendChild(linkMoreMultiplication);
    nestedList.appendChild(nestedListItem);
    
    var linkCalculator = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkCalculator.setAttribute("href", "calculator.html");
    linkCalculator.textContent = "Area of Rectangle Calculator";
    nestedListItem.appendChild(linkCalculator);
    nestedList.appendChild(nestedListItem);
    
    var linkSecretPassage = document.createElement("A");
    var nestedListItem = document.createElement("li");
    linkSecretPassage.setAttribute("href", "Secret Passage.html");
    linkSecretPassage.textContent = "Secret Lair";
    nestedListItem.appendChild(linkSecretPassage);
    nestedList.appendChild(nestedListItem);
    
    
}

