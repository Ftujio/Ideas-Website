var res;

document.getElementById("home").onclick = function(){
	res = 1;
};

document.getElementById("browse").onclick = function(){
	alert(res);
};

module.exports = res;