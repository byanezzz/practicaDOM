function validation(){
    var comments=document.getElementById("comment").value;
    if(comments===""){
        alert("No debe dejar el campo vacío");
    }else{
        add();
    }
}

function add(){
   
    /*Tomo el valor de lo q el usuario escribe*/
    var comments= document.getElementById("comment").value;
    document.getElementById("comment").value="";
    var newComment=document.createElement("div");
    var cont=document.getElementById("cont");
    
    var check=document.createElement("input");
    check.type="checkbox";
    
    var paragraph=document.createElement("p");
    paragraph.classList.add("color");
    var nodoText=document.createTextNode(comments);
    paragraph.appendChild(nodoText);
    
    var heart=document.createElement("i");
    heart.classList.add("fa", "fa-heart", "heart");
    
    var trash=document.createElement("i");
    trash.classList.add("fa", "fa-trash", "trash");

    newComment.appendChild(check);
    newComment.appendChild(trash);
    newComment.appendChild(heart);
    newComment.appendChild(paragraph);
    cont.appendChild(newComment);

    check.addEventListener("click", function(){
        paragraph.classList.toggle("strike-out");
        if(check.checked){
            trash.addEventListener("click",function(){
                cont.removeChild(newComment);
            })
        }
    })
    
    heart.addEventListener("click", function(){
        heart.classList.toggle("red")
    })
}