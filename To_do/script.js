// alert("hello from JS");

let inputBox=document.querySelector(".input-box");
let ul=document.querySelector(".task-list");
inputBox.addEventListener("keydown",function(object){
    if(object.key=="Enter" && inputBox.value!=""){
        let value=inputBox.value;
        // console.log(value);
        let li=document.createElement("li");
        ul.appendChild(li);
        li.textContent=value;
        li.setAttribute("class","task");
        li.addEventListener("dblclick",function(){
            li.remove();
        });
        
        inputBox.value="";
        
    }
})


