import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertDemoRequestSchema,
  insertContactSubmissionSchema,
  insertNewsletterSignupSchema,
  insertIntegrationRequestSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/demo-requests", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(validatedData);
      res.json(demoRequest);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json(submission);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSignupSchema.parse(req.body);
      const signup = await storage.createNewsletterSignup(validatedData);
      res.json(signup);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.post("/api/integration-requests", async (req, res) => {
    try {
      const validatedData = insertIntegrationRequestSchema.parse(req.body);
      const request = await storage.createIntegrationRequest(validatedData);
      res.json(request);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
