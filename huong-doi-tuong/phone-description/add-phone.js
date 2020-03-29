/*
Viết một lớp các đối tượng điện thoại lấy tên là Mobile, mỗi một chiếc mobile phone khi được tạo ra sẽ mang những đặc điểm sau:

1/ Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv)
2/ Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
3/ Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
4/ Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
5/ Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.v
6/Có chức năng bật và tắt điện thoại.
7/Có chức năng sạc pin điện thoại.
8/ Có chức năng soạn tin nhắn.
9/ Có chức năng nhận tin nhắn từ một chiếc mobile khác.
10/ Có chức năng gửi tin nhắn tới một chiếc mobile khác.
11/ Có chức năng xem tin trong hộp thư đến.
12/Có chức năng xem tin đã gửi.
13/Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
Các chức năng không thể hoạt động nếu điện thoại chưa bật.
Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:

Có một chiếc điện thoại nokia và một chiếc iphone
Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ và gửi cho chiếc iphoneChiếc iphone kiểm tra inbox và hiển thị tin đó.
 */
class Mobile {
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.status = true;
        this.msg = "";
        this.inbox = [];
        this.sent = [];
    }

    writeMess(value) {
        this.msg = value;
    }

    receiveMsg(name, msg) {
        this.inbox.push(name + ":" + msg +" ");
    }

    sendMsg(mobile) {
        mobile.receiveMsg(this.name, this.msg);
        this.sent.push(this.msg);
    }

    checkStatus() {
        if (this.status === false) {
            alert("OFF. You can do nothing.");
        } else {
            alert("ON. You are all set.");
        }
    }

    turnOnOff() {
        return this.status;
    }

    decreaseBattery() {
        return this.battery -= 1;
    }

    chargeBattery(){
        return this.battery = 100;
    }
}

let mobile1 = new Mobile("Iphone");
let mobile2 = new Mobile("SamSung");
let statusPhone = new Mobile("All");
let button1 = document.getElementById("switchButton1");
let button2 = document.getElementById("switchButton2");
statusPhone.checkStatus();

function chargeBattery() {
    document.getElementById("battery1").innerHTML = "Battery: " + mobile1.chargeBattery() + "%";
    document.getElementById("battery2").innerHTML = "Battery: " + mobile2.chargeBattery() + "%";
}

function switchOnOff() {
    if (statusPhone.turnOnOff() === false && button1.value === "Turn on the phone") {
        statusPhone.status = true;
        button1.value = "Turn off the phone";
        button2.value = "Turn off the phone";
        statusPhone.checkStatus();
    } else {
        statusPhone.status = false;
        button1.value = "Turn on the phone";
        button2.value = "Turn on the phone";
        statusPhone.checkStatus();
    }
}

function sendMess(m1, m2) {
    if (statusPhone.turnOnOff() === false) {
        alert("Please turn on device to use those features.");
    } else {
        m1.sendMsg(m2);
        document.getElementById("iphoneInbox").innerHTML = mobile1.inbox;
        document.getElementById("iphoneOutbox").innerHTML = mobile1.sent;
        document.getElementById("samsungInbox").innerHTML = mobile2.inbox;
        document.getElementById("samsungOutbox").innerHTML = mobile2.sent;
        document.getElementById("iphoneMsg").value = "";
        document.getElementById("samsungMsg").value = "";
        document.getElementById("battery1").innerHTML = "Battery: " + mobile1.decreaseBattery() + "%";
        document.getElementById("battery2").innerHTML = "Battery: " + mobile2.decreaseBattery() + "%";
    }
    }