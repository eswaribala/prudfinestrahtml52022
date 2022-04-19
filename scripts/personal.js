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
    var timeElement=document.querySelector("#contactTime");
    console.log(selectElement.value);
    console.log(branchElement.value);
    if((selectElement.value==0)&&(branchElement.value==0)) {
        selectElement.setAttribute("style","background-color:red;");
        branchElement.setAttribute("style","background-color:red;");
        return false;
    }
   else {
       var title=selectElement.value;
       var branch=branchElement.value
       var firstName=document.querySelector("#firstName").value;
        var lastName=document.querySelector("#lastName").value;
        var countryName=document.querySelector("#countryName").value;
        var phoneNo=document.querySelector("#phoneNo").value;
        var email=document.querySelector("#email").value;
        var contactTime=timeElement.value;
        var customerGroup=document.querySelector('[name="customer_group"]:checked').value;

        var contactObj={
            "title":title,
            "branch":branch,
            "firstName":firstName,
            "lastName":lastName,
            "country":countryName,
            "phone":phoneNo,
            "email":email,
            "time":contactTime,
            "type":customerGroup
        }
        //storage
        window.sessionStorage.setItem("contact",JSON.stringify(contactObj));
        window.alert(contactObj);
        return true;
    }
}



