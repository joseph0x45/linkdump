import { drizzle } from "drizzle-orm/node-postgres";
import { integer, pgTable, serial, uuid, text, boolean} from "drizzle-orm/pg-core"
import { eq, sql, InferModel } from "drizzle-orm"
import { Pool } from "pg";


export const Users = pgTable("users", {
    id: uuid('id').primaryKey(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    active: boolean('active').notNull()
})

export const Dumps = pgTable("dumps", {
    id: uuid('id').primaryKey(),
    creator: uuid('creator').references(()=> Users.id).notNull(),
    description: text('description').notNull(),
    public: boolean('public').notNull(),
    active: boolean('active').notNull(),
    noices: integer('noices').default(0)
})

export const Links = pgTable("links", {
    id: uuid('id').primaryKey(),
    publisher: uuid('publisher').references(()=> Users.id ).notNull(),
    description: text('description').notNull(),
    url: text('url').notNull(),
    public: boolean('public').notNull(),
    active: boolean('active').notNull(),
    noices: integer('noices').default(0)
})

export const Reports = pgTable("reports", {
    id: serial('id').primaryKey(),
    reporter: uuid('reporter').references(()=> Users.id),
    reportee: uuid('reportee').references(()=> Users.id),
    reason: text('reason')
})

export type User = InferModel<typeof Users>
export type Dump = InferModel<typeof Dumps>
export type Link = InferModel<typeof Links>
export type Report = InferModel<typeof Reports>
