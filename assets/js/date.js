var i = 1;
setInterval(()=> {
    document.getElementById('date').innerHTML = i;
    i+=1;
    console.log(i);
}, 20000);
