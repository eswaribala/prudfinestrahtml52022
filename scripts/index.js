window.addEventListener('load',function(){

    var canvas=document.querySelector('#olympic');
    var canvasContext=canvas.getContext('2d');
    var colorArray=new Array('black','yellow','green')
    var centerX=canvas.width/2;
    var centerY=canvas.height/2;
    var x=-50;
    var y=0;
    for(let i=0;i<colorArray.length;i++){
        canvasContext.beginPath();
        canvasContext.arc(centerX+x,centerY+y,35,0,
            2*Math.PI,false)
        canvasContext.lineWidth=2;
        canvasContext.strokeStyle=colorArray[i];
        canvasContext.stroke();
        //canvasContext.closePath();
        x=x+25;
    }
    var colorArray=new Array('brown','blue');
    var x=-35;
    var y=35;
    for(let i=0;i<colorArray.length;i++){
        canvasContext.beginPath();
        canvasContext.arc(centerX+x,centerY+y,35,0,
            2*Math.PI,false)
        canvasContext.lineWidth=2;
        canvasContext.strokeStyle=colorArray[i];
        canvasContext.stroke();
        //canvasContext.closePath();
        x=x+35;
    }
    canvasContext.font = 'italic 24pt Calibri';
    canvasContext.fillStyle = "blue";
    canvasContext.fillText("Olympic Ring",centerX-95,centerY-45);

    var canvas=document.querySelector('#flag');
    var canvasContext=canvas.getContext('2d');

    var grd=canvasContext.createLinearGradient(0,0,canvas.width,canvas.height);
    grd.addColorStop(0.0,'orange');
    grd.addColorStop(0.33,'white');
    grd.addColorStop(0.66,'green');

    canvasContext.rect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle=grd;
    canvasContext.fill();

    var btnRef=document.querySelector('#websocket');
    btnRef.addEventListener('click',function(){
        var webSocket =
            new WebSocket('ws://localhost:7070/');

        webSocket.onerror = function(event) {
            onError(event)
        };

        webSocket.onopen = function(event) {
            onOpen(event)
        };

        webSocket.onmessage = function(event) {
            onMessage(event)
        };


    })
    function onMessage(event) {
        document.getElementById('messages').innerHTML
            += '<br />' + event.data;
        webSocket.send('pushing data..........');
    }

    function onOpen(event) {
        document.getElementById('messages').innerHTML
            = 'Connection established';
    }

    function onError(event) {
        alert(event.data);
    }

    function start() {
        webSocket.send('hello');
        return false;
    }



})
