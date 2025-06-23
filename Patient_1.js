class Patient {
    constructor (f, i, o, d, s, sh) {
        this.F = f;
        this.I = i;
        this.O = o;
        this.D = new Date(d);
        this.S = s;
        this.SH = sh;
    }
    setById () {
        document.getElementById("F").textContent =this.F;
        document.getElementById("I").textContent =this.I;
        document.getElementById("O").textContent =this.O;
        document.getElementById("Y").textContent =this.D.getFullYear();
        document.getElementById("S").textContent =this.S;
        document.getElementById("SH").textContent =this.SH;
    }
}
let Petrova = new Patient ('Петрова', 'Ксения', 'Андреевна', new Date (2004, 7, 15), 'ж', 'назначено');
Petrova.setById();
//let Petrov = new Patient ('Петров', 'Андрей', 'Васильевич', new Date (1975, 8, 5), 'м', 'медотвод');
//Petrov.setById();
let Polovko = new Patient ('Половко', 'Александр', 'Александрович', new Date (2002, 5, 14), 'м', 'исполнено');
Polovko.setById();