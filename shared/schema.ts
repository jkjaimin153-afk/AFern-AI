import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const demoRequests = pgTable("demo_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  business: text("business"),
  website: text("website"),
  industry: text("industry"),
  integrations: text("integrations").array(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  business: text("business"),
  website: text("website"),
  industry: text("industry"),
  integrations: text("integrations").array(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsletterSignups = pgTable("newsletter_signups", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const integrationRequests = pgTable("integration_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  integration: text("integration").notNull(),
  priority: text("priority").notNull(),
  notes: text("notes"),
  email: text("email"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDemoRequestSchema = createInsertSchema(demoRequests).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  business: z.string().optional(),
  website: z.string().optional(),
  industry: z.string().optional(),
  integrations: z.array(z.string()).optional(),
  message: z.string().optional(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  business: z.string().optional(),
  website: z.string().optional(),
  industry: z.string().optional(),
  integrations: z.array(z.string()).optional(),
  message: z.string().optional(),
});

export const insertNewsletterSignupSchema = createInsertSchema(newsletterSignups).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Valid email is required"),
});

export const insertIntegrationRequestSchema = createInsertSchema(integrationRequests).omit({
  id: true,
  createdAt: true,
}).extend({
  integration: z.string().min(1, "Integration is required"),
  priority: z.string().min(1, "Priority is required"),
  notes: z.string().optional(),
  email: z.string().email().optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertDemoRequest = z.infer<typeof insertDemoRequestSchema>;
export type DemoRequest = typeof demoRequests.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertNewsletterSignup = z.infer<typeof insertNewsletterSignupSchema>;
export type NewsletterSignup = typeof newsletterSignups.$inferSelect;
export type InsertIntegrationRequest = z.infer<typeof insertIntegrationRequestSchema>;
export type IntegrationRequest = typeof integrationRequests.$inferSelect;
