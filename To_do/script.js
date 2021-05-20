// alert("hello from JS");

let inputBox=document.querySelector(".input-box");
let ul=document.querySelector(".task-list");
let arr=[];

if(localStorage.getItem("mytasks")){
    let strarr=localStorage.getItem("mytasks");
    arr=JSON.parse(strarr);
    for(let i=0;i<arr.length;i++){
        let li=document.createElement("li");
        ul.appendChild(li);
        li.textContent=arr[i];
        li.setAttribute("class","task");
        li.addEventListener("dblclick",function(){
            li.remove();
            // remove local storage
            let idx=arr.indexOf(li.innerText);
            arr.splice(idx,1);
            strarr=JSON.stringify(arr);
            localStorage.setItem("mytasks",strarr);
        });
    }
}
inputBox.addEventListener("keydown",function(object){
    if(object.key=="Enter" && inputBox.value!=""){
        let value=inputBox.value;
        // console.log(value);
        let li=document.createElement("li");
        ul.appendChild(li);
        li.textContent=value;
        arr.push(value);
        let strarr=JSON.stringify(arr);
        localStorage.setItem("mytasks",strarr);
        li.setAttribute("class","task");
        li.addEventListener("dblclick",function(){
            li.remove();
        });
        
        inputBox.value="";
        
    }
})


