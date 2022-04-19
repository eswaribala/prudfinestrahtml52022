window.addEventListener('load',function(){



    var btnRef=document.querySelector('#upload');
    btnRef.addEventListener('click',function (){
      // alert('button clicked....');
        filesRef=document.querySelector('#gallery');
        pattern=/image.*/
        window.localStorage.setItem('count',filesRef.files.length);
        for(let i=0;i<filesRef.files.length;i++){
            if(filesRef.files[i].type.match(pattern)){
                console.log("It is an image file");
                storeFile(i,filesRef.files[i]);
            }
        }

    })

    var downloadBtnRef=document.querySelector('#download');
    downloadBtnRef.addEventListener('click',function (event){
        event.preventDefault();
       this.disabled=true;
        var count=window.localStorage.getItem('count');
        for(let i=0;i<count;i++) {
            if(window.localStorage.getItem('photo'+i)!=undefined){
                displayphotos(window.localStorage.getItem('photo'+i));
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

function displayphotos(fileName){

    var image=new Image();
    var photoArea=document.querySelector('#photos');
    image.onload=function(){
     photoArea.appendChild(image);
    }
    image.src=fileName;
    image.width=400;
    image.height=200;

}
