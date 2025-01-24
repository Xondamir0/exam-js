const raqam1 = +prompt("1-raqamni kiriting");

const tanlang = prompt("Tanlang operatsiyani:\n1)+\n2)-\n3)*\n4)/");

const raqam2 = +prompt("2-raqamni kiriting");

let result;
let operator;

if (tanlang === "1") {
    result = raqam1 + raqam2;
    operator = "+"; 
} else if (tanlang === "2") {
    result = raqam1 - raqam2;
    operator = "-";
} else if (tanlang === "3") {
    result = raqam1 * raqam2;
    operator = "*";
} else if (tanlang === "4") {
    result = raqam1 / raqam2;
    operator = "/";
} else {
    alert("Noto'g'ri operatsiyani tanladingiz!");
}

if (result !== undefined) {
    const resultDiv = document.createElement("div");
    resultDiv.textContent = `${raqam1} ${operator} ${raqam2}`;

    resultDiv.style.backgroundColor = "yellow";
    resultDiv.style.color = "white";
    resultDiv.style.padding = "40px";
    resultDiv.style.marginTop = "20px";
    resultDiv.style.borderRadius = "5px";
    resultDiv.style.fontSize = "20px";
    resultDiv.style.textAlign = "center";
    document.body.appendChild(resultDiv);
}

if (result !== undefined) {
    const resultD = document.createElement("div");
    resultD.textContent = `Natija: ${result}`;
    resultD.style.backgroundColor = "red";
    resultD.style.color = "white";
    resultD.style.padding = "10px";
    resultD.style.marginTop = "20px";
    resultD.style.fontSize = "20px";
    resultD.style.textAlign = "center";
    document.body.appendChild(resultD);
}
    