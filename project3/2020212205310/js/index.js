/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2023-03-10 14:40:19
 * @version $Id$
 */


function changeColor() {
    document.getElementById("p1").style.color = "red";
}



function showTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day
    var currentTime = year + '-' + month + '-' + day;
    document.getElementById("h1").innerHTML = currentTime;
}

function changeType() {
    document.getElementById("p3").classList.add("fn-active");
}

function deleteChild() {
    let parent = document.getElementById("parent");
    let child = document.getElementById("child");
    parent.removeChild(child);
}

function openNewWindow() {
    window.open("http://www.taobao.com/", "newWindow");
}

function addChlid() {
    let element = document.createElement("li");
    let node = document.createTextNode("p9");
    element.appendChild(node);
    let parent = document.getElementById("parent");
    parent.appendChild(element);
}

function setAlert() {
    var li = document.querySelectorAll("ul li")
    for (let i = 0; i < li.length; i++) {
        li[i].onclick = function() {
            alert("li-ID: " + i);
        }
    }

}


function setWidth() {
    var mbox = document.getElementById("mbox");
    mbox.style.width = (window.screen.availWidth) + "px";
}