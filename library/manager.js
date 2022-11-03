const Employee = require("./employee");

class Manager extends Manager{
    constructor(name,id,email,officeNumber){
        super(name,id,officeNumber);
        this.officeNumber = officeNumber;
    }
    getofficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;