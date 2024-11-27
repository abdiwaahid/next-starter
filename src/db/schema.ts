import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const quotes = sqliteTable("quotes", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    text: text("text").notNull(),
    author: text("author").notNull(),
    category: text("category").notNull(),
    likes: integer("likes").default(0),
    comments: integer("comments").default(0),
    image: text("image"),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    name: text('name'),
});

// Categories table
export const categories = sqliteTable('categories', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull().unique(),
    description: text('description'),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// Likes table (for tracking who liked which quote)
export const quoteLikes = sqliteTable('quote_likes', {
    userId: integer('user_id').notNull().references(() => users.id),
    quoteId: integer('quote_id').notNull().references(() => quotes.id),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// Bookmarks table (for saving quotes)
export const bookmarks = sqliteTable('bookmarks', {
    userId: integer('user_id').notNull().references(() => users.id),
    quoteId: integer('quote_id').notNull().references(() => quotes.id),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
},);

// Category follows table (for users following categories)
export const categoryFollows = sqliteTable('category_follows', {
    userId: integer('user_id').notNull().references(() => users.id),
    categoryId: integer('category_id').notNull().references(() => categories.id),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
},);