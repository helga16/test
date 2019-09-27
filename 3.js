function authenticate (login, password) {

  if (login == 'login' && password === 'password') {
    return 'You were logged in';
	
  } else {
	  alert('gggggg');
    return 'Login is incorrect';
  }
}