const versio1=document.getElementById("versio1");
const versio2=document.getElementById("versio2");
const pelaa=document.getElementById("pelaa");
const tulokset1=[];
const tulokset2=[];


function Versio1(){
    const noppaKuvat=document.getElementById("kuvat");
    let kuvat=[]
    const pisteet=document.getElementById("pisteet");
    let tulos=Math.floor(Math.random() *6)+1;
    tulokset1.push(tulos);
    kuvat.push(`<img src="dice_kuvat/${tulos}.png">`);
    if(tulos===1){
        pisteet.textContent="tappio";
        for(let i=0; i<tulokset1.length;i++){
            delete tulokset1[i];
        }
        console.log(tulokset1)
    }else{
        let summa=0;
        for(let i of tulokset1){
            summa+=i;
        }
        if(summa===25||summa>25){
            versio1.checked=false;
            pisteet.textContent=`Voitto`;
        }else{
            pisteet.textContent=`Pisteet: ${summa}`;
        }
    }
    versio2.checked=false;
    noppaKuvat.innerHTML=kuvat.join(" ");
    }
function Versio2(){
    const noppaKuvat=document.getElementById("kuvat");
    const kuvat=[]
    let num1=Math.floor(Math.random() *6)+1;
    let num2=Math.floor(Math.random() *6)+1;
    kuvat.push(`<img src="dice_kuvat/${num1}.png">`);
    kuvat.push(`<img src="dice_kuvat/${num2}.png">`);
    versio2.checked=false;
    versio1.checked=false;
    noppaKuvat.innerHTML=kuvat.join(" ");
}

function RollDice(){
    if(versio1.checked===true){
        versio2.checked=false;
        Versio1()
    }
    if(versio2.checked===true){
        versio1.checked=false;
        Versio2()
    }
}

pelaa.addEventListener("click",RollDice);