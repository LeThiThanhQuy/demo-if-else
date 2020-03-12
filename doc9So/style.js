function countNumber() {
    let n = document.getElementById("inputNumber").value;
    if (n.length === 9) {
        n = parseInt(n);
        document.getElementById("outputNumber").innerHTML = " Số đã nhập: " + n;
        document.getElementById("result").innerHTML = "Có thể đọc là: " + count9Digits(n);
    } else
        document.getElementById("outputNumber").innerHTML = "Không hợp lệ. Hãy nhập 9 chữ số";
}

function count1Digit(n) {
    switch (n) {
        case 0:
            return " Không";
        case 1:
            return " Một";
        case 2:
            return " Hai";
        case 3:
            return " Ba";
        case 4:
            return " Bốn";
        case 5:
            return " Năm";
        case 6:
            return " Sáu";
        case 7:
            return " Bảy";
        case 8:
            return " Tám";
        case 9:
            return " Chín";
        default :
            return " Không biết số này";
    }
}

function count9Digits(n) {
    let hdrmillion = Math.floor(n / 100000000);
    let dozensmillion = Math.floor(n / 10000000) % 10;
    let million = Math.floor(n / 1000000) % 10;
    let hdrthousand = Math.floor(n / 100000) % 10;
    let dozensthousand = Math.floor(n / 10000) % 10;
    let thousand = Math.floor(n / 1000) % 10;
    let hundred = Math.floor(n / 100) % 10;
    let dozens = Math.floor(n / 10) % 10;
    let unit = n % 10;
    let count = "";
    count += count1Digit(hdrmillion) + " trăm";
    if (dozensmillion === 1) {
        count += " mười";
    } else if (dozensmillion === 0) {
        count += " linh"
    } else
        count += count1Digit(dozensmillion) + " mươi";
    if (million === 0) {
        count += " triệu";
    } else
        count += count1Digit(million) + " triệu";
    count += count1Digit(hdrthousand) + " trăm";
    if (dozensthousand === 1) {
        count += " mười";
    } else if (dozensthousand === 0) {
        count += " linh";
    } else
        count += count1Digit(dozensthousand);
    count += count1Digit(thousand) + " nghìn";
    count += count1Digit(hundred) + " trăm";
    if (dozens === 1) {
        count += " mười";
    } else if (dozens === 0) {
        count += " linh";
    } else
        count += count1Digit(dozens);
    if (unit === 1) {
        count += " mốt";
    } else
        count += count1Digit(unit);
    return count;
}