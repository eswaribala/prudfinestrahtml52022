var titles=new Array("Mr","Mrs", "Miss","Ms");

window.addEventListener('load',function(){
    //window.alert("Document loaded....");
    var selectElement=document.querySelector("#titleData");

    for(var i=0;i<titles.length;i++){
       option=document.createElement('option');
        optionText=document.createTextNode(titles[i]);
        console.log(titles[i]);
        option.appendChild(optionText);
        selectElement.appendChild(option);
    }
})



