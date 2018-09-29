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
function computeHASH()
{
	var userHASH, passHASH;
	userHASH = document.form1.name.value;
	passHASH = js_myhash(js_myhash(document.form1.password.value)+'5d4574nnnjutrkert0buu9ukf5');
	document.form1.name.value = '';
	document.form1.password.value = '                                                                                 ';
	document.location = 'index.php?name='+userHASH+'&password='+passHASH;
}