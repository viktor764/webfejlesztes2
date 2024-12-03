document.getElementById("szamol").addEventListener("click", szamol);
function szamol(){
    let osszeg=0
    if(document.getElementById("kulsobelso").checked==1){
        osszeg+=6000
    }
    else{
        if(document.getElementById("kulso").checked==1){
            osszeg+=2000
        }
        else{
            if(document.getElementById("belso").checked==1){
                osszeg+=4000
            }
        }
    }
    if(document.getElementById("polir").checked==1){
        osszeg+=10000
    }
    if(document.getElementById("borjav").checked==1){
        osszeg+=8000
    }
    if(document.getElementById("viasz").checked==1){
        osszeg+=1000
    }
    if(document.getElementById("muanyag").checked==1){
        osszeg+=6000
    }
    switch (document.getElementById("kedvezmeny").selectedIndex){
        case 0:
                
            break;
            case 1:
                osszeg=osszeg*0.66
                break;
                case 2:
                    osszeg=osszeg*0.75
                    break;
                    case 3:
                    osszeg=osszeg*0.75
                    break;

    }
    document.getElementById("osszeg").value=Math.round(osszeg)
}