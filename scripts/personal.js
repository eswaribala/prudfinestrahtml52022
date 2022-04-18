var titles=new Array("Select","Mr","Mrs", "Miss","Ms");
var branches=new Array("Select","Adyar","Thiruvanmiyur","Guindy","Avadi")
window.addEventListener('load',function(){
    //window.alert("Document loaded....");
    var selectElement=document.querySelector("#titleData");
    var branchElement=document.querySelector("#branch");

    titles.forEach(title=>{
        selectElement.add(new Option(title));
    })
    branches.forEach(branch=>{
        branchElement.add(new Option(branch));
    })

})



