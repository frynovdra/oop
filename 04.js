class Validator {
    static validate(data){
        data = Object.entries(data)

        data[1][0]
    }
}

haha = Validator.validate({
    name : "Frisy",
    email : "frisynovel@email.com",
    age : 23
})

console.log(haha);