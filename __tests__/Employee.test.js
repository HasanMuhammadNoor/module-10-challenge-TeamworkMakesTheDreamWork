const Employee = require("../library/Employee");

test("Is Employee and Object?", function(){
    const testEmployee = new Employee("Hasan", "03272001", "kittenstudious@gmail.com");
    expect(typeof(testEmployee).toBe("object"));
})

test("Check Employee class name attribute", function(){
    const testEmployee = new Employee("Hasan", 03272001, "kittenstudious@gmail.com");
    expect((testEmployee.name).toBe("Hasan"));
})
test("Check Employee class id attribute", function(){
    const testEmployee = new Employee("Hasan", 03272001, "kittenstudious@gmail.com");
    expect((testEmployee.id).toBe(03272001));
})
test("Check Employee class email attribute", function(){
    const testEmployee = new Employee("Hasan", 03272001, "kittenstudious@gmail.com");
    expect((testEmployee.email).toBe("kittenstudious@gmail.com"));
})

test("Check Employee class getName method", function(){
    const testEmployee = new Employee("Hasan", 03272001, "kittenstudious@gmail.com");
    expect((testEmployee.geNname()).toBe("Hasan"));
})
test("Check Employee class getId method", function(){
    const testEmployee = new Employee("Hasan", 03272001, "kittenstudious@gmail.com");
    expect((testEmployee.getId()).toBe(03272001));
})
test("Check Employee class getEmail method", function(){
    const testEmployee = new Employee("Hasan", 03272001, "kittenstudious@gmail.com");
    expect((testEmployee.getEmail()).toBe("kittenstudious@gmail.com"));
})
