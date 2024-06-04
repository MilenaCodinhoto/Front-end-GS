function medidas(){
    const contador1 = document.getElementById("contador1");
    let valor1=0;
    //setInterval el executa um determinado intervalo de tempo
    let tempo1 =setInterval(()=>{
        valor1 +=1;

        contador1.innerHTML =+valor1;
        if(valor1 == 1256){
            //limpa o intervalo de tempo
            clearInterval(tempo1)
        }

    })

    // MEDIDOR 2
    const contador2 = document.getElementById("contador2");
    let valor2=0;
    //setInterval el executa um determinado intervalo de tempo
    let tempo2 =setInterval(()=>{
        valor2 +=1;

        contador2.innerHTML =+valor2;
        if(valor2 == 252){
            //limpa o intervalo de tempo
            clearInterval(tempo2)
        }

    })

    // MEDIDOR 3
    const contador3 = document.getElementById("contador3");
    let valor3=0;
    //setInterval el executa um determinado intervalo de tempo
    let tempo3 =setInterval(()=>{
        valor3 +=1;

        contador3.innerHTML =+valor3;
        if(valor3 == 1120){
            //limpa o intervalo de tempo
            clearInterval(tempo3)
        }
    })
    
    // MEDIDOR 4
    const contador4 = document.getElementById("contador4");
    let valor4=0;
    //setInterval el executa um determinado intervalo de tempo
    let tempo4 =setInterval(()=>{
        valor4 +=1;

        contador4.innerHTML =+ valor4;
        if(valor4 == 700){
            //limpa o intervalo de tempo
            clearInterval(tempo4)
        }

    })
}