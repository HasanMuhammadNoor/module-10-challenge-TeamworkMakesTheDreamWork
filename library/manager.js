const Employee = require("./employee");

class Manager extends Manager{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = this.officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;