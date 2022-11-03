const Employee = require("./Employee");

class Intern extends Intern{
    constructor(name,id,email,github){
        super(name,id,github);
        this.github = github;
    }
    getGitHub(){
        return this.github;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;