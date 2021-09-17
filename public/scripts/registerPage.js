

const form = document.getElementById('form');
const username = document.getElementById('username');

const password = document.getElementById('password');
const password2 = document.getElementById('confirm-password');



form.addEventListener('submit', e => {
	//e.preventDefault();
	
	checkInputs();
});

const checkInputs= () => {
	
	const usernameValue = username.value.trim();
	
	const passwordValue = password.value.trim();

    const password2Value = password2.value.trim();
    
    
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
        
	} else if (usernameValue.length < 5) {
        setErrorFor(username, 'Username must be at least 5 characters long');

    }else {
		setSuccessFor(username);
        
	}
	
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if (passwordValue.length < 6) {
        setErrorFor(password, 'Password must be at least 6 characters long');
		
	} else {
        setSuccessFor(password);
    }

    if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else if (password2Value !== passwordValue) {
        setErrorFor(password2, 'Passwords do not match');
        setErrorFor(password, 'Passwords do not match');
		
	} else {
        setSuccessFor(password2);
    }
	
    
	
}

const setErrorFor = (input, message) => {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-input error';
    
	small.innerText = message;
    

}

const setSuccessFor = (input) => {
	const formControl = input.parentElement;
	formControl.className = 'form-input success';
}

