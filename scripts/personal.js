var titles=new Array("Select","Mr","Mrs", "Miss","Ms");
var branches=new Array("Select","Adyar","Thiruvanmiyur","Guindy","Avadi")
window.addEventListener('load',function(){
    //window.alert("Document loaded....");
    var selectElement=document.querySelector("#titleData");
    var branchElement=document.querySelector("#branch");
    index=0;
    titles.forEach(title=>{
        selectElement.add(new Option(title,index));
        index++;
    })
    index=0;
    branches.forEach(branch=>{
        branchElement.add(new Option(branch,index));
        index++;
    })

    var buttonElement=document.querySelector('#next');




})

function validate(){
    var selectElement=document.querySelector("#titleData");
    var branchElement=document.querySelector("#branch");
    console.log(selectElement.value);
    console.log(branchElement.value);
    if((selectElement.value==0)&&(branchElement.value==0)) {
        selectElement.setAttribute("style","background-color:red;");
        branchElement.setAttribute("style","background-color:red;");
        return false;
    }
   else
       return true;
}



