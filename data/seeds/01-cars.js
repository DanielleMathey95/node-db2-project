// STRETCH
const cars = [
  {
    vin: "2HGFA16559H312891",
    make: "toyota",
    model: "prius",
    mileage: 215000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "KL1TD56E39B357232",
    make: "toyota",
    model: "corolla",
    mileage: 115000,
    title: "salvage",
  },
  {
    vin: "1G6DM56T550237792",
    make: "ford",
    model: "focus",
    mileage: 15000,
  },
];
exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
