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

    let day  = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
    console.log(day);

    var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    if (gender=man){
        document.getElementById("return").innerHTML="Your Akan name is " + male[day] + "."
    }
    else if (gender=woman){
        document.getElementById("return").innerHTML="Your Akan name is " + female[day] + "."
    };
};

