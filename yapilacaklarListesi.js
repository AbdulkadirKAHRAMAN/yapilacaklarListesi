let thingsToDo = [];
if(localStorage.getItem("thingsToDo")){
    thingsToDo=JSON.parse(localStorage.getItem("thingsToDo"));
}


function isAccepted(msg, ...keys){
    const value = prompt(msg);
    if(keys.includes(value)){
        return value;
    }else{
        alert("Hatalı tuşlama yaptınız");
        return isAccepted(msg, ...keys);
    }
}

function listToDoList() {
const toDoList=thingsToDo.map((thingsToDo,index)=> `${index+1}. ${thingsToDo.jobName} ${thingsToDo.date}`).join("\n");
if(Array.isArray(thingsToDo) && thingsToDo.length === 0){
    alert("Yapılacak iş ekleyiniz!");
}else{
alert(toDoList);
}
}
function addingJobs(){
    const jobName=prompt("Yapılcak işi giriniz.");
    const date=prompt("Yapılacak tarihi giriniz.");
    thingsToDo.push(
        {
            jobName,
            date
        }
    )
    localStorage.setItem("thingsToDo", JSON.stringify(thingsToDo));
}

function mainMenu(){
    const value = isAccepted("Yapmak istediğiniz işlemi seciniz:\n1-Yapılacak işleri listele\n2-Yapılacak iş ekleyin \n3- Çıkış yapın","1","2","3");
    if(value==1){
        return listToDoList();
    }else if(value==2){
        return addingJobs();

    }
}
mainMenu();