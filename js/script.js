var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
option1.addEventListener('click',function () {
    document.getElementById("loginBox").style.display="none";
    document.getElementById("qrcodeLogin").style.display="block";
    option1.classList.add('selected');
    option2.classList.remove('selected');
}, false);
option2.addEventListener('click',function () {
    document.getElementById("loginBox").style.display="block";
    document.getElementById("qrcodeLogin").style.display="none";
    option1.classList.remove('selected');
    option2.classList.add('selected');
}, false);