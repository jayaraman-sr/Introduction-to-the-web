// Image switcher code


function setUserName() {
  var myName = prompt('Please enter your name.');
  document.getElementById('user_name').innerHTML = "Current user is "+ myName;
  
}

function addImage() {

	var button_value = document.getElementById('add_img').innerHTML;
	var image = document.getElementById('image');
	if(button_value == 'Add Image'){
		document.getElementById('add_img').innerHTML = "Remove Image";
		image.innerHTML = "Click on Image to change it";
		image.innerHTML = image.innerHTML + '<img src=\"images/firefox-icon.png\" alt=\"My test image\">';
	}
	else{
		document.getElementById('add_img').innerHTML = "Add Image";
		image.innerHTML = "";
	}
	myImage = document.querySelector('img');

	myImage.onclick = function() {
		var mySrc = myImage.getAttribute('src');
		if(mySrc === 'images/firefox-icon.png') {
	      myImage.setAttribute ('src','images/firefox2.png');
		} else {
		  myImage.setAttribute ('src','images/firefox-icon.png');
		}
	}
}

