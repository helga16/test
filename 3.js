function authenticate (login, password) {
  if (login === 'login' && password === 'password') {
    var bsr = 'hghgghg';
	return 'You were logged in';
  } else {
    return 'Login is incorrect';
  }
}