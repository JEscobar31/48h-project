function move() {
    var elem = document.getElementById("bar-container-1"); 
    elem.style.cssText = "transition-duration: 6s";
    elem.style.cssText = "transition-duration: inherit;";
    elem.style.cssText = "width:12%";
    elem.textContent = '12% Health';
    $("bar-container-1").animate({
        width: "70%"
        // elem.style.cssText = "width:12%"
        // elem.textContent = '12% Health'
    
    }, 2500);


    var elem2 = document.getElementById("bar-container-2"); 
    elem2.style.cssText = "width:95%";
    elem2.textContent = '95% Pollution';


    var elem3 = document.getElementById("bar-container-3"); 
    elem3.style.cssText = "width:70%";
    elem3.textContent = '70% Contentement';


    var elem4 = document.getElementById("bar-container-4"); 
    elem4.style.cssText = "width:10%";
    elem4.textContent = '10% Ecologie';
}

