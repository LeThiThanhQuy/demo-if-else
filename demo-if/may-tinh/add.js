function setOutput(n) {
    document.getElementById("result").value += n;
}

function calculator() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = eval(result);
}

function clearOutput() {
    document.getElementById("result").value = "";
}

window.addEventListener("keydown", checkKey);

function checkKey(evt) {
    let inputKB = evt.key;
    if (!isNaN(inputKB)) {
        setOutput(evt.key);
    }
}

function checkRegex() {
    let check = /^[0-9-+()]*$/;
    let check2 = /^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/;
    let check3 = /^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$/;
    let txt = "/";
    console.log(check.test(txt));
}
checkRegex();
