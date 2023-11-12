function AgeProject(){

    let asagiYas,ortaYas,yuxariYas,sonYas,ortalamaCixaran,qaytarlanMesaj;
    asagiYas = Number(document.getElementById('agedown').value);
    ortaYas = Number(document.getElementById('mıddleage').value);
    yuxariYas = Number(document.getElementById('oldage').value);
    sonYas= Number(document.getElementById('lastage').value);
    ortalamaCixaran = asagiYas+ortaYas+yuxariYas+sonYas;
if (isNaN(asagiYas)){
    qaytarlanMesaj = 'simvol daxil etmek olmaz <br> regem daxil edin';
}else if(isNaN(ortaYas)){
    qaytarlanMesaj = 'simvol daxil etmek olmaz <br> regem daxil edin';
}else if(isNaN(yuxariYas)){
    qaytarlanMesaj = 'simvol daxil etmek olmaz <br> regem daxil edin';
}else if(isNaN(sonYas)){
    qaytarlanMesaj = 'simvol daxil etmek olmaz <br> regem daxil edin';
}else{
    if (ortalamaCixaran >= 20 && ortalamaCixaran <= 30){
        qaytarlanMesaj = 'Tebrikler siz hele cavansiz <br> age: you are young <br> ' + ortalamaCixaran ;
}else if(ortalamaCixaran > 30 && ortalamaCixaran <= 40){
    qaytarlanMesaj = 'Tebrikler siz  cavan deyilsiz artig <br> age: you are not young <br> ' + ortalamaCixaran ;
}else if(ortalamaCixaran > 40 && ortalamaCixaran <= 50){
    qaytarlanMesaj = 'Tebrikler siz  hele qoca  <br> age: you are not old <br> ' + ortalamaCixaran ;
}else if(ortalamaCixaran > 50 && ortalamaCixaran <= 70){
    qaytarlanMesaj = 'Tebrikler siz  artig qocasiz  <br> age: you are  old <br> ' + ortalamaCixaran ;
}else if(ortalamaCixaran > 70 ){
    qaytarlanMesaj = "you are already dead";
}else if(ortalamaCixaran == ""){
    qaytarlanMesaj = "xanani bos qoymaq <br> olmaz";
}else{
    qaytarlanMesaj = " - ve sifir yazmaq <br> olmaz";
}
}
    document.getElementById("deyer").innerHTML = qaytarlanMesaj;
    asagiYas = Number(document.getElementById('agedown').value  = "");
    ortaYas = Number(document.getElementById('mıddleage').value = "");
    yuxariYas = Number(document.getElementById('oldage').value = "");
    sonYas= Number(document.getElementById('lastage').value = "");
}