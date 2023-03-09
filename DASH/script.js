const campoProd = document.getElementById('priceProd-place');
var verific;
function clickCampoProd(){
    if(verific == 0){
        verific = 1;
        return campoProd.style.display = "flex";
    }else{
        verific = 0;
        return campoProd.style.display = "none";
    } 
}