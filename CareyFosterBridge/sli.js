var stage, output;

function init() {
    stage = new createjs.Stage("mycanvas");

    // For mobile devices.
    createjs.Touch.enable(stage);

    // this lets our drag continue to track the mouse even when it leaves the canvas:
    // play with commenting this out to see the difference.
    stage.mouseMoveOutside = true;

    var circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 20);

    var label = new createjs.Text("me", "bold 14px Arial", "#FFFFFF");
    label.textAlign = "center";


    var dragger = new createjs.Container();
    dragger.x  = 300;
    dragger.y  = 300;
    dragger.addChild(circle, label);
    stage.addChild(dragger);

    dragger.on("pressmove",function(evt) {
        // currentTarget will be the container that the event listener was added to:
        evt.currentTarget.x = evt.stageX;
        //evt.currentTarget.y = evt.stageY;
        // make sure to redraw the stage to show the change:
        stage.update();
    });

    stage.update();
}