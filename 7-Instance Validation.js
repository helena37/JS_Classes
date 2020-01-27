class CheckingAccount {
    _clientId;
    _email;
    _firstName;
    _lastName;


    constructor(clientId, email, firstName, lastName) {
        this.setClientId(clientId)
        this.setEmail(email)
        this.setFirstName(firstName);
        this.setLastName(lastName);
    }


    getClientId() {
        return this._clientId;
    }

    setClientId(value) {
        if (value.length !== 6 || typeof Number(value) !== "number") {
            throw new TypeError("Client ID must be a 6-digit number");
        }

        this._clientId = value;
    }

    getEmail() {
        return this._email;
    }

    setEmail(value) {
        if (!value.match(/^\w+@[a-zA-Z.]+$/g)) {
            throw new TypeError("Invalid e-mail");
        }
        this._email = value;
    }

    nameValidation(value, prop) {
        if (value.length < 3 || value.length > 20) {
            throw new TypeError(`${prop} name must be between 3 and 20 characters long`);
        }

        const pattern = /^[A-Za-z]+$/g;

        if (!pattern.test(value)) {
            throw new TypeError(`${prop} name must contain only Latin characters`);
        }
    }

    getFirstName() {
        return this._firstName;
    }

    setFirstName(value) {
        this.nameValidation(value, "First");

        this._firstName = value;
    }


    getLastName() {
        return this._lastName;
    }

    setLastName(value) {
        this.nameValidation(value, "Last");
        this._lastName = value;
    }
}

let acc = new CheckingAccount('1314',
    'ivan@some.com',
    'Ivan', 'Petrov');
