var down_click_count = -1;
var right_click_count = -1;

var Centerx = 500;
var Centery = 100;

var Posx = 0;
var Posy = 0;

//Retrieve the mouse position
function printMousePos(event) {
    Posx = event.clientX;
    Posy = event.clientY;
    document.getElementById('test').innerHTML = "clientX: " + event.clientX + " - clientY: " + event.clientY;
}
document.addEventListener("click", printMousePos);

//Default image settings
document.getElementById('lower_btn_id').src = "photos/arrow_down.png";
document.getElementById('right_btn_id').src = "photos/arrow_right.png";

//Lower button click event
function lower_btn_clicked(object_id){
    console.log(object_id);
    var a = document.getElementById(object_id); //Parent element

    // var LowBtn = a.getElementById('lower_btn_id');
    // var LowObj = a.getElementById('lower');
    // console.log(LowBtn);
    // console.log(LowObj);
    switch(down_click_count){
        case-1: down_click_count++; //Card opens
                //Console.log(object_id);
                // document.getElementById(object_id).childNodes[0].childNodes[1].src = "photos/arrow_up.png";
                // document.getElementById(object_id).style.visibility='visible';
                // document.getElementById(object_id).style.height='150px';

                //document.getElementById(object_id).getElementById('lower_btn_id').src = "photos/arrow_up.png";

                // a.getElementById('lower_btn_id').src = "photos/arrow_up.png";
                // a.getElementById('lower').style.visibility = 'visible';
                // a.getElementById('lower').style.height = '150px';

                // LowBtn.src= "photos/arrow_up.png";
                // LowObj.style.visibility='visible';
                // LowObj.style.height='150px';

                document.getElementById('lower_btn_id').src = "photos/arrow_up.png";
                document.getElementById('lower').style.visibility='visible';
                document.getElementById('lower').style.height='150px';
                break;
        case 0: down_click_count = -1;//Card closes
                // a.getElementById('lower_btn_id').src = "photos/arrow_down.png";
                // a.getElementById('lower').style.visibility = 'hidden';
                // a.getElementById('lower').style.height = '0px';

                document.getElementById('lower_btn_id').src = "photos/arrow_down.png";
                document.getElementById('lower').style.visibility='hidden';
                document.getElementById('lower').style.height='0px';
                break;
    }
}
//Right button click event
function right_btn_clicked(){
    var OpenX = 0;
    var OpenY = 0;
    var CloseX = 0;
    var CloseY = 0;
    switch(right_click_count){
        case -1: right_click_count++; //Card opens
                document.getElementById('right_btn_id').src = "photos/arrow_left.png";
                document.getElementById('right').style.visibility='visible';
                document.getElementById('right').style.width='400px';
                //Margin changes based on the client click position
                if(Posx < Centerx && Posy < Centery){ //Position 1
                    OpenX = Centerx;
                    OpenY = Centery;
                    document.getElementById('right').style.marginLeft = OpenX + "px"; //500px
                    document.getElementById('right').style.marginTop = OpenY + "px";//80px
                }
                else if(Posx > Centerx && Posy < Centery){ //Position 2
                    OpenX = Centerx;
                    OpenY = Centery;
                    document.getElementById('right').style.marginRight = OpenX + "px"; //500px
                    document.getElementById('right').style.marginTop = OpenY + "px";//80px
                }
                else if(Posx < Centerx && Posy >Centery){//Position 3
                    OpenX = Centerx;
                    OpenY = Centery;
                    document.getElementById('right').style.marginLeft = OpenX + "px"; //500px
                    document.getElementById('right').style.marginBottom = OpenY + "px";//80px
                }
                else if(Posx > Centerx && Posy > Centery){
                    OpenX = Centerx;
                    OpenY = Centery;
                    document.getElementById('right').style.marginRight = OpenX + "px"; //500px
                    document.getElementById('right').style.marginBottom = OpenY + "px";//80px
                }
                console.log("OpenX: " + OpenX + "OpenY:" + OpenY);
                break;
        case 0: right_click_count = -1;//Card closes
                document.getElementById('right_btn_id').src = "photos/arrow_right.png";
                document.getElementById('right').style.visibility='hidden';
                document.getElementById('right').style.width='0px';
                //Margin changes based on the client click position
                CloseX = Posx;//OpenX
                CloseY = Posy;//OpenY

                console.log("Posx: " + Posx + "Posy: " + Posy);
                console.log("CloseX: " + CloseX + "CloseY:" + CloseY);

                document.getElementById('right').style.marginLeft = CloseX + "px"; //400px
                document.getElementById('right').style.marginTop = CloseY + "px";//80px
                break;
    }
}