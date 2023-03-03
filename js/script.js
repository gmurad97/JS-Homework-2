function transformFigure(elm, boolRotate){
    if(boolRotate){
        elm.style.transform = "rotateZ(32deg)";
    }
    else{
        elm.style.transform = "rotateZ(0deg)";
    }
}

function backfaceRotate(elm, boolBackFace){
    if(boolBackFace){
        elm.style.transform = "rotateY(180deg) rotateZ(32deg)";
    }
    else{
        elm.style.transform = "rotateY(0deg) rotateZ(32deg)";
    }
}