window.addEventListener('load',function(){

    var canvas=document.querySelector('#olympic');
    var canvasContext=canvas.getContext('2d');
    var colorArray=new Array('black','yellow','green')
    var centerX=canvas.width/2;
    var centerY=canvas.height/2;
    var x=-75;
    var y=0;
    for(let i=0;i<colorArray.length;i++){
        canvasContext.beginPath();
        canvasContext.arc(centerX+x,centerY+y,50,0,
            2*Math.PI,false)
        canvasContext.lineWidth=5;
        canvasContext.strokeStyle=colorArray[i];
        canvasContext.stroke();
        //canvasContext.closePath();
        x=x+75;
    }



})
