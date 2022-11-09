Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90   
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='webcam'>"
})
}

console.log("ml5 version is ", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/K4jeCCanE/model.json",modelLoaded)


function modelLoaded(){
    console.log("model loaded")
}