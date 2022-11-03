const Employee = require("./employee");

class Manager extends Manager{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.github = this.github;
    }
    getGitHub(){
        return this.github;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;