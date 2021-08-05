Webcam.set({
    height : 400,
    width: 400,
    image_format : 'png',
    png_quality : 100,
    Constraints:{
        facingMode : 'environment'
    }
});
Webcam.attach('WebCam');

function Snap(){
Webcam.snap(function(Thing){
    document.getElementById('pic').innerHTML = "<img src = '"+Thing+"' id = 'Snapshot'>";
});
}

Classifier = ml5.imageClassifier("MobileNet", Know);

function Know(){
    console.log('status : Ok');
}

function Check(){
ClickPic  = document.getElementById('Snapshot');
Classifier.classify(ClickPic,Result);
}

function Result(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById('mark1').innerHTML = results[0].label;
}
}