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
    if(alas!='' && tinggi != ''){
        luas = 0.5*alas*tinggi;
        document.getElementById('hasil-luas').innerHTML = 'L = <sup>1</sup>/<sub>2</sub> x a x t <br> L = <sup>1</sup>/<sub>2</sub> x '+ alas +' x '+ tinggi +'<br> L = <b> '+ luas +' <b>';
    
    } else {
        alert('Salah satu kolom inputan tidak boleh kosong !');
    }
}

function kelilingSegitiga() {    
    let sisi1 = document.getElementById('sisi1-input').value;
    let sisi2 = document.getElementById('sisi2-input').value;
    let sisi3 = document.getElementById('sisi3-input').value;

    if(sisi1!='' && sisi2 !='' && sisi3!=''){        
        keliling = sisi1 + sisi2 + sisi3;
        document.getElementById('hasil-keliling').innerHTML = 'K = S1 (AB) x S2 (BC) x S3 (CA)<br>K = '+ sisi1 +' + '+ sisi2 +' + '+ sisi3 +' <br>K = <b>'+ keliling +'<b>';
    
    } else {
        alert('Salah satu kolom inputan tidak boleh kosong !');
    }
}