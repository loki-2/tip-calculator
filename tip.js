function calculateTip(){
    var mybill=document.getElementById("billAmt").value;
    var serviceQua=document.getElementById("serviceQua").value;
    var totalPpl=document.getElementById("totalPpl").value;

    if(mybill==="" || serviceQua==0){
        alert("Please enter values");
        return;
    }
    if(totalPpl<=1 || totalPpl===""){
        totalPpl=1;
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="inline-block";
    }
    var total= (mybill*serviceQua)/totalPpl;
    total=Math.round(total*100)/100;

    total=total.toFixed(2);
    document.getElementById("totalTip").style.display="block";
    document.getElementById("tipAmt").innerHTML=total;
}

document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
};