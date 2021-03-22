var total = 0;
var useTotal;

function calcArea() {
    //microwave
    let wide = Number(document.querySelector("#wide").value);
    let long = Number(document.querySelector("#long").value);
    let wp = Number(document.querySelector("#wp").value);

    total = [((((wide * long) / 2).toFixed(0)) * wp) / 1000];

    document.getElementById("sum").value = total;

    useTotal = document.getElementById("sum").value;
	console.log("sum is"+document.getElementById("sum").value);
    console.log("useTotal is "+useTotal);

    //localStorage

    
}
function saveMy() {
    var getInput = parseFloat(document.getElementById("sum").value);
    // var getInput = {
    //     localSum: document.getElementById("sum").value
    // }

    let wide = Number(document.querySelector("#wide").value);
    let long = Number(document.querySelector("#long").value);
    let wp = Number(document.querySelector("#wp").value);

    total = [((((wide * long) / 2).toFixed(0)) * wp) / 1000];

    document.getElementById("sum").value = total;

    useTotal = document.getElementById("sum").value;
    localStorage.setItem('totalStorage', JSON.stringify(getInput));
}

// function changeTotal() {
//     console.log(total);
//     document.getElementById("testcal").value = document.getElementById("sum").value;
//     console.log("value of testcal is " + document.getElementById("testcal").value);
// }

// fucntion showTotal() {
//     console.log(total);
//     document.getElementById("testcal2").value = total;
//     console.log("value of testcal2 is " + document.getElementById("testcal2").value);
// }
