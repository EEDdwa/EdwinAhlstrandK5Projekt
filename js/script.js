var clicks = 0;
function addCart() {
    if (clicks < 99){
        clicks += 1;
    }
    document.getElementById("numb").innerHTML = clicks;
}