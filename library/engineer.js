const Employee = require("./employee");

class Engineer extends Engineer{
    constructor(name,id,email,github){
        super(name,id,github);
        this.github = github;
    }
    getGitHub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;