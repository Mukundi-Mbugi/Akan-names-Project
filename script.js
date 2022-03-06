function akanName(){
    var DD = parseInt(document.getElementById("day").value);
    var MM = parseInt(document.getElementById("month").value);
    var year = document.getElementById("year").value;
    var CC = parseInt(year.slice(0,2));
    var YY = parseInt(year.slice(2,4));
    // console.log(CC);

    if(DD<1||DD>31){
        document.getElementById("alert1").innerHTML="Error! Enter a valid date.";
    };
    if (MM<1||MM>12){
        document.getElementById("alert2").innerHTML="Error! Enter a valid Month.";
    };
    if (year<1||year>2022){
        document.getElementById("alert3").innerHTML="Error! Enter a valid year.";
    };

    var man = document.getElementById("man").value;
    var woman = document.getElementById("woman").value;
    // console.log(female);

};