
	var json;

	function createForm() {
		var name = prompt("Enter the Form Name:", "");
		var heading = document.createElement("h3");
		var t = document.createTextNode(name);
		heading.appendChild(t);
		document.getElementById("elements").appendChild(heading);
		var form = document.createElement("form");
		form.id = "form";
		form.action="#";
		form.addEventListener("submit", function() {
			validateForm();
		});
		var input = document.createElement("input");
		input.type = "submit";
		input.name="submit";
		input.value = "submit";
		form.appendChild(input);
		document.getElementById("elements").appendChild(form);
		json = '{"form":[';
	}

	function createTextbox() {
		var name = prompt("Name:", "");
		var required = prompt("Is this required? (Y/N):", "");
		var max = prompt("Max character length:", "");
		var label = document.createElement("label");
		var t = document.createTextNode(name + ":");
		label.appendChild(t);
		document.getElementById("form").appendChild(label);
		var input = document.createElement("input");
		input.type = "text";
		input.name = name;
		input.setAttribute("maxlength", max);
		if(required == "Y" || required == "y")
		{
			input.required = true;
		}
		document.getElementById("form").appendChild(input);
		json += '{"element":"input", "type":"text", "name":"' + name + '"},';
	}

	function createPasswordbox() {
		var name = prompt("Name:", "");
		var required = prompt("Is this required? (Y/N):", "");
		var max = prompt("Max character length:", "");
		var label = document.createElement("label");
		var t = document.createTextNode("Password:");
		label.appendChild(t);
		document.getElementById("form").appendChild(label);
		var input = document.createElement("input");
		input.type = "password";
		input.name = name;
		input.setAttribute("maxlength", max);
		if(required == "Y" || required == "y")
		{
			input.required = true;
		}
		document.getElementById("form").appendChild(input);
		json += '{"element":"input", "type":"password", "name":"' + name +'"},';
	}

	function createNumberbox() {;
		var name = prompt("Name:", "");
		var required = prompt("Is this required? (Y/N):", "");
		var min = prompt("Minimum value:", "");
		var max = prompt("Maximum value:", "");
		var label = document.createElement("label");
		var t = document.createTextNode(name + ":");
		label.appendChild(t);
		document.getElementById("form").appendChild(label);
		var input = document.createElement("input");
		input.type = "number";
		input.name = name;
		input.min = min;
		input.max = max;
		if(required == "Y" || required == "y")
		{
			input.required = true;
		}
		document.getElementById("form").appendChild(input);
		json += '{"element":"input", "type":"number", "name":"' + name +'"},';
	}

	function createCheckbox() {
		var name = prompt("Name:", "");
		var value = prompt("Value:", "");
		var input = document.createElement("input");
		input.type = "checkbox";
		input.name = name;
		input.value = value;
		document.getElementById("form").appendChild(input);
		var label = document.createElement("label");
		var t = document.createTextNode(name);
		label.appendChild(t);
		document.getElementById("form").appendChild(label);
		json += '{"element":"input", "type":"checkbox", "name":"' + name +'", "value":"' + value + '"},';
	}

	function createRadio() {
		var name = prompt("Name:", "");
		var value = prompt("Value:", "");
		var input = document.createElement("input");
		input.type = "radio";
		input.name = name;
		input.value = value;
		document.getElementById("form").appendChild(input);
		var label = document.createElement("label");
		var t = document.createTextNode(name);
		label.appendChild(t);
		document.getElementById("form").appendChild(label);
		json += '{"element":"input", "type":"radio", "name":"' + name +'", "value":"' + value + '"},';
	}

	function createFile() {
		var name = prompt("Name:", "");
		var required = prompt("Is this required? (Y/N):", "");
		var input = document.createElement("input");
		input.type = "file";
		input.name = name;
		if(required == "Y" || required == "y")
		{
			input.required = true;
		}
		document.getElementById("form").appendChild(input);
		json += '{"element":"input", "type":"file", "name":"' + name +'"},';
	}

	function createTextArea() {
		var name = prompt("Name:", "");
		var required = prompt("Is this required? (Y/N):", "");
		var max = prompt("Max character length:", "");
		var label = document.createElement("label");
		var t = document.createTextNode(name + ":");
		label.appendChild(t);
		document.getElementById("form").appendChild(label);
		var textarea = document.createElement("textarea");
		textarea.name = name;
		textarea.setAttribute("maxlength", max);
		if(required == "Y" || required == "y")
		{
			textarea.required = true;
		}
		document.getElementById("form").appendChild(textarea);
		json += '{"element":"textarea", "name":"' + name +'"},';
	}

	function createKeygen() {
		var name = prompt("Name:", "");
		var required = prompt("Is this required? (Y/N):", "");
		var label = document.createElement("label");
		var t = document.createTextNode(name + ":");
		label.appendChild(t);
		document.getElementById("form").appendChild(label);
		var keygen = document.createElement("keygen");
		keygen.name = name;
		if(required == "Y" || required == "y")
		{
			keygen.required = true;
		}
		document.getElementById("form").appendChild(keygen);
		json += '{"element":"keygen", "name":"' + name +'"},';
	}

	function createSelectList() {
		var name = prompt("Name:", "");
		var number = prompt("Enter the no. of options:");
		var label = document.createElement("label");
		var t = document.createTextNode(name + ":");
		label.appendChild(t);
		document.getElementById("form").appendChild(label);
		var select = document.createElement("select");
		select.name = name;
		json += '{"element":"select", "name":"' + name +'", "options":[';
        	for(i = 0; i < number; i++)
		{
            		var option = document.createElement("option");
			var name = prompt("Option Name:");
            		var value = prompt("Option Value:");
            		option.value= value;
            		option.text= name;
            
            		json+='{"name":"' + name + '","value":"' + value +'"},';
            		select.appendChild(option);
        	}
		json+=']}';
		document.getElementById("form").appendChild(select);
	}

	function validateForm() {
		var input = document.getElementsByTagName("input");
		var i;		
		for(i = 0; i < input.length; i++)
		{

			if(input[i].type == "password")
			{

				if(!checkPassword(input[i].value))
				{
					alert("Password must be at least one number, one lowercase, one uppercase letter")
					return false;
				}
			}
		}
		submiited();
	}

	function checkPassword(str)
  	{
    		var teststr = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    		return teststr.test(str);
  	}

	function submitted() {
		json = json.substring(0, json.length - 1);
		json += "]}";
    		localStorage.setItem("json", json);
	}

	function loadData() {
		console.log(localStorage.getItem('json'));
		var formData = JSON.parse(localStorage.getItem('json'));
		if(formData != null) {
			return buildForm(formData);
		}
	}

	function buildForm(formData) {
		var name = prompt("Form Name:", "");
		var heading = document.createElement("h3");
		var t = document.createTextNode(name);
		heading.appendChild(t);
		document.getElementById("elements").appendChild(heading);
		var form = document.createElement("form");
		form.id = "form";
		form.action="#";
		form.addEventListener("submit", function() {
			validateForm();
		});
		var input = document.createElement("input");
		input.type = "submit";
		input.name="submit";
		input.value = "submit";
		form.appendChild(input);
		document.getElementById("elements").appendChild(form);
		json = '{"form":[';

		for (i = 0; i < formData.form.length; i++)
			{
				if(formData.form[i].element == "input")
				{
						var label = document.createElement("label");
						var t = document.createTextNode(formData.form[i].name + ":");
						label.appendChild(t);
						document.getElementById("form").appendChild(label);
						var input = document.createElement("input");
						input.type = formData.form[i].type;
						input.name = formData.form[i].name;
						document.getElementById("form").appendChild(input);
						json += '{"element":"input", "type":"' + formData.form[i].type + '", "name":"' + formData.form[i].name + '"},';
				}

				if(formData.form[i].element == "textarea")
				{
						var label = document.createElement("label");
						var t = document.createTextNode(formData.form[i].name + ":");
						label.appendChild(t);
						document.getElementById("form").appendChild(label);
						var input = document.createElement("textarea");
						input.name = formData.form[i].name;
						document.getElementById("form").appendChild(input);
						json += '{"element":"textarea", "name":"' + formData.form[i].name + '"},';
				}

				if(formData.form[i].element == "keygen")
				{
						var label = document.createElement("label");
						var t = document.createTextNode(formData.form[i].name + ":");
						label.appendChild(t);
						document.getElementById("form").appendChild(label);
						var input = document.createElement("keygen");
						input.name = formData.form[i].name;
						document.getElementById("form").appendChild(input);
						json += '{"element":"keygen", "name":"' + formData.form[i].name + '"},';
				}

				if(formData.form[i].element == "select")
				{
						var label = document.createElement("label");
						var t = document.createTextNode(formData.form[i].name + ":");
						label.appendChild(t);
						document.getElementById("form").appendChild(label);
						var input = document.createElement("select");
						input.type = formData.form[i].type;
						input.name = formData.form[i].name;
						document.getElementById("form").appendChild(input);
				}
			}
	}