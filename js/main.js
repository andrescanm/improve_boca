/*
----------------------------------------------------------------------
Código JavaScript original BOCA
----------------------------------------------------------------------
 BOCA boca-1.5.13. Copyright (c) 2003-2017 Cassio Polpo de Campos
 http://www.ime.usp.br/~cassio/boca                                  
 This program is free software: you can redistribute it and/or modify  
 it under the terms of the GNU General Public License as published by 
 the Free Software Foundation, either version 3 of the License, or 
 (at your option) any later version. A copy of the  
 license can be found with this software or at http://www.gnu.org/licenses/
 ---------------------------------------------------------------------- 
 */
 /********************************************************************/
 /*Invocada en: login.php*/
 /********************************************************************/
 function computeHASH()
 {
 	var userHASH, passHASH;
 	userHASH = document.form1.name.value;
 	passHASH = js_myhash(js_myhash(document.form1.password.value)+'5d4574nnnjutrkert0buu9ukf5');
 	document.form1.name.value = '';
 	document.form1.password.value = '                                                                                 ';
 	document.location = 'index.php?name='+userHASH+'&password='+passHASH;
 }

 /********************************************************************/
 /*Invocada en: user.php*/
 /********************************************************************/
 function conf2(url) {
 	if (confirm("Are you sure?")) {
 		document.location=url;
 	} else {
 		document.location='user.php';
 	}
 }

 function computeHASH()
 {
 	document.form3.passwordn1.value = bighexsoma(js_myhash(document.form3.passwordn1.value),js_myhash(document.form3.passwordo.value));
 	document.form3.passwordn2.value = bighexsoma(js_myhash(document.form3.passwordn2.value),js_myhash(document.form3.passwordo.value));
 	document.form3.passwordo.value = js_myhash(js_myhash(document.form3.passwordo.value)+'thhfqie4glc7uqgssmekjeuen5');
 }

//Funciones que aplican al formulario de creación de usuarios
function conf() {
	if (confirm("Confirm?")) {
		document.form1.confirmation.value='confirm';
	}
}

function conf3() {
	computeHASH();
	if (confirm("Confirm?")) {
		document.form3.confirmation.value='confirm';
	}
}
function conf5() {
	document.form3.confirmation.value='noconfirm';
}
