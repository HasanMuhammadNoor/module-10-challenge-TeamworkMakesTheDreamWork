const Employee = require("./employee");

class Manager extends Manager{
    constructor(name,id,email,github){
        super(name,id,github);
        this.github = github;
    }
    getGitHub(){
        return this.github;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;