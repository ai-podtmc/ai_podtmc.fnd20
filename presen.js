const newP = document.createElement("p");
newP.innerText = "Thank you!";
document.body.appendChild(newP);

//--------wani-------------
let gatorsCount = 0;
function getCount() {
    //数字を取得
    let strGator = "";
    gatorsCount = document.getElementsByTagName("input")[0].value;
    console.log(gatorsCount);
    for (let i = 0; i < gatorsCount; i++){
        strGator += "🐊" 
    }
    console.log(strGator);
    let blueSquare = document.getElementById("blueSquare");
    blueSquare.innerText = strGator;
}
//ボタンの取得
const getButton = document.getElementById("button1");
getButton.addEventListener("click", getCount)
//----------------------------
