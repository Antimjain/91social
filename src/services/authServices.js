const users = [{id:1,username: "antim",password: "123",firstName: "Antim",lastName: "Jain",role: "admin"},{id:2,username: "vaibhav",password: "123",firstName: "Vaibhav",lastName: "Jain",role: "user"}];

const gerUser = (username, password) => {
	return users.find(user => user.username === username && user.password === password);
}

const doLogin = (username, password) => {
  return new Promise((resolve, reject) => {
		resolve(gerUser(username, password));
	});
}

export const authServices = {
  doLogin,
};