// Test Git

let kelilingVisible = false;

function showHide(){
    if(kelilingVisible == false) {
        kelilingVisible = true;
        document.getElementById('section-luas').style.display = 'none';
        document.getElementById('section-keliling').style.display = 'block';
    } else {
        kelilingVisible = false;
        document.getElementById('section-luas').style.display = 'block';
        document.getElementById('section-keliling').style.display = 'none';
    }
}
function reset() {
    document.getElementById('reset-btn').reset();
}

function luasSegitiga() { 
    let alas = document.getElementById('alas-input').value;
    let tinggi = document.getElementById('tinggi-input').value;

    let a = parseFloat(alas);
    let t = parseFloat(tinggi);
    if(alas!='' && tinggi != ''){
        luas = 0.5*(a*t);
        document.getElementById('hasil-luas').innerHTML = 'L = <sup>1</sup>/<sub>2</sub> x a x t <br> L = <sup>1</sup>/<sub>2</sub> x '+ a +' x '+ t +'<br> L = <b> '+ luas +' <b>';
    
    } else {
        alert('Salah satu kolom inputan tidak boleh kosong !');
    }
}

function kelilingSegitiga() {    
    let sisi1 = document.getElementById('sisi1-input').value;
    let sisi2 = document.getElementById('sisi2-input').value;
    let sisi3 = document.getElementById('sisi3-input').value;
        
    // CONVERTER
    let s1 = parseFloat(sisi1);
    let s2 = parseFloat(sisi2);;
    let s3 = parseFloat(sisi3);;

    if(sisi1!='' && sisi2 !='' && sisi3!=''){        
        keliling = s1+s2+s3
        document.getElementById('hasil-keliling').innerHTML = 'K = S1 (AB) x S2 (BC) x S3 (CA)<br>K = '+ s1 +' + '+ s2 +' + '+ s3 +' <br>K = <b>'+ keliling +'<b>';
    
    } else {
        alert('Salah satu kolom inputan tidak boleh kosong !');
    }
}