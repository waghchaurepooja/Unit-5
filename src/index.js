
const {sum,mult} = require("./calc");

console.log(sum(2,4));
console.log(mult(2,5));

import "./index.css";
import logo from "./image/unnamed.png"

const root = document.querySelector("#root");

const ImageBox = document.createElement("div");
ImageBox.setAttribute("class","ImageBox");

const img = document.createElement("img");
img.setAttribute("src",logo);
img.setAttribute("class","logoimage");

const form = document.createElement("form");
form.setAttribute("class","form");

const TextInput = document.createElement("input");
TextInput.setAttribute("class","TextInput");
TextInput.placeholder = "Enter Some Note....."

const table = document.createElement("table");
table.setAttribute("class","table");
const thead = document.createElement("thead");
thead.setAttribute("class","thead");
const tr = document.createElement("tr");
tr.setAttribute("class","tr");
const th1 = document.createElement("th");
th1.setAttribute("class","th1");
th1.innerHTML = "simple note";
const th2 = document.createElement("th");
th2.setAttribute("class","th2");
th2.innerHTML = "Delete"
const tbody = document.createElement("tbody");
tbody.setAttribute("class","tbody");

const SubmitInput = document.createElement("input");
SubmitInput.setAttribute("type","submit");
SubmitInput.setAttribute("class","SubmitInput");
SubmitInput.value = "SUBMIT"

root.append(ImageBox,form,table);
ImageBox.append(img);
form.append(TextInput,SubmitInput);
table.append(thead,tbody);
thead.append(tr)
tr.append(th1,th2);

form.addEventListener("submit",todoList);
var object = JSON.parse(localStorage.getItem("SampleNote")) || [];

window.addEventListener("load",function()   //<--|
{
    Table(object);
})

function todoList(event)
{
    event.preventDefault();

    var item = TextInput.value;
    var task = 
    {
        SampleNote : item
    }

    object.push(task);
    localStorage.setItem("SampleNote",JSON.stringify(object))
    console.log(task);
    console.log(object);
    Table(object);
}

function Table(object)
{
    console.log(object);

    tbody.innerHTML = "";
    object.map(function(element,index)
    {
        //document.querySelector("tbody").textContent = "";
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.setAttribute("class","td1");
        td1.textContent = element.SampleNote;
        var td3 = document.createElement("button");
        td3.setAttribute("class","td2");
        td3.textContent = "Delete";
        td3.addEventListener("click",function()
        {
            deleteItem(index);
        })
        tr.append(td1,td3);
        tbody.append(tr);
    });

    function deleteItem(index)
    {
        object.splice(index,1);
        console.log(object);
        localStorage.setItem("SampleNote",JSON.stringify(object));
        Table(object);
    }
}