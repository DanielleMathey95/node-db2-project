// STRETCH
const cars = [
  {
    vin: '1111111111111',
    make: 'toyota',
    model: 'prius',
    milage: 215000,
    title: 'clean',
    transmission: 'manual'
  },
  {
    vin: '1111111111111',
    make: 'toyota',
    model: 'corolla',
    milage: 115000,
    title: 'salvage',
  
  },
  {
    vin: '1111111111111',
    make: 'ford',
    model: 'focus',
    milage: 15000,
  }
]
exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}