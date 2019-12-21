
exports.seed = async function(knex) {
  await knex("cars").truncate()
  await knex("cars").insert([
    { vin: "GDNW4343DR",make: "car1", model: "car1", mileage: 10000},
    { vin: "ACMDK3213JFD2",make: "car2", model: "car2", mileage: 10000},
    { vin: "CMVJ2348FMEJ",make: "car3", model: "car3", mileage: 10000},
  ])
  
};
