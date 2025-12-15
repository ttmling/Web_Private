function add(){
    let name = document.querySelector("#name").value;
    let score = Number(document.querySelector("#score").value);
    let stu_list = document.querySelector(".list");

    if(name==="" || isNaN(score)){
        alert("Không được để trống.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = name + " - " + score + " điểm";

    if(score >= 5){
        li.style.color = "green";
    }
    else{
        li.style.color = "red";
    }

    stu_list.appendChild(li);

    document.querySelector("#name").value = "";
    document.querySelector("#score").value = "";

    li.onclick = function(){
        this.remove();
    }
}