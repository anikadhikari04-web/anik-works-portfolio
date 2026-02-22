import { pgTable, serial } from "drizzle-orm/pg-core";

export const dummy = pgTable("dummy", {
  id: serial("id").primaryKey(),
});
