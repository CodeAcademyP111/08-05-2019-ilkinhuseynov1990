var mydate = new Date(2019, 4, 30, 21, 25, 40, 50);




function getdifferencetime(putdate) {
    var localdate = new Date();
    var difference, netice = "";

    difference = putdate.getTime() - localdate.getTime();

    if (difference > 3600000) {

        netice = difference / 1000 / 60 / 60 + " deqiqe kecmisdir";

        return netice;

    } else if (difference < 8640000) {

        netice = difference /1000/60/60/24 +" gun kecmisdir";

        return netice;
    }




}

console.log(getdifferencetime(mydate));
//1557656460000

//console.log(netice);

//31534953747