function bmiCalc(data, element) {
	console.important("BMI Calculation:");
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
}

function bmrCalc(data, element) {

}

console.important = function( msg){
	console.log( '%c%s %s %s', 'color: white; font-size: large; font-weight: bold; background-color: rgba(0,0,0,0.5)', '', msg, '');
}