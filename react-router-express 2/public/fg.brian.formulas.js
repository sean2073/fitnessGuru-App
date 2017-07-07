var formulas = {
 guru: function(data, element) {

	//console.important("GURU:");

	switch(data.split("-")[0]) {
	    case "BMR":
	        return bmrCalc("guru", element);
	        break;
	    case "BMI":
	        return bmiCalc("guru", element);
	        break;
	    case "BodyFat":
		    return bodyFatCalc("guru", element);
	        break;
	    case "ALL":
	    	user_stats = { 
	    		bmr: bmrCalc("guru", element),
	    		bmi:  bmiCalc("guru", element), 
	    		bodyfat: bodyFatCalc("guru", element)
	    	};
		    return user_stats;
	        break;
	    default:
	        text = "Error";
	}
},

// // HOW TO: Return BMR
// var bodyObject_BMR = { gender: "male", age: 29, weight: 145, height_ft: 5, height_in: 8 };
// var guru_Get_BMR = guru("BMR", bodyObject_BMR);
// console.log(guru_Get_BMR);

// // HOW TO: Return BMI
// var bodyObject_BMI = { weight: 145, height_ft: 5, height_in: 8 };
// var guru_Get_BMI = guru("BMI", bodyObject_BMI);
// console.log(guru_Get_BMI);

// // HOW TO: Return BODY FAT %
// var bodyObject_BodyFat = { gender: "male", weight: 145, waist: 29, wrist: 0, hip: 0, forearm: 0};
// //this is a male test...women REQUIRE more data... wrist, hip, forearm
// //..to reiterate..men dont need wrist, hip, or forearm, but ive included them as 0 for some reason
// var guru_Get_BodyFat = guru("BodyFat", bodyObject_BodyFat);
// console.log(guru_Get_BodyFat);

// // HOW TO: Return ALL OF THOSE AS AN OBJECT
// var bodyObject_ALL = { gender: "male", age: 29, weight: 145, height_ft: 5, height_in: 8 , waist: 29, wrist: 0, hip: 0, forearm: 0 };
// var guru_Get_ALL = guru("ALL", bodyObject_ALL);
// console.log(guru_Get_ALL);


 bmiCalc: function(data, element) {
	//console.important("BMI Calculation:");
	var whatToDo = data.split("-")[0];

	//changes units from Metric to Imperial
	if(whatToDo == "changeUnit"){
		//which unit type?
	    var newUnit = data.split("-")[1];
	    //where should we put it?
		element.parentNode.parentNode.className = "bmi-calc " +newUnit;
		console.log("Unit type changed to... " + newUnit);
	}

	//adjust the weight inputs at the same time
	if(whatToDo == "w_inputs"){
		//adjusting height from where?
		console.log("Adjusting Weight");

		//am I using imperial or metric?
		var currentUnits = ""+ element.parentNode.parentNode.parentNode.className.split(" ")[1];
		console.log("Currently In: "+currentUnits + " units");

		var weightsContainer = element.parentNode.parentNode.children;

		if(currentUnits == "imperial"){
			//get pounds
			var pounds_current = weightsContainer[0].children[0].value;
			if(!pounds_current){ pounds_current= 0;}
			var p_txt =" pound = ";
			if(pounds_current > 1){ p_txt = " pounds = "; }

			//convert to kilograms
			//and round up to nears 0.000
			var new_kilograms =  Math.round( (pounds_current * 0.45359237) * 1000) / 1000;
			var new_kg_txt =" kilogram";
			if(new_kilograms > 1){ new_kg_txt = " kiograms"; }

			//place kg# in kg div
			if(new_kilograms <= 0){ new_kilograms = ""; }//reset placeholder if <=0
			weightsContainer[1].children[0].value = new_kilograms;

			console.log(pounds_current+ p_txt + new_kilograms + new_kg_txt);
		}

		if(currentUnits == "metric"){
			//get kilograms
			var kilograms_current = weightsContainer[1].children[0].value;
			if(!kilograms_current){ kilograms_current= 0;}
			var kg_txt =" kilogram = ";
			if(kilograms_current > 1){ kg_txt = " kilograms = "; }

			//convert to pounds
			//and round up to nears 0.000
			var new_pounds = Math.round( (kilograms_current / 0.45359237) * 1000) / 1000 ;
			var new_pounds_txt =" pound";
			if(new_pounds > 1){ new_pounds_txt = " pounds"; }

			//place p# in p div
			if(new_pounds <= 0){ new_pounds = ""; }//reset placeholder if <=0
			weightsContainer[0].children[0].value = new_pounds;

			console.log(new_kilograms + new_kg_txt + pounds_current + p_txt);

		}
	}

	//adjusts the height inputs at the same time
	if(whatToDo == "h_inputs"){
		//adjusting height from where?
		console.log("Adjusting Height From:", element.name);

		//am I using imperial or metric?
		var currentUnits = ""+ element.parentNode.parentNode.parentNode.className.split(" ")[1];
		console.log("Currently In: "+currentUnits + " units");

		var heightsContainer = element.parentNode.parentNode.children;

		if(currentUnits == "imperial"){
			//get feet
			var feet_current = heightsContainer[0].children[0].value;
			if(!feet_current){ feet_current= 0;}
			var ft_txt =" foot, ";
			if(feet_current > 1){ ft_txt = " feet, "; }

			//get inches
			var inches_current = heightsContainer[1].children[0].value;
			if(!inches_current){ inches_current= 0;}
			var in_txt =" inch";
			if(inches_current > 1){ in_txt = " inches"; }			

			//COMBINE BOTH AS INCHES and convert to METERS

			//convert feet to inches
			var feet_as_inches = feet_current * 12;

			//add it to inches
			var total_inches_current = parseInt(inches_current) + feet_as_inches;
			var in_total_txt =" inch";
			if(total_inches_current > 1){ in_total_txt = " inches"; }

			//convert Both to meters
			//and round up to nears 0.000
			var new_meters = Math.round( (total_inches_current * 0.0254) * 1000) / 1000;
			var new_meters_txt =" meter";
			if(new_meters > 1){ new_meters_txt = " meters"; }

			//place # in meters div
			if(new_meters <= 0){ new_meters = ""; }
			var meters = heightsContainer[2].children[0].value = new_meters;

			console.log(feet_current+ ft_txt + inches_current+ in_txt 
				+" = " + total_inches_current + in_total_txt
				+" = " + new_meters + new_meters_txt);
		}

		if(currentUnits == "metric"){
			//get meters
			var meters_current = heightsContainer[2].children[0].value;
			if(!meters_current){ meters_current= 0;}
			var m_txt =" meter";
			if(meters_current > 1){ m_txt = " meters"; }

			//convert meters to inches
			var new_inches_total = meters_current / 0.0254;
			
			//check for feet
			var new_feet = Math.floor(new_inches_total / 12);
			var new_ft_txt =" foot";
			if(new_feet > 1){ new_ft_txt = " feet"; }
			if(new_feet <=0){ new_ft_txt = " 0 feet"; }

			//check for inches
    		var new_inches = Math.round( (new_inches_total%12)* 100) / 100;
			var new_in_txt =" inch";
			if(new_inches > 1){ new_in_txt = " inches"; }
			if(new_inches <=0){ new_in_txt = " 0 inches"; }

			//place new feet# in feet div
			if(new_feet <= 0){ new_feet = ""; }
			heightsContainer[0].children[0].value = new_feet;

			//place new inches # in inches div
			if(new_inches <= 0){ new_inches = ""; }
			heightsContainer[1].children[0].value = new_inches;

			console.log(new_feet + "'" + new_inches + "\"");

			console.log(meters_current+ m_txt 
				+" = " + new_feet + new_ft_txt
				+" & " + new_inches + new_in_txt);
		}
	}

	//converts current user input of weight height into BMI
	if(whatToDo == "calculate_BMI"){
		console.log("Calculating BMI...");
	
		//we need metric user data, so...
		//..even if user's "Unit of Measurement" is set on Imperial...
		//...grab data from the metric sections

		//weight in kilograms
		var user_weight = element.parentNode.children[1].children[1].children[0].value;

		//height in meters
		var user_height = element.parentNode.children[2].children[2].children[0].value;

		//try calculating the BMI
		var user_BMI;
		if(user_weight > 0 && user_height > 0){
			console.log("Current User Weight = "+ user_weight + " KG"
			+"\nCurrent User Height = "+ user_height + " M");

			//actual BMI calculation
			//..and rounding up a few decimals
			user_BMI = Math.round( (user_weight /(user_height*user_height))* 1000) / 1000;

			//push user BMI into bmi-results
			var bmi_results_display = element.parentNode.children[4];
			//place actual BMI # into 
			//numerical-result
			bmi_results_display.children[1].innerHTML = user_BMI;

			//change corresponding bmi-scale div to active
			var scaleHolder = element.parentNode.children[4].children[3];

			var i = 0;
			do {
				scaleHolder.children[i].children[0].className = "";
				i++;
			}
			while (i < 6);

			if(user_BMI < 18.5){
				scaleHolder.children[0].children[0].className = "active";
			}else if(user_BMI >= 18.5 && user_BMI <= 24.9){
				scaleHolder.children[1].children[0].className = "active";
			}else if(user_BMI >= 25.0 && user_BMI <= 29.9){
				scaleHolder.children[2].children[0].className = "active";
			}else if(user_BMI >= 30 && user_BMI <= 34.9){
				scaleHolder.children[3].children[0].className = "active";
			}else if(user_BMI >= 35 && user_BMI <= 39.9){
				scaleHolder.children[4].children[0].className = "active";
			}else if(user_BMI >= 39.9){
				scaleHolder.children[5].children[0].className = "active";
			}
			
			//un-hide results
			bmi_results_display.className = "bmi-results";

			console.log(user_BMI);
		}else{
			console.log("ERROR Calulating...missing one or more input");
		}
	}

	if(whatToDo == "guru"){
		//GET WEIGHT IN KILOGRAMS

		//convert weight to kilograms & round up to nears 0.000
		var user_weight =  Math.round( (element.weight * 0.45359237) * 1000) / 1000;

		// GET HEIGHT IN METERS

		//convert feet to inches & add it to inches
		var total_inches = parseInt(element.height_in) + (element.height_ft * 12);
		//convert to meters & round up to nears 0.000
		var user_height = Math.round( (total_inches * 0.0254) * 1000) / 1000;

		//calculate BMI
		user_BMI = Math.round( (user_weight /(user_height*user_height))* 1000) / 1000;

		return user_BMI;
	}
},

 bmrCalc: function(data, element) {
	//console.important("BMR Calculation:");
	var whatToDo = data.split("-")[0];

	if(whatToDo == "calculate_BMR"){
		var canCalculate = true;

		//get GENDER
		var user_gender = element.parentNode.parentNode.children[1].children[1].value;

		//get AGE
		var user_age = element.parentNode.parentNode.children[2].children[1].value;

		//get WEIGHT
		var user_weight = element.parentNode.parentNode.children[3].children[1].value;
		//convert it from pounds to kg
		//and round up to nears 0.000
		var user_weight_KG =  Math.round( (user_weight * 0.45359237) * 1000) / 1000;

		//get HEIGHT
		//then convert height to inches
		var user_height_FT = element.parentNode.parentNode.children[4].children[1].value;
		var user_height_IN = element.parentNode.parentNode.children[4].children[2].value;
		if(!user_height_FT){ user_height_FT = 0;}
		if(!user_height_IN){ user_height_IN= 0;}
		//convert feet to inches
		var feet_as_inches = user_height_FT * 12;
		//add it to inches
		var user_total_inches = parseInt(user_height_IN) + feet_as_inches;
		//convert it to CM
		var user_height_CM = Math.round( (user_total_inches * 2.54) * 1000) / 1000;


		//check for missing VARS
		if(user_gender == "empty-placeholder" 
			|| user_gender == ""
			|| user_weight == "" || user_weight == 0
			|| user_height_CM == "" || user_height_CM == 0){
			canCalculate = false; 
		}

		if(canCalculate){
			console.log("User is: " +user_gender
			+ ", Age: " + user_age
			+ ", Weight: " + user_weight
			+ ", Height: " + user_height_FT + "ft "+ user_height_CM + "in");

			var bmr_GenderSwitch = 5;
			if(user_gender == "female"){ bmr_GenderSwitch = -161; }
			var bmr = (user_height_CM * 6.25) + (user_weight_KG * 9.99) - (user_age * 4.92) + bmr_GenderSwitch;

			console.log("User BMR: " + bmr);
		}else{
			console.log("ERROR Calulating...missing one or more input");
		}

	}
	if(whatToDo == "guru"){
		//return the BMR

		var canCalculate = true;

		//get GENDER
		var user_gender = element.gender;

		//get AGE
		var user_age = element.age;

		//get WEIGHT
		var user_weight = element.weight;
		//convert it from pounds to kg
		//and round up to nears 0.000
		var user_weight_KG =  Math.round( (user_weight * 0.45359237) * 1000) / 1000;

		//get HEIGHT
		//then convert height to inches
		var user_height_FT = element.height_ft;
		var user_height_IN = element.height_in;
		if(!user_height_FT){ user_height_FT = 0;}
		if(!user_height_IN){ user_height_IN= 0;}
		//convert feet to inches
		var feet_as_inches = user_height_FT * 12;
		//add it to inches
		var user_total_inches = parseInt(user_height_IN) + feet_as_inches;
		//convert it to CM
		var user_height_CM = Math.round( (user_total_inches * 2.54) * 1000) / 1000;


		//check for missing VARS
		if(user_gender == ""
		|| user_weight == "" || user_weight == 0
		|| user_height_CM == "" || user_height_CM == 0){
			canCalculate = false; 
		}

		if(canCalculate){
			// console.log("User is: " +user_gender
			// + ", Age: " + user_age
			// + ", Weight: " + user_weight
			// + ", Height: " + user_height_FT + "ft "+ user_height_CM + "in");

			var bmr_GenderSwitch = 5;
			if(user_gender == "female"){ bmr_GenderSwitch = -161; }
			var bmr = (user_height_CM * 6.25) + (user_weight_KG * 9.99) - (user_age * 4.92) + bmr_GenderSwitch;

			// console.log("User BMR: " + bmr);

			return bmr;
		}else{
			console.log("ERROR Calulating...missing one or more input");
		}



	}
},

 bodyFatCalc: function(data, element) {
	//console.important("Body Fat % Calculation:");
	var whatToDo = data.split("-")[0];

	if(whatToDo == "change_toMale"){
		//hide every input except for
		//bodyweight & waist....
		//also dont his the calculation result...and submit button
		var bodyFat_formHolder = element.parentNode.parentNode.children;
		
		for (var i = 1; i < 4; i++) {
			//show bodyweight & waist
			//just in case
			bodyFat_formHolder[i].style.display="";
		}

		for (var i = 4; i < bodyFat_formHolder.length-2; i++) {
			bodyFat_formHolder[i].style.display="none";
		}
		console.log("Form-Type Changed To Male.");

		//hide result div
		element.parentNode.parentNode.children[8].id = "hide";
	}
	if(whatToDo == "change_toFemale"){
		//show every input
		var bodyFat_formHolder = element.parentNode.parentNode.children;
		for (var i = 4; i < bodyFat_formHolder.length-2; i++) {
			bodyFat_formHolder[i].style.display="";
		}
		console.log("Form-Type Changed To Female.");

		//hide result div
		element.parentNode.parentNode.children[8].id = "hide";		
	}

	if(whatToDo == "calculate"){
		//which?
		var isGenderMale = element.parentNode.parentNode.children[1].children[1].checked;
		var isGenderFemale = element.parentNode.parentNode.children[1].children[3].checked;

		if(isGenderMale == true){ 
			bodyFatCalc("calculate_male", element);
		}else if(isGenderFemale == true){ 
			bodyFatCalc("calculate_female", element); 
		}else{
			console.log("ERROR Calulating...missing one or more input");
		}
	}

	if(whatToDo == "calculate_male"){
		var bodyFat_formHolder = element.parentNode.parentNode.children;

		var weight = bodyFat_formHolder[2].children[1].value;
		var waist = bodyFat_formHolder[3].children[1].value;

		if(weight == "" || waist == ""){
			console.log("ERROR Calulating...missing one or more input");
		}else{
			//calculate!
			console.log("Calulating...Body Fat %");

			var value1 = (weight * 1.082) + 94.42;
			var value2 = (waist * 4.15);
			//your weight IF you had No fat in your body
			var leanBody_Mass = Math.round(value1 - value2);
			var bodyFat = (((weight - leanBody_Mass) * 100) / weight).toFixed(2);

			var resultDIV = element.parentNode.parentNode.children[8];
			resultDIV.innerHTML = bodyFat;
			resultDIV.id = "";//unhide result div

			console.log("User's body fat = "+ bodyFat + "%");
		}
	}

	if(whatToDo == "calculate_female"){
		var bodyFat_formHolder = element.parentNode.parentNode.children;

		var weight = bodyFat_formHolder[2].children[1].value;
		var waist = bodyFat_formHolder[3].children[1].value;
		var wrist = bodyFat_formHolder[4].children[1].value;
		var hip = bodyFat_formHolder[5].children[1].value;
		var forearm = bodyFat_formHolder[6].children[1].value;

		if(weight == "" || waist == "" || wrist == "" 
			|| hip == "" || forearm == ""){
			console.log("ERROR Calulating...missing one or more input");
		}else{
			//calculate!
			console.log("Calulating...Body Fat %");

			//this code is not to nicely-written...
			//...but the forumla I wrote it from was even worse...
			//...so I got that going for me I guess...

			var result1 = weight * 0.732;
			var result2 = result1 + 8.987;
			var result3 = wrist / 3.14;
			var result4 = waist * 0.157;
			var result5 = hip * 0.249;
			var result6 = forearm * 0.434;
			var result7 = result2 + result3;
			var result8 = result7 - result4;
			var result9 = result8 - result5;

			var leanBody_Mass = Math.round(result6 + result9);

			var bodyFat = (((weight - leanBody_Mass) * 100) / weight).toFixed(2);

			var resultDIV = element.parentNode.parentNode.children[8];
			resultDIV.innerHTML = bodyFat;
			resultDIV.id = ""; //unhide result div

			console.log("User's body fat = "+ bodyFat + "%");
		}
	}

	if(whatToDo == "guru"){

		if(element.gender == "male"){
			var value1 = (element.weight * 1.082) + 94.42;
			var value2 = (element.waist * 4.15);
			//your weight IF you had No fat in your body
			var leanBody_Mass = Math.round(value1 - value2);
			bodyFat = (((element.weight - leanBody_Mass) * 100) / element.weight).toFixed(2);
			return bodyFat;
		}
		if(element.gender == "female"){
			var result1 = element.weight * 0.732;
			var result2 = result1 + 8.987;
			var result3 = element.wrist / 3.14;
			var result4 = element.waist * 0.157;
			var result5 = element.hip * 0.249;
			var result6 = element.forearm * 0.434;
			var result7 = result2 + result3;
			var result8 = result7 - result4;
			var result9 = result8 - result5;

			var leanBody_Mass = Math.round(result6 + result9);

			var bodyFat = (((element.weight - leanBody_Mass) * 100) / element.weight).toFixed(2);
			return bodyFat;

		}
	}

}

//console.important = function( msg){
	//console.log( '%c%s %s %s', 'color: white; font-size: large; font-weight: bold; background-color: rgba(0,0,0,0.5)', '', msg, '');
//}
};

// We export the API helper
module.exports = formulas;