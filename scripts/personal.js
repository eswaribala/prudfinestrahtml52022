var titles=new Array("Select","Mr","Mrs", "Miss","Ms");

window.addEventListener('load',function(){
    //window.alert("Document loaded....");
    var selectElement=document.querySelector("#titleData");

    titles.forEach(title=>{
        selectElement.add(new Option(title));
    })


})



