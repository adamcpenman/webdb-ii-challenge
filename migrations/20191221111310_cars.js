
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
    //   table.integer("id").notNull().unique().primary()
      table.increments("id")
      table.float("vin")
      table.text("make").notNull()
      table.text("model").notNull()
      table.float("mileage")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
