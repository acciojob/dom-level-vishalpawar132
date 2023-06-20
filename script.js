//your JS code here. If required.
window.onload = function() {
    var element = document.getElementById("level");
    var level = 0;
    
    while (element.parentNode) {
        element = element.parentNode;
        level++;
    }
    
    alert("The level of the element is: " + level);
};
