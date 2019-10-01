var Persantage = 0;
var Amount = 0;

function enablePay(){
    if(document.getElementById('pay').checked && document.getElementById('amount').disabled){
        document.getElementById('amount').disabled = false;
    }else{
        document.getElementById('amount').disabled = true;
    }
}

function enablePersentage(){
    if(document.getElementById('per').checked && document.getElementById('persentage').disabled){
        document.getElementById('persentage').disabled = false;
    }else{
        document.getElementById('persentage').disabled = true;
    }
}

function scholarshipCalculation(){
    var e = document.getElementById('select');
    var campus = e.options[e.selectedIndex].value;
    // console.log(campus);
    var sgpa = Number(document.getElementById('SGPA').value);
    // console.log(sgpa);
    var persentage = document.getElementById('persentage').value;
    // console.log(persentage);

    if(campus=="Permanent Campus"){
        if(sgpa==4.00){
            Persantage = 50+5;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            }      
        }else if(sgpa>=3.90 && sgpa<=3.99){
            Persantage = 30+5;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else if(sgpa<=3.89 && sgpa>=3.85){
            Persantage = 20+5;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else if(sgpa<=3.84 && sgpa>=3.80){
            Persantage = 10+5;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else{
            Persantage = 0+5;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            }
        }
    }else{
        if(sgpa==4){
            Persantage = 50;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else if(sgpa<=3.99 && sgpa>=3.90){
            Persantage = 30;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else if(sgpa<=3.89 && sgpa>=3.85){
            Persantage = 20;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else if(sgpa<=3.84 && sgpa>=3.80){
            Persantage = 10;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            } 
        }else{
            Persantage = 0;
            if(Persantage>persentage){
                Persantage = Persantage;
            }else{
                Persantage = persentage;
            }
        }
    }
    document.getElementById('resultScholarship').innerHTML = "<b>Scholarship is:</b>" +Persantage+"%"; 
}

function calculateAmount(){
    var amount = Number(document.getElementById('amount').value);
    var persentage = document.getElementById('resultScholarship').value;
    // console.log(amount);
    Amount = amount - (amount*Persantage/100);
    document.getElementById('resultScholarship').innerHTML = "<b>Amount is:</b>" +Amount;
}