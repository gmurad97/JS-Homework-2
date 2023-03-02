function transformFigure(e, boolRotate) {
    if(boolRotate){
        e.style.transform = "rotateZ(55deg)";
    }
    else{
        e.style.transform = "rotateZ(0deg)";
    }
}

function backfaceRotate(e, boolBackFace){
    if(boolBackFace){
        e.style.transform = "rotateX(180deg)";
    }
    else{
        e.style.transform = "rotateX(0deg)";
    }
}