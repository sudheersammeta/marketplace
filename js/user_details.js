function display_addUser_form(){
	//alert("hi");
	$("#addUserForm").css("display", "block");
    $("#searchUserForm").css("display", "none");
}

function display_searchUser_form(){
	$("#searchUserForm").css("display", "block");
    $("#addUserForm").css("display", "none");
}

function updateSelectLabel(){
	$("#id_criteria_val").val("");
	var selected = $("#id_select_criteria").val();
	var displayText = "Enter ";
	if(selected == "first_name")
		displayText = displayText + "first name";
	else if(selected == "last_name")
		displayText = displayText + "last name";
	else if(selected == "email_id")
		displayText = displayText + "email ID";
	else if(selected == "cell_phone")
		displayText = displayText + "mobile num";
	else if(selected == "home_address")
		displayText = displayText + "home address";
	else{
		$("#id_criteria_label").css("display", "none");
		$("#id_criteria_val").css("display", "none");
		return;
	}

	document.getElementById("id_criteria_label").innerHTML = displayText;
	
	$("#id_criteria_label").css("display", "block");
	$("#id_criteria_val").css("display", "block");
}