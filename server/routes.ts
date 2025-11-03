import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertDemoRequestSchema,
  insertContactSubmissionSchema,
  insertNewsletterSignupSchema,
  insertIntegrationRequestSchema
} from "@shared/schema";
import { sendEmailNotification } from "./gmail";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/demo-requests", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(validatedData);
      
      const emailBody = `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
        <p><strong>Business:</strong> ${validatedData.business || 'Not provided'}</p>
        <p><strong>Website:</strong> ${validatedData.website || 'Not provided'}</p>
        <p><strong>Industry:</strong> ${validatedData.industry || 'Not provided'}</p>
        <p><strong>Message:</strong> ${validatedData.message || 'Not provided'}</p>
      `;
      
      sendEmailNotification('New Demo Request - Afern AI', emailBody);
      
      res.json(demoRequest);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      const emailBody = `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong> ${validatedData.message}</p>
      `;
      
      sendEmailNotification('New Contact Submission - Afern AI', emailBody);
      
      res.json(submission);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSignupSchema.parse(req.body);
      const signup = await storage.createNewsletterSignup(validatedData);
      
      const emailBody = `
        <h2>New Newsletter Signup</h2>
        <p><strong>Email:</strong> ${validatedData.email}</p>
      `;
      
      sendEmailNotification('New Newsletter Signup - Afern AI', emailBody);
      
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
