class Persona {

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais );
    }

    const(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellidio = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellidio}, ${this.pais}`);
    }
}

const   nombre1   = 'Melissa',
        apellido1 = 'Flores',
        pais1     = 'Honduras';

const fher = {
    nombre: 'Fernando',
    apellidio: 'Herrera',
    pais: 'Costa Rica'
}


const persona1 = new Persona( nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fher);

persona1.getInfo();
persona2.getInfo();