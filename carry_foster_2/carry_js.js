function main() {
    $(function() {
        $( "#dialog" ).dialog();
    });
    btn_main.style.backgroundColor='#4CAF50';
    btn_main.style.color='white';
    btn_main.style.fontSize='bold';
    document.getElementById('btn_main').value="POWER IS ON";
    document.getElementById('btn1').disabled=false;
    //document.getElementById('btn7').disabled=false;
    //document.getElementById('btn8').disabled=false;
    //document.getElementById('btn9').disabled=false;
    //document.getElementById('btn10').disabled=false;
    //document.getElementById('btn2').disabled=false;
    //document.getElementById('btn3').disabled=false;
    //document.getElementById('btn5').disabled=false;
    //document.getElementById('btn6').disabled=false;
    //document.getElementById('btn11').disabled=false;
    //document.getElementById('btnl').disabled=false;
    //document.getElementById('btnr').disabled=false;
}

/*----------------------------------------------------*/


var canvas=document.getElementById("mycanvas");
var context=canvas.getContext("2d");
var i;

/*context.fillRect(20, 20, 20, 100);
context.fillRect(40, 40, 20, 100);*/

context.font = "23px Arial";
context.fillText("A", 240, 310);

context.font = "23px Arial";
context.fillText("C", 545, 310);

context.font = "23px Arial";
context.fillText("E", 80, 420);

context.font = "23px Arial";
context.fillText("F", 710, 420);

    context.beginPath();
    context.moveTo(49, 395);
    context.lineTo(751, 395);
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();

    for (var i = 0, j = 8; i <= 700; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }

context.beginPath();
context.moveTo(70,250);
context.lineTo(70,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(100,280);
context.lineTo(100,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(68,250);
context.lineTo(150,250);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(98,280);
context.lineTo(150,280);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(150,248);
context.lineTo(150,282);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(70,388);
context.lineTo(100,388);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(700,280);
context.lineTo(700,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(730,250);
context.lineTo(730,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(650,250);
context.lineTo(732,250);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(650,280);
context.lineTo(702,280);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(652,250);
context.lineTo(652,280);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(700,388);
context.lineTo(730,388);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "black";
context.rect(220, 250, 60, 30);
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "black";
context.rect(350, 250, 100, 30);
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "black";
context.rect(523, 250, 60, 30);
context.stroke();

context.beginPath();
context.moveTo(234,260);
context.lineTo(234,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(122,260);
context.lineTo(122,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(270,260);
context.lineTo(270,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(383,260);
context.lineTo(383,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(422,260);
context.lineTo(422,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(534,260);
context.lineTo(534,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(571,260);
context.lineTo(571,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(684,260);
context.lineTo(684,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(253,260);
context.lineTo(253,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(553,260);
context.lineTo(553,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(403,260);
context.lineTo(403,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(85,377);
context.lineTo(85,383);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(715,377);
context.lineTo(715,383);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();




// var update = function (x, y) {
//     var tempX = document.getElementById("mouseX");
//     var tempY = document.getElementById("mouseY");
//     tempX.innerHTML = x;
//     tempY.innerHTML = y;
// };
//
// var getMousePos = function (canvas, e) {
//     var boundingClientRect = canvas.getBoundingClientRect();
//     var tx = e.clientX - boundingClientRect.left;
//     var ty = e.clientY - boundingClientRect.top;
//     return {
//         x: tx < 0 ? 0 : tx,
//         y: ty < 0 ? 0 : ty
//     };
// };


function bench() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(85, 200);
    context.lineTo(715, 200);
    context.strokeStyle = "black"
    context.lineWidth = 5;
    context.stroke();
    context.beginPath();
    context.moveTo(399, 200);
    context.lineTo(751, 200);
    context.strokeStyle = "black"
    context.lineWidth = 5;
    context.stroke();
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.fillText("F", 240, 248);
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.fillText("2F", 132, 248);
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.fillText("F", 491, 248);
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.fillText("2F", 587, 248);

    for (var i = 0, j = 8; i <= 700; i += 10) {
        if (i % 50 === 0) {
            if (!(i >= 300 && i <= 350)) {
                context.beginPath();
                context.moveTo(50 + i, 200);
                context.lineTo(50 + i, 200 + j + j);
                context.strokeStyle = "black"
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {

            } else {
                context.beginPath();
                context.moveTo(50 + i, 200);
                context.lineTo(50 + i, 200 + j);
                context.strokeStyle = "black"
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }
}



var pointx=403;
var count=50;

//var r1 = document.getElementById("resist");
//var str1 = r1.options[r1.selectedIndex].text;
//document.getElementById('rest').innerHTML=str1;

function main3l() {


    document.getElementById('btnr').disabled=false;
    context.clearRect(0,0,canvas.width,canvas.height);

    context.font = "23px Arial";
    context.fillText("A", 240, 310);

    context.font = "23px Arial";
    context.fillText("C", 545, 310);

    context.font = "23px Arial";
    context.fillText("E", 80, 420);

    context.font = "23px Arial";
    context.fillText("F", 710, 420);

    context.beginPath();
    context.moveTo(49, 395);
    context.lineTo(751, 395);
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();

    for (var i = 0, j = 8; i <= 700; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }


    context.beginPath();
context.moveTo(70,250);
context.lineTo(70,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(100,280);
context.lineTo(100,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(68,250);
context.lineTo(150,250);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(98,280);
context.lineTo(150,280);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(150,248);
context.lineTo(150,282);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(70,388);
context.lineTo(100,388);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(700,280);
context.lineTo(700,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(730,250);
context.lineTo(730,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(650,250);
context.lineTo(732,250);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(650,280);
context.lineTo(702,280);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(652,250);
context.lineTo(652,280);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(700,388);
context.lineTo(730,388);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "black";
context.rect(220, 250, 60, 30);
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "black";
context.rect(350, 250, 100, 30);
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "black";
context.rect(523, 250, 60, 30);
context.stroke();

context.beginPath();
context.moveTo(234,260);
context.lineTo(234,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(122,260);
context.lineTo(122,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(270,260);
context.lineTo(270,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(383,260);
context.lineTo(383,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(422,260);
context.lineTo(422,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(534,260);
context.lineTo(534,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(571,260);
context.lineTo(571,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(684,260);
context.lineTo(684,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(253,260);
context.lineTo(253,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(553,260);
context.lineTo(553,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(403,260);
context.lineTo(403,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(85,377);
context.lineTo(85,383);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(715,377);
context.lineTo(715,383);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();
	 var image;

	if(pointx>85){
        pointx = pointx - 6.4;
        count=count - 1 ;


    }
    else{
	    alert("value can not go below");
    }
    //document.getElementById('showl').innerHTML=Number(pointx).toFixed(2) ;

    document.getElementById('showl').innerHTML= count;
    var cntr= 100 - count;

    document.getElementById('showr').innerHTML= cntr;


    for(i=1;i<=10;i++)
	{
		 if (i == 1) {
        image = document.getElementById("img1");
        context.drawImage(image, 120,168);

             context.font = "23px Arial";
             context.fillText("X", 170, 155);

        context.beginPath();
        context.moveTo(234,250);
        context.lineTo(234,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(122,250);
        context.lineTo(122,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }
    if (i == 7) {
        image = document.getElementById("img1");
        context.drawImage(image, 269,168);

        context.font = "23px Arial";
        context.fillText("P", 320, 155);

        context.beginPath();
        context.moveTo(270,250);
        context.lineTo(270,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(383,250);
        context.lineTo(383,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 8) {
        image = document.getElementById("img1");
        context.drawImage(image, 420,168);

        context.font = "23px Arial";
        context.fillText("Q", 470, 155);

        context.beginPath();
        context.moveTo(422,250);
        context.lineTo(422,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(534,250);
        context.lineTo(534,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 9) {
        image = document.getElementById("img1");
        context.drawImage(image, 570,168);

        context.font = "23px Arial";
        context.fillText("Y", 620, 155);

        context.beginPath();
        context.moveTo(571,250);
        context.lineTo(571,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(684,250);
        context.lineTo(684,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 10) {
        image = document.getElementById("img6");
        context.drawImage(image, 383,310);

        var r1 = document.getElementById("resist");
        var str1 = r1.options[r1.selectedIndex].text;



        if(str1==0.1 && count==47){
             image = document.getElementById("img5");
             context.drawImage(image, 383,310);
         }
         else if(str1==0.2 && count==46){
             image = document.getElementById("img5");
             context.drawImage(image, 383,310);
         }
        else if(str1==0.3 && count==45){
            image = document.getElementById("img5");
            context.drawImage(image, 383,310);
        }
        else if(str1==0.4 && count==44){
            image = document.getElementById("img5");
            context.drawImage(image, 383,310);
        }
        else if(str1==0.5 && count==43){
            image = document.getElementById("img5");
            context.drawImage(image, 383,310);
        }
        else{
            image = document.getElementById("img6");
            context.drawImage(image, 383,310);
        }

        context.beginPath();
        context.moveTo(403,265);
        context.lineTo(403,312);
        context.strokeStyle = "grey";
        context.lineWidth = 4;
        context.stroke();

        context.beginPath();
        context.moveTo(85,380);
        context.lineTo(715,380);
        context.strokeStyle = "red";
        context.lineWidth = 7;
        context.stroke();

        context.beginPath();
        context.moveTo(403,350);
        //context.lineTo(403,380);
        context.lineTo(pointx,380);
        context.strokeStyle = "grey";
        context.lineWidth = 4;
        context.stroke();


    }



    else if (i == 2) {
        image = document.getElementById("img2");
        context.drawImage(image, 300,35);
    }

    else if (i == 3) {
        image = document.getElementById("img11");
        context.drawImage(image, 475,35);
    }
    /*else if (i == 4) {
        image = document.getElementById("img4");
        context.drawImage(image, 150, 185);
    }*/

    else if(i==5){

        context.beginPath();
        context.moveTo(253, 10);
        context.lineTo(253, 262);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(251, 10);
        context.lineTo(323, 10);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(323, 8);
        context.lineTo(323, 35);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(398, 8);
        context.lineTo(398, 35);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(396, 8);
        context.lineTo(440, 8);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(439, 7);
        context.lineTo(439, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(437, 75);
        context.lineTo(478, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(522, 75);
        context.lineTo(553, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(553, 73);
        context.lineTo(553, 260);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();


    }

		
	}
  

}
//1pt=6px


function main3le() {

    document.getElementById('btnr').disabled=false;
    context.clearRect(0,0,canvas.width,canvas.height);

    context.font = "23px Arial";
    context.fillText("A", 240, 310);

    context.font = "23px Arial";
    context.fillText("C", 545, 310);

    context.font = "23px Arial";
    context.fillText("E", 80, 420);

    context.font = "23px Arial";
    context.fillText("F", 710, 420);

    context.beginPath();
    context.moveTo(49, 395);
    context.lineTo(751, 395);
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();

    for (var i = 0, j = 8; i <= 700; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }


    context.beginPath();
    context.moveTo(70,250);
    context.lineTo(70,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(100,280);
    context.lineTo(100,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(68,250);
    context.lineTo(150,250);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(98,280);
    context.lineTo(150,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(150,248);
    context.lineTo(150,282);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(70,388);
    context.lineTo(100,388);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(700,280);
    context.lineTo(700,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(730,250);
    context.lineTo(730,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(650,250);
    context.lineTo(732,250);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(650,280);
    context.lineTo(702,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(652,250);
    context.lineTo(652,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(700,388);
    context.lineTo(730,388);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(220, 250, 60, 30);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(350, 250, 100, 30);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(523, 250, 60, 30);
    context.stroke();

    context.beginPath();
    context.moveTo(234,260);
    context.lineTo(234,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(122,260);
    context.lineTo(122,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(270,260);
    context.lineTo(270,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(383,260);
    context.lineTo(383,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(422,260);
    context.lineTo(422,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(534,260);
    context.lineTo(534,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(571,260);
    context.lineTo(571,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(684,260);
    context.lineTo(684,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(253,260);
    context.lineTo(253,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(553,260);
    context.lineTo(553,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(403,260);
    context.lineTo(403,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(85,377);
    context.lineTo(85,383);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(715,377);
    context.lineTo(715,383);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();
    var image;

    if(pointx>85){
        pointx = pointx - 6.4;
        count=count - 1 ;


    }
    else{
        alert("value can not go below");
    }
    //document.getElementById('showl').innerHTML=Number(pointx).toFixed(2) ;
    document.getElementById('showl').innerHTML= count;
    var cntr=  count;

    document.getElementById('showr').innerHTML= cntr;


    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("Y", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("X", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img6");
            context.drawImage(image, 383,310);

            var r1 = document.getElementById("resist");
            var str1 = r1.options[r1.selectedIndex].text;



            if(str1==0.1 && count==51){
                image = document.getElementById("img5");
                context.drawImage(image, 383,310);
            }
            else if(str1==0.2 && count==52){
                image = document.getElementById("img5");
                context.drawImage(image, 383,310);
            }
            else if(str1==0.3 && count==53){
                image = document.getElementById("img5");
                context.drawImage(image, 383,310);
            }
            else if(str1==0.4 && count==54){
                image = document.getElementById("img5");
                context.drawImage(image, 383,310);
            }
            else if(str1==0.5 && count==55){
                image = document.getElementById("img5");
                context.drawImage(image, 383,310);
            }
            else{
                image = document.getElementById("img6");
                context.drawImage(image, 383,310);
            }

            context.beginPath();
            context.moveTo(403,265);
            context.lineTo(403,312);
            context.strokeStyle = "grey";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "red";
            context.lineWidth = 7;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "grey";
            context.lineWidth = 4;
            context.stroke();


        }



        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }

        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 262);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 260);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();


        }


    }


}



function main3r() {
context.clearRect(0,0,canvas.width,canvas.height);

    context.font = "23px Arial";
    context.fillText("A", 240, 310);

    context.font = "23px Arial";
    context.fillText("C", 545, 310);

    context.font = "23px Arial";
    context.fillText("E", 80, 420);

    context.font = "23px Arial";
    context.fillText("F", 710, 420);

    context.beginPath();
    context.moveTo(49, 395);
    context.lineTo(751, 395);
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();

    for (var i = 0, j = 8; i <= 700; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }


    if(pointx<717) {
    pointx = pointx + 6.4;
    count = count + 1;
}
else{
    alert("value exceeds");
}

//document.getElementById('showr').innerHTML=Number(pointx).toFixed(2);
    //document.getElementById('showr').innerHTML= 100 - parseInt(count);
    document.getElementById('showl').innerHTML= count;
    var cntr= 100 - count;

    document.getElementById('showr').innerHTML= cntr;


context.beginPath();
context.moveTo(70,250);
context.lineTo(70,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(100,280);
context.lineTo(100,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(68,250);
context.lineTo(150,250);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(98,280);
context.lineTo(150,280);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(150,248);
context.lineTo(150,282);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(70,388);
context.lineTo(100,388);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(700,280);
context.lineTo(700,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(730,250);
context.lineTo(730,390);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(650,250);
context.lineTo(732,250);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(650,280);
context.lineTo(702,280);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(652,250);
context.lineTo(652,280);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.moveTo(700,388);
context.lineTo(730,388);
context.strokeStyle = "black";
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "black";
context.rect(220, 250, 60, 30);
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "black";
context.rect(350, 250, 100, 30);
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "black";
context.rect(523, 250, 60, 30);
context.stroke();

context.beginPath();
context.moveTo(234,260);
context.lineTo(234,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(122,260);
context.lineTo(122,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(270,260);
context.lineTo(270,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(383,260);
context.lineTo(383,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(422,260);
context.lineTo(422,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(534,260);
context.lineTo(534,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(571,260);
context.lineTo(571,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(684,260);
context.lineTo(684,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(253,260);
context.lineTo(253,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(553,260);
context.lineTo(553,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(403,260);
context.lineTo(403,266);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(85,377);
context.lineTo(85,383);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(715,377);
context.lineTo(715,383);
context.strokeStyle = "black";
context.lineWidth = 6;
context.stroke();
	 var image;
	 	for(i=1;i<=10;i++)
	{
		 if (i == 1) {
        image = document.getElementById("img1");
        context.drawImage(image, 120,168);

             context.font = "23px Arial";
             context.fillText("X", 170, 155);

        context.beginPath();
        context.moveTo(234,250);
        context.lineTo(234,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(122,250);
        context.lineTo(122,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }
    if (i == 7) {
        image = document.getElementById("img1");
        context.drawImage(image, 269,168);

        context.font = "23px Arial";
        context.fillText("P", 320, 155);

        context.beginPath();
        context.moveTo(270,250);
        context.lineTo(270,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(383,250);
        context.lineTo(383,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 8) {
        image = document.getElementById("img1");
        context.drawImage(image, 420,168);

        context.font = "23px Arial";
        context.fillText("Q", 470, 155);

        context.beginPath();
        context.moveTo(422,250);
        context.lineTo(422,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(534,250);
        context.lineTo(534,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 9) {
        image = document.getElementById("img1");
        context.drawImage(image, 570,168);

        context.font = "23px Arial";
        context.fillText("Y", 620, 155);

        context.beginPath();
        context.moveTo(571,250);
        context.lineTo(571,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(684,250);
        context.lineTo(684,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 10) {
        image = document.getElementById("img6");
        context.drawImage(image, 383,310);

        var r1 = document.getElementById("resist");
        var str1 = r1.options[r1.selectedIndex].text;

        if(str1==0.1 && count==47){
            image = document.getElementById("img5");
            context.drawImage(image, 383,310);
        }
        else if(str1==0.2 && count==46){
            image = document.getElementById("img5");
            context.drawImage(image, 383,310);
        }
        else if(str1==0.3 && count==45){
            image = document.getElementById("img5");
            context.drawImage(image, 383,310);
        }
        else if(str1==0.4 && count==44){
            image = document.getElementById("img5");
            context.drawImage(image, 383,310);
        }
        else if(str1==0.5 && count==43){
            image = document.getElementById("img5");
            context.drawImage(image, 383,310);
        }
        else{
            image = document.getElementById("img6");
            context.drawImage(image, 383,310);
        }

        context.beginPath();
        context.moveTo(403,265);
        context.lineTo(403,312);
        context.strokeStyle = "grey";
        context.lineWidth = 4;
        context.stroke();

        context.beginPath();
        context.moveTo(85,380);
        context.lineTo(715,380);
        context.strokeStyle = "red";
        context.lineWidth = 7;
        context.stroke();

        context.beginPath();
        context.moveTo(403,350);
        //context.lineTo(403,380);
        context.lineTo(pointx,380);
        context.strokeStyle = "grey";
        context.lineWidth = 4;
        context.stroke();
    }

    else if (i == 11) {
        image = document.getElementById("img11");
        context.drawImage(image, 475,35);
    }

    else if (i == 2) {
        image = document.getElementById("img2");
        context.drawImage(image, 300,35);
    }
    else if (i == 3) {
        image = document.getElementById("img11");
        context.drawImage(image, 475,35);
    }
    /*else if (i == 4) {
        image = document.getElementById("img4");
        context.drawImage(image, 150, 185);
    }*/

    else if(i==5){

        context.beginPath();
        context.moveTo(253, 10);
        context.lineTo(253, 262);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(251, 10);
        context.lineTo(323, 10);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(323, 8);
        context.lineTo(323, 35);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(398, 8);
        context.lineTo(398, 35);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(396, 8);
        context.lineTo(440, 8);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(439, 7);
        context.lineTo(439, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(437, 75);
        context.lineTo(478, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(522, 75);
        context.lineTo(553, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(553, 73);
        context.lineTo(553, 260);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();


    }

		
	}

}


function main3re() {
    context.clearRect(0,0,canvas.width,canvas.height);

    context.font = "23px Arial";
    context.fillText("A", 240, 310);

    context.font = "23px Arial";
    context.fillText("C", 545, 310);

    context.font = "23px Arial";
    context.fillText("E", 80, 420);

    context.font = "23px Arial";
    context.fillText("F", 710, 420);

    context.beginPath();
    context.moveTo(49, 395);
    context.lineTo(751, 395);
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();

    for (var i = 0, j = 8; i <= 700; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }


    if(pointx<717) {
        pointx = pointx + 6.4;
        count = count + 1;
    }
    else{
        alert("value exceeds");
    }

//document.getElementById('showr').innerHTML=Number(pointx).toFixed(2);
    document.getElementById('showl').innerHTML= count;
    var cntr=  count;

    document.getElementById('showr').innerHTML= cntr;


    context.beginPath();
    context.moveTo(70,250);
    context.lineTo(70,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(100,280);
    context.lineTo(100,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(68,250);
    context.lineTo(150,250);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(98,280);
    context.lineTo(150,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(150,248);
    context.lineTo(150,282);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(70,388);
    context.lineTo(100,388);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(700,280);
    context.lineTo(700,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(730,250);
    context.lineTo(730,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(650,250);
    context.lineTo(732,250);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(650,280);
    context.lineTo(702,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(652,250);
    context.lineTo(652,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(700,388);
    context.lineTo(730,388);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(220, 250, 60, 30);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(350, 250, 100, 30);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(523, 250, 60, 30);
    context.stroke();

    context.beginPath();
    context.moveTo(234,260);
    context.lineTo(234,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(122,260);
    context.lineTo(122,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(270,260);
    context.lineTo(270,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(383,260);
    context.lineTo(383,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(422,260);
    context.lineTo(422,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(534,260);
    context.lineTo(534,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(571,260);
    context.lineTo(571,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(684,260);
    context.lineTo(684,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(253,260);
    context.lineTo(253,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(553,260);
    context.lineTo(553,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(403,260);
    context.lineTo(403,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(85,377);
    context.lineTo(85,383);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(715,377);
    context.lineTo(715,383);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();
    var image;
    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("Y", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("X", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img6");
            context.drawImage(image, 383,310);

            var r1 = document.getElementById("resist");
            var str1 = r1.options[r1.selectedIndex].text;



            if(str1==0.1 && count==51){
                image = document.getElementById("img5");
                context.drawImage(image, 383,310);
            }
            else if(str1==0.2 && count==52){
                image = document.getElementById("img5");
                context.drawImage(image, 383,310);
            }
            else if(str1==0.3 && count==53){
                image = document.getElementById("img5");
                context.drawImage(image, 383,310);
            }
            else if(str1==0.4 && count==54){
                image = document.getElementById("img5");
                context.drawImage(image, 383,310);
            }
            else if(str1==0.5 && count==55){
                image = document.getElementById("img5");
                context.drawImage(image, 383,310);
            }
            else{
                image = document.getElementById("img6");
                context.drawImage(image, 383,310);
            }

            context.beginPath();
            context.moveTo(403,265);
            context.lineTo(403,312);
            context.strokeStyle = "grey";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "red";
            context.lineWidth = 7;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "grey";
            context.lineWidth = 4;
            context.stroke();
        }

        else if (i == 11) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }

        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }
        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 262);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 260);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();


        }


    }


}



function mouseevt(x,y) {
    var image;
    if (i == 1) {
        image = document.getElementById("img1");
        context.drawImage(image, 120,168);

        context.font = "23px Arial";
        context.fillText("X", 170, 155);

        context.beginPath();
        context.moveTo(234,250);
        context.lineTo(234,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(122,250);
        context.lineTo(122,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }
    if (i == 7) {
        image = document.getElementById("img1");
        context.drawImage(image, 269,168);

        context.font = "23px Arial";
        context.fillText("P", 320, 155);

        context.beginPath();
        context.moveTo(270,250);
        context.lineTo(270,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(383,250);
        context.lineTo(383,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 8) {
        image = document.getElementById("img1");
        context.drawImage(image, 420,168);

        context.font = "23px Arial";
        context.fillText("Q", 470, 155);

        context.beginPath();
        context.moveTo(422,250);
        context.lineTo(422,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(534,250);
        context.lineTo(534,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 9) {
        image = document.getElementById("img1");
        context.drawImage(image, 570,168);

        context.font = "23px Arial";
        context.fillText("Y", 620, 155);

        context.beginPath();
        context.moveTo(571,250);
        context.lineTo(571,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.moveTo(684,250);
        context.lineTo(684,265);
        context.strokeStyle = "grey";
        context.lineWidth = 2;
        context.stroke();
    }

    if (i == 10) {
        image = document.getElementById("img6");
        context.drawImage(image, 383,310);

        context.beginPath();
        context.moveTo(403,265);
        context.lineTo(403,312);
        context.strokeStyle = "grey";
        context.lineWidth = 4;
        context.stroke();

        context.beginPath();
        context.moveTo(85,380);
        context.lineTo(715,380);
        context.strokeStyle = "red";
        context.lineWidth = 7;
        context.stroke();

        context.beginPath();
        context.moveTo(403,350);
        //context.lineTo(403,380);
        context.lineTo(403,380);
        context.strokeStyle = "grey";
        context.lineWidth = 4;
        context.stroke();

        /////////////////

    }

    else if (i == 2) {
        image = document.getElementById("img2");
        context.drawImage(image, 300,35);
    }
    else if (i == 3) {
        image = document.getElementById("img3");
        context.drawImage(image, 475,35);
    }
    else if (i == 11) {
        image = document.getElementById("img11");
        context.drawImage(image, 475,35);
        alert("Now The Circuit is fully connected");
    }
    else if (i == 4) {
        image = document.getElementById("img4");
        context.drawImage(image, 150, 185);
    }

    else if(i==5){

        context.beginPath();
        context.moveTo(253, 10);
        context.lineTo(253, 262);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(251, 10);
        context.lineTo(323, 10);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(323, 8);
        context.lineTo(323, 35);
        context.strokeStyle = "brown";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(398, 8);
        context.lineTo(398, 35);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(396, 8);
        context.lineTo(440, 8);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(439, 7);
        context.lineTo(439, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(437, 75);
        context.lineTo(478, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(522, 75);
        context.lineTo(553, 75);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(553, 73);
        context.lineTo(553, 260);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();


    }
    else if(i==6){
        context.beginPath();
        context.moveTo(203,90);
        context.lineTo(330,90);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(330,90);
        context.lineTo(330,120);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(330,184);
        context.lineTo(330,215);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(330,215);
        context.lineTo(195,215);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(157,215);
        context.lineTo(30,215);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(30,215);
        context.lineTo(30,92);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.moveTo(30,92);
        context.lineTo(70,92);
        context.strokeStyle = "black";
        context.lineWidth = 3;
        context.stroke();
    }
}

function main3e() {

    context.clearRect(0,0,canvas.width,canvas.height);
    btnl.style.display='none';

    // $('#btnl').css("display","none");
    // $('#btnr').css("display","none");
    // $('#btnle').css("display","");
    // $('#btnre').css("display","");
    // $('#btnx').css("display","");
    // $('#btne').css("display","none");

    btnr.style.display='none';
    btnle.style.display='';
    btnre.style.display='';
    btnx.style.display='';
    btne.style.display='none';

    l2.style.display='';
    l1.style.display='none';

    context.font = "23px Arial";
    context.fillText("X", 620, 155);

    context.font = "23px Arial";
    context.fillText("Y", 170, 155);

    context.font = "23px Arial";
    context.fillText("A", 240, 310);

    context.font = "23px Arial";
    context.fillText("C", 545, 310);

    context.font = "23px Arial";
    context.fillText("E", 80, 420);

    context.font = "23px Arial";
    context.fillText("F", 710, 420);

    context.beginPath();
    context.moveTo(49, 395);
    context.lineTo(751, 395);
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();

    for (var i = 0, j = 8; i <= 700; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }


    context.beginPath();
    context.moveTo(70,250);
    context.lineTo(70,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(100,280);
    context.lineTo(100,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(68,250);
    context.lineTo(150,250);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(98,280);
    context.lineTo(150,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(150,248);
    context.lineTo(150,282);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(70,388);
    context.lineTo(100,388);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(700,280);
    context.lineTo(700,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(730,250);
    context.lineTo(730,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(650,250);
    context.lineTo(732,250);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(650,280);
    context.lineTo(702,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(652,250);
    context.lineTo(652,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(700,388);
    context.lineTo(730,388);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(220, 250, 60, 30);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(350, 250, 100, 30);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(523, 250, 60, 30);
    context.stroke();

    context.beginPath();
    context.moveTo(234,260);
    context.lineTo(234,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(122,260);
    context.lineTo(122,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(270,260);
    context.lineTo(270,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(383,260);
    context.lineTo(383,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(422,260);
    context.lineTo(422,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(534,260);
    context.lineTo(534,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(571,260);
    context.lineTo(571,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(684,260);
    context.lineTo(684,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(253,260);
    context.lineTo(253,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(553,260);
    context.lineTo(553,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(403,260);
    context.lineTo(403,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(85,377);
    context.lineTo(85,383);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(715,377);
    context.lineTo(715,383);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    var image;
    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("Y", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("X", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img6");
            context.drawImage(image, 383,310);

            context.beginPath();
            context.moveTo(403,265);
            context.lineTo(403,312);
            context.strokeStyle = "grey";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "red";
            context.lineWidth = 7;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "grey";
            context.lineWidth = 4;
            context.stroke();
        }

        else if (i == 11) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }

        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }
        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 262);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 260);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();


        }

    }

}

function main3x() {

    context.clearRect(0,0,canvas.width,canvas.height);

    btnl.style.display='';
    btnr.style.display='';
    btnx.style.display='none';
    btne.style.display='';
    btnle.style.display='none';
    btnre.style.display='none';
    l2.style.display='none';
    l1.style.display='';

     context.font = "23px Arial";
    // context.fillText("X", 620, 155);
    //
    // context.font = "23px Arial";
    // context.fillText("Y", 170, 155);

    context.font = "23px Arial";
    context.fillText("A", 240, 310);

    context.font = "23px Arial";
    context.fillText("C", 545, 310);

    context.font = "23px Arial";
    context.fillText("E", 80, 420);

    context.font = "23px Arial";
    context.fillText("F", 710, 420);

    context.beginPath();
    context.moveTo(49, 395);
    context.lineTo(751, 395);
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();

    for (var i = 0, j = 8; i <= 700; i += 10) {
        if (i % 50 === 0) {
            if (!(i > 300 && i < 350)) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j + j);
                context.strokeStyle = "black";
                context.lineWidth = 2;
                context.stroke();
            }
        } else {
            if (i >= 300 && i <= 350) {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            } else {
                context.beginPath();
                context.moveTo(50 + i, 395);
                context.lineTo(50 + i, 395 + j);
                context.strokeStyle = "black";
                context.lineWidth = 1;
                context.stroke();
            }

        }
    }


    context.beginPath();
    context.moveTo(70,250);
    context.lineTo(70,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(100,280);
    context.lineTo(100,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(68,250);
    context.lineTo(150,250);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(98,280);
    context.lineTo(150,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(150,248);
    context.lineTo(150,282);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(70,388);
    context.lineTo(100,388);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(700,280);
    context.lineTo(700,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(730,250);
    context.lineTo(730,390);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(650,250);
    context.lineTo(732,250);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(650,280);
    context.lineTo(702,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(652,250);
    context.lineTo(652,280);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.moveTo(700,388);
    context.lineTo(730,388);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(220, 250, 60, 30);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(350, 250, 100, 30);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.rect(523, 250, 60, 30);
    context.stroke();

    context.beginPath();
    context.moveTo(234,260);
    context.lineTo(234,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(122,260);
    context.lineTo(122,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(270,260);
    context.lineTo(270,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(383,260);
    context.lineTo(383,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(422,260);
    context.lineTo(422,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(534,260);
    context.lineTo(534,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(571,260);
    context.lineTo(571,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(684,260);
    context.lineTo(684,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(253,260);
    context.lineTo(253,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(553,260);
    context.lineTo(553,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(403,260);
    context.lineTo(403,266);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(85,377);
    context.lineTo(85,383);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(715,377);
    context.lineTo(715,383);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();

    var image;
    for(i=1;i<=10;i++)
    {
        if (i == 1) {
            image = document.getElementById("img1");
            context.drawImage(image, 120,168);

            context.font = "23px Arial";
            context.fillText("X", 170, 155);

            context.beginPath();
            context.moveTo(234,250);
            context.lineTo(234,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(122,250);
            context.lineTo(122,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }
        if (i == 7) {
            image = document.getElementById("img1");
            context.drawImage(image, 269,168);

            context.font = "23px Arial";
            context.fillText("P", 320, 155);

            context.beginPath();
            context.moveTo(270,250);
            context.lineTo(270,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(383,250);
            context.lineTo(383,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 8) {
            image = document.getElementById("img1");
            context.drawImage(image, 420,168);

            context.font = "23px Arial";
            context.fillText("Q", 470, 155);

            context.beginPath();
            context.moveTo(422,250);
            context.lineTo(422,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(534,250);
            context.lineTo(534,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 9) {
            image = document.getElementById("img1");
            context.drawImage(image, 570,168);

            context.font = "23px Arial";
            context.fillText("Y", 620, 155);

            context.beginPath();
            context.moveTo(571,250);
            context.lineTo(571,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();

            context.beginPath();
            context.moveTo(684,250);
            context.lineTo(684,265);
            context.strokeStyle = "grey";
            context.lineWidth = 2;
            context.stroke();
        }

        if (i == 10) {
            image = document.getElementById("img6");
            context.drawImage(image, 383,310);

            context.beginPath();
            context.moveTo(403,265);
            context.lineTo(403,312);
            context.strokeStyle = "grey";
            context.lineWidth = 4;
            context.stroke();

            context.beginPath();
            context.moveTo(85,380);
            context.lineTo(715,380);
            context.strokeStyle = "red";
            context.lineWidth = 7;
            context.stroke();

            context.beginPath();
            context.moveTo(403,350);
            //context.lineTo(403,380);
            context.lineTo(pointx,380);
            context.strokeStyle = "grey";
            context.lineWidth = 4;
            context.stroke();
        }

        else if (i == 11) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }

        else if (i == 2) {
            image = document.getElementById("img2");
            context.drawImage(image, 300,35);
        }
        else if (i == 3) {
            image = document.getElementById("img11");
            context.drawImage(image, 475,35);
        }
        /*else if (i == 4) {
            image = document.getElementById("img4");
            context.drawImage(image, 150, 185);
        }*/

        else if(i==5){

            context.beginPath();
            context.moveTo(253, 10);
            context.lineTo(253, 262);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(251, 10);
            context.lineTo(323, 10);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(323, 8);
            context.lineTo(323, 35);
            context.strokeStyle = "brown";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(398, 8);
            context.lineTo(398, 35);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(396, 8);
            context.lineTo(440, 8);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(439, 7);
            context.lineTo(439, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(437, 75);
            context.lineTo(478, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(522, 75);
            context.lineTo(553, 75);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();

            context.beginPath();
            context.moveTo(553, 73);
            context.lineTo(553, 260);
            context.strokeStyle = "black";
            context.lineWidth = 3;
            context.stroke();


        }

    }

}


function main1() {
    i = 1;
    btn1.style.backgroundColor='#57A0D3';
    btn1.style.color='white';
    btn1.style.border='2px solid blue';
    document.getElementById('btn7').disabled=false;
}
function main7() {
    i = 7;
    btn7.style.backgroundColor='#57A0D3';
    btn7.style.color='white';
    btn7.style.border='2px solid blue';
    document.getElementById('btn8').disabled=false;
}

function main8() {
    i = 8;
    btn8.style.backgroundColor='#57A0D3';
    btn8.style.color='white';
    btn8.style.border='2px solid blue';
    document.getElementById('btn9').disabled=false;
}

function main9() {
    i = 9;
    btn9.style.backgroundColor='#57A0D3';
    btn9.style.color='white';
    btn9.style.border='2px solid blue';
    document.getElementById('btn10').disabled=false;
}

function main10() {
    i = 10;
    btn10.style.backgroundColor='#57A0D3';
    btn10.style.color='white';
    btn10.style.border='2px solid blue';
    document.getElementById('btn2').disabled=false;
}
function main11() {
    i = 11;
    btn11.style.backgroundColor='#57A0D3';
    btn11.style.color='white';
    btn11.style.border='2px solid blue';
    document.getElementById('btnl').disabled=false;
}

function main2() {
    i = 2;
    btn2.style.backgroundColor='#57A0D3';
    btn2.style.color='white';
    btn2.style.border='2px solid blue';
    document.getElementById('btn3').disabled=false;
}

function main3() {
    i = 3;
    btn3.style.backgroundColor='#57A0D3';
    btn3.style.color='white';
    btn3.style.border='2px solid blue';
    document.getElementById('btn5').disabled=false;
}
function main4() {
    i=4;
    btn4.style.backgroundColor='#57A0D3';
    btn4.style.color='white';
    btn4.style.border='2px solid blue';
}
function main5() {

    i=5;
    btn5.style.backgroundColor='#57A0D3';
    btn5.style.color='white';
    btn5.style.border='2px solid blue';
    document.getElementById('btn11').disabled=false;
}
function main6() {
    i=6;
    btn6.style.backgroundColor='#57A0D3';
    btn6.style.color='white';
    btn6.style.border='2px solid blue';
    alert('Now set the voltage');
}

$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
        $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});

//-----------------







