class User {
  constructor(data) {
    this.data = data;
  }

  login() {}
  register() {
    console.log("inside class USer", this.data);
  }
}

module.exports = User;
