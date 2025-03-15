const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grupo-10:grupo10@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(() => console.log('Conexion exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB', error));

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: String
  }, { collection: 'Grupo-10' });
  
  const SuperHero = mongoose.model('SuperHero', superheroSchema);


async function insertSuperHero() {
    const hero = new SuperHero({
      nombreSuperHeroe: 'Robin',
      nombreReal: 'Richard Grayson',
      edad: 16,
      planetaOrigen: 'Tierra',
      debilidad: 'Falta de poderes sobrehumanos',
      poderes: ['Artes marciales', 'Gadgets'],
      aliados: ['Batman', 'Chico Bestia'],
      enemigos: ['Deathstroke'],
      creador: 'Fabricio'
    });
    await hero.save();
    console.log('Superhéroe insertado:', hero);
}
  
insertSuperHero();

/*
async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
      { nombreSuperHeroe: nombreSuperHeroe },
      { $set: { edad: 32 } }
    );
    console.log('Resultado de la actualización:', result);
}
  
updateSuperHero();
*/


async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
    console.log('Superhéroe eliminado:', result);
}

deleteSuperHero();

  

async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
    console.log('Superhéroes encontrados:', heroes);
}

findSuperHeroes();

