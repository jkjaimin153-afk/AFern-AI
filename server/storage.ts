import { 
  type User, 
  type InsertUser,
  type DemoRequest,
  type InsertDemoRequest,
  type ContactSubmission,
  type InsertContactSubmission,
  type NewsletterSignup,
  type InsertNewsletterSignup,
  type IntegrationRequest,
  type InsertIntegrationRequest
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createDemoRequest(request: InsertDemoRequest): Promise<DemoRequest>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup>;
  createIntegrationRequest(request: InsertIntegrationRequest): Promise<IntegrationRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private demoRequests: Map<string, DemoRequest>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private newsletterSignups: Map<string, NewsletterSignup>;
  private integrationRequests: Map<string, IntegrationRequest>;

  constructor() {
    this.users = new Map();
    this.demoRequests = new Map();
    this.contactSubmissions = new Map();
    this.newsletterSignups = new Map();
    this.integrationRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createDemoRequest(insertRequest: InsertDemoRequest): Promise<DemoRequest> {
    const id = randomUUID();
    const request: DemoRequest = { 
      ...insertRequest, 
      id,
      phone: insertRequest.phone ?? null,
      business: insertRequest.business ?? null,
      website: insertRequest.website ?? null,
      industry: insertRequest.industry ?? null,
      message: insertRequest.message ?? null,
      integrations: insertRequest.integrations ?? null,
      createdAt: new Date()
    };
    this.demoRequests.set(id, request);
    return request;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      phone: insertSubmission.phone ?? null,
      business: insertSubmission.business ?? null,
      website: insertSubmission.website ?? null,
      industry: insertSubmission.industry ?? null,
      message: insertSubmission.message ?? null,
      integrations: insertSubmission.integrations ?? null,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async createNewsletterSignup(insertSignup: InsertNewsletterSignup): Promise<NewsletterSignup> {
    const id = randomUUID();
    const signup: NewsletterSignup = {
      ...insertSignup,
      id,
      createdAt: new Date()
    };
    this.newsletterSignups.set(id, signup);
    return signup;
  }

  async createIntegrationRequest(insertRequest: InsertIntegrationRequest): Promise<IntegrationRequest> {
    const id = randomUUID();
    const request: IntegrationRequest = {
      ...insertRequest,
      id,
      email: insertRequest.email ?? null,
      notes: insertRequest.notes ?? null,
      createdAt: new Date()
    };
    this.integrationRequests.set(id, request);
    return request;
  }
}

export const storage = new MemStorage();
