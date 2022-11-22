
function prviPrimer() {
    //jednolinijski komentar
    
    const konstanta = 55;

    let promenljiva = 12;
    promenljiva = "nesto";
    promenljiva = true;
    promenljiva = 12.7;


    /*
        viselinijiski komentar
        :)
    */

    let a = parseInt(prompt("Unesite broj a:"));
    let b = parseInt(prompt("Unesite broj b:"));
    console.log("Rezultat a + b:" + (a+b));

}

function drugiPrimer(){
    let ime = prompt("Kako se zoves?");
    let broj = prompt("Zdravo " + ime + "! Hajde reci mi neki broj izmedju 1 i 100");

    broj = parseInt(broj);

    // funkcija parseInt vraca vrednost NaN 
    // ako ne moze pretvoriti zadati string u broj
    if(broj == NaN) {
        alert("Nisi uneo/la broj!");
    }
    // || je operator za logicko ILI
    // && je operator za logicko I
    else if (broj < 1 || broj > 100) {
        alert("Nismo se tako dogovorili :( !");
    }
    else {
        alert("Uneo/la si broj " + broj);

        //parnost proveravamo kao ostatak pri deljenju
        //  % je mod operator
        //Npr 13 % 2 je 1, jer je 13 = 6*2 + 1 
        if(broj % 2 == 0){
            alert("To je paran broj! ");
        }
        else {
            alert("To je neparan broj! ");
        }
    }

}

