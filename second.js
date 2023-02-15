var stList = [];
	
	var addSt = function(){
		var n = document.getElementById('st_name').value;
		var r = document.getElementById('st_rollNum').value;
		var b = document.getElementById('st_branch').value;
		var c = document.getElementById('st_collegeName').value;
		
		var stObj = {'st_name': n, 'st_rollNum': r, 'st_branch': b,st_collegeName:c};
		stList.push(stObj);
        console.log(stList);
		document.getElementById('warning').innerHTML = stList.length+' student successfully';
		document.getElementById('warning').style.display = 'block';
		document.getElementById('btnResetSt').style.display = 'block';
		
		//logic to reset
		document.getElementById('st_name').value = '';
		document.getElementById('st_rollNum').value = '';
		document.getElementById('st_branch').value = '';
		document.getElementById('st_collegeName').value = '';
		showAllSt();
		//reset();
	}
	
	function reset(){
		document.getElementById('warning').style.display = 'none';
        document.getElementById('st_name').value = '';
		document.getElementById('st_rollNum').value = '';
		document.getElementById('st_branch').value = '';
		document.getElementById('st_collegeName').value = '';
	}

	function showAllSt(){
	
		if(stList.length > 0){
			var innerHTMLstr = '';
			for(var i = 0; i<stList.length; i++){
				innerHTMLstr = innerHTMLstr + '<tr> <td>' + (i+1) + '</td><td>'+ stList[i]['st_name'] + '</td>' + '<td>' + stList[i]['st_rollNum'] + '</td>' + '<td>' + stList[i]['st_branch'] +'</td>'+'<td>'+stList[i]['st_collegeName']+'</td>'+ '</td>';
			}
			document.getElementById('tbodyValues').innerHTML = innerHTMLstr;
			document.getElementById('tableContainer').style.display = 'block';
		}else{
			document.getElementById('warning').innerHTML = 'No records found please add an Student firstly*';
			document.getElementById('warning').style.display = 'block'
		}
	}
	function updateSt(){
		var indexTobeUpdated = document.getElementById('rowNum').value;
		stList.splice(indexTobeUpdated, 1);
		
        var n = document.getElementById('st_name').value;
		var r = document.getElementById('st_rollNum').value;
		var b = document.getElementById('st_branch').value;
		var c = document.getElementById('st_collegeName').value;
		
		var stObj = {'st_name': n, 'st_rollNum': r, 'st_branch': b,st_collegeName:c};

		stList.splice(indexTobeUpdated,0,stObj);
		showAllSt();

	}
	function editSt(itemIndex){
		var stTobeUpdated = stList[itemIndex];
		document.getElementById('rowNum').value = itemIndex;
		document.getElementById('st_name').value = stTobeUpdated.st_name;
        document.getElementById('st_rollNum').value = stTobeUpdated.st_rollNum;
		document.getElementById('st_branch').value = stTobeUpdated.st_branch;
        document.getElementById('st_collegeName') = stTobeUpdated.st_collegeName;
		document.getElementById('btnUpdateSt').style.display = 'block';
	}
	function deleteSt(itemIndex){
		//var stTobeDeleted = stList[itemIndex];
		var stDeleted=stList.splice(itemIndex, 1); //remove 1 element from i index
		showAllSt();
		document.getElementById('warning').style.display = 'block';
		document.getElementById('warning').innerHTML = 'Student with name ' + stDeleted[0].st_name + ' has been deleted';
	}

	
	function add(){
		//debugger;
		var a = document.getElementById('num1').value;
		var b = document.getElementById('num2').value;
		
		if(a===''){
			alert("Num 1 cannot be empty");
			return false;
		}
		if(b===''){
			alert("Num 2 cannot be empty");
			return false;
		}
		var result = parseInt(a)+parseInt(b);
		console.log(result);
		document.getElementById('resultSpan').innerHTML = '<strong>'+result+'</strong>';
		document.getElementById('resultDiv').style.display = 'block';
		// document.getElementById('btnAdd').className = 'animate-test-class';
		// document.getElementsByTagName('body')[0].className = 'btn-red';

    }