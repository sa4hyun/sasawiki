let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["QSAiN SITE | ASK TO SASA EXPERT"];
    let selectStirng = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectSringArr = selectStirng.split("");
    return selectSringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 출력
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr)
        },80);
    }else{
        setTimeout(resetTyping, 3000)
    }
}
dynamic(randomString());

//커서 깜빡인 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);

function startwiki() {
    window.location.href = "site.html";
}
