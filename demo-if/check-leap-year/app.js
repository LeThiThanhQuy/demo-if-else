function test() {
    let year=parseInt(document.getElementById("data").value);

    let leapYear;

    if (year % 100 === 0) {
        if (year % 400 === 0) {
            leapYear = 1;
        } else leapYear = 0;
    } else {
        if (year % 4 === 0) {
            leapYear = 1;
        }
    }
    if (leapYear === 1) {
        document.write(year + " is a leap year");
    } else document.write( year + " isn't a leap year");
}