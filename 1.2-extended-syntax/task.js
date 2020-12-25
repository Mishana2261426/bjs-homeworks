"use strict"

function getResult(a,b,c){
	let x =[];

    let d =(b**2-4*a*c);
    if (d===0) {
    	x[0] = -b/2*a;
    }
    else if (d<0) {

    }
    else {
        x[0]=(- b + Math.sqrt(d)) / (2 * a);
        x[1]=(- b - Math.sqrt(d)) / (2 * a); 
    }

    return x;
}
function getAverageMark(marks){
    if (marks.length == 0) {
    	return 0;
    }

    if (marks.length > 5) {
    	return "оценок больше 5";
    }


}

// function askDrink(name,dateOfBirthday){
//     // код для задачи №3 писать здесь
//     // return result;
// }