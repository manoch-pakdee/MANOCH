function calcArea() {


    //microwave
    let wide = Number(document.querySelector("#wide").value);
    let long = Number(document.querySelector("#long").value);
    let wp = Number(document.querySelector("#wp").value);

    let total = [((((wide * long) / 2).toFixed(0)) * wp) / 1000];

    document.getElementById("sum").value = total;
    // var intairconn = parseInt(num3);
    console.log("value of microwave is " + total[0] + " and " + total[1]);
}