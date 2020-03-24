function getData() {
		displayCurrentTime();
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
			var getData = JSON.parse(this.responseText);
			<!-- console.log(getData); -->
			local_total_cases = getData.data.local_total_cases;
			local_new_cases = getData.data.local_new_cases;
			local_total_number_of_individuals_in_hospitals = getData.data.local_total_number_of_individuals_in_hospitals;
			local_deaths = getData.data.local_deaths;
			local_recovered = getData.data.local_recovered;
			update_date_time = getData.data.update_date_time;
			global_new_cases = getData.data.global_new_cases;
			global_total_cases = getData.data.global_total_cases;
			global_deaths = getData.data.global_deaths;
			global_new_deaths = getData.data.global_new_deaths;
			global_recovered = getData.data.global_recovered;
			
			document.getElementById("local_total_cases").innerHTML = local_total_cases;
			document.getElementById("local_new_cases").innerHTML = local_new_cases;
			document.getElementById("local_total_number_of_individuals_in_hospitals").innerHTML = local_total_number_of_individuals_in_hospitals;
			document.getElementById("local_deaths").innerHTML = local_deaths;
			document.getElementById("local_recovered").innerHTML = local_recovered;
			document.getElementById("lastUpdatedTime1").innerHTML = "Latest Update: " + update_date_time;
			document.getElementById("lastUpdatedTime2").innerHTML = "Latest Update: " + update_date_time;
			document.getElementById("lastUpdatedTime3").innerHTML = "Latest Update: " + update_date_time;
			document.getElementById("lastUpdatedTime4").innerHTML = "Latest Update: " + update_date_time;
			document.getElementById("lastUpdatedTime5").innerHTML = "Latest Update: " + update_date_time;
			document.getElementById("global_new_cases").innerHTML = global_new_cases;
			document.getElementById("global_total_cases").innerHTML = global_total_cases;
			document.getElementById("global_deaths").innerHTML = global_deaths;
			document.getElementById("global_new_deaths").innerHTML = global_new_deaths;
			document.getElementById("global_recovered").innerHTML = global_recovered;
			document.getElementById("lastUpdatedTime6").innerHTML = "Latest Update: " + update_date_time;
			document.getElementById("lastUpdatedTime7").innerHTML = "Latest Update: " + update_date_time;
			document.getElementById("lastUpdatedTime8").innerHTML = "Latest Update: " + update_date_time;
			document.getElementById("lastUpdatedTime9").innerHTML = "Latest Update: " + update_date_time;
			document.getElementById("lastUpdatedTime10").innerHTML = "Latest Update: " + update_date_time;
		  }
		};
		xhttp.open(
		  "GET",
		  "https://hpb.health.gov.lk/api/get-current-statistical",
		  true
		);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send("");
	}
	
	
	function displayCurrentTime() {
	  today = new Date();
	  var date =
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
	  var time =
		today.getHours() + ":" + today.getMinutes();
	  dateTime = date + " " + time;
	  // console.log(dateTime);
	  document.getElementById("currentTime").innerHTML = "Sri Lanka  " + dateTime;
	  convertedDateTime = dateTime.toString();
	}