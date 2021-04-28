var currentReq = document.getElementById("reqNum");
var currentCon = document.getElementById("conNum");
var conLine1 = document.getElementById("alexM");
var conLine2 = document.getElementById("rickS");
var conPane = document.getElementById("connectionReqInfoPane")
var userName = document.getElementById("name")

var uName = "Sean Caylor"
var requestNumber = 2;
var conNumber = 513;

function acceptClick(num){
    if (requestNumber > 0){
        requestNumber--
    }
    
    conNumber++;
    rewrite();
    removeLine(num)
}

function denyClick(num){
    if(requestNumber > 0){
        requestNumber--
    }

    rewrite();
    removeLine(num);
}

function nameOChango(){
    uName = document.getElementById("newName").value;
    rewrite()
    promptODissapearo()
}

function removeLine(num){
    if (num == 1){
        document.getElementById("alexM").remove();
    } else if (num == 2){
        document.getElementById("rickS").remove();
    }
    
}

function rewrite(){
    currentReq.innerHTML = requestNumber;
    currentCon.innerHTML = conNumber;
    userName.innerHTML = uName;
}

function photoChango(){
    var image = document.getElementById("profilePic");
    if (image.getAttribute('src') == "img/ProfilePic.png"){
        image.src = "img/JBFH.png"
    }
    else {
        image.src = "img/ProfilePic.png"
    }
}

function promptODissapearo(){
    if (document.getElementById("editField").style.visibility === "hidden"){
        document.getElementById("editField").style.visibility = "visible"
    } else {
        document.getElementById("editField").style.visibility = "hidden"
    }
}

function userNameValidation(){   
    if (document.getElementById("newName").value.length < 1){
        window.alert("User Name cannot be blank");
    } else{
        nameOChango()
    }
}
rewrite();