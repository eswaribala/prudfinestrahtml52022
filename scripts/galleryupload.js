window.addEventListener('load',function(){



    var btnRef=document.querySelector('#upload');
    btnRef.addEventListener('click',function (){
       alert('button clicked....');
        filesRef=document.querySelector('#gallery');
        pattern=/image.*/

        for(let i=0;i<filesRef.files.length;i++){
            if(filesRef.files[i].type.match(pattern)){
                console.log("It is an image file");
                storeFile(i,filesRef.files[i]);
            }
        }

    })


})



function storeFile(index,file){

    var fileReader=new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload=function(){
        window.localStorage.setItem("photo"+index,fileReader.result);
    }
}
