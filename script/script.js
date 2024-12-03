document.getElementById("kiszamol").addEventListener("click", kiszamol);

function kiszamol(){
    let eredmeny=document.getElementById("ora").value
    
    if(eredmeny>=1 & (document.getElementById("Igen").checked==1||document.getElementById("Nem").checked==1)){
        eredmeny=eredmeny*395
        if(document.getElementById("Igen").checked==1){eredmeny=Math.round(eredmeny*0.9)}
        document.getElementById("eredmeny").value=Math.round(eredmeny)
        document.getElementById("kiszamol").style.backgroundColor="#00ff00";
        document.getElementById("kiszamol").style.color="#ffffff";
    }
    else{
        if((document.getElementById("Igen").checked==1||document.getElementById("Nem").checked==1)==false){
            alert("Jelölje be az egyik opciót a Bankkártyával szeretne fizetni? kérdésnél")
            
        }
        else{
            alert("Kérem egy 0-nál nagyobb számot adjon meg!")
        }
        document.getElementById("kiszamol").style.backgroundColor="#ff0000";
        document.getElementById("kiszamol").style.color="#ffffff";
    }
    
    

}