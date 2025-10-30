import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Download, Key, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Developers() {
  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-developers-title">
              Built for <span className="text-accent">Developers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive API, webhooks, and SDKs to integrate InFlowCalls into your existing systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6">
              <Code className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-bold mb-2">REST API</h3>
              <p className="text-sm text-muted-foreground">Full REST API with comprehensive documentation</p>
            </Card>
            <Card className="p-6">
              <Zap className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-bold mb-2">Webhooks</h3>
              <p className="text-sm text-muted-foreground">Real-time event streaming to your systems</p>
            </Card>
            <Card className="p-6">
              <Download className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-bold mb-2">SDKs</h3>
              <p className="text-sm text-muted-foreground">Node.js, Python, and more coming soon</p>
            </Card>
            <Card className="p-6">
              <Key className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-bold mb-2">OAuth 2.0</h3>
              <p className="text-sm text-muted-foreground">Secure authentication for native apps</p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-8">API Endpoints</h2>
            
            <div className="space-y-6">
              <Card className="p-6" data-testid="card-endpoint-webhooks">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded text-sm font-mono font-bold text-green-500">
                    POST
                  </div>
                  <code className="text-sm font-mono">/webhooks/call</code>
                </div>
                <p className="text-muted-foreground mb-4">Receive call event webhooks</p>
                <Tabs defaultValue="request">
                  <TabsList>
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="request">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "event": "call.completed",
  "call_id": "call_abc123",
  "phone_number": "+1234567890",
  "duration": 180,
  "transcript": "Full call transcript...",
  "intent": "appointment_booking",
  "metadata": {
    "appointment_time": "2024-03-15T14:00:00Z",
    "service_type": "plumbing"
  }
}`}
                    </pre>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "status": "received",
  "webhook_id": "wh_xyz789"
}`}
                    </pre>
                  </TabsContent>
                </Tabs>
              </Card>

              <Card className="p-6" data-testid="card-endpoint-transcripts">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-sm font-mono font-bold text-blue-500">
                    GET
                  </div>
                  <code className="text-sm font-mono">/api/transcripts/:call_id</code>
                </div>
                <p className="text-muted-foreground mb-4">Retrieve call transcripts and metadata</p>
                <Tabs defaultValue="response">
                  <TabsList>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="response">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "call_id": "call_abc123",
  "transcript": "Full conversation text...",
  "sentiment": "positive",
  "confidence": 0.95,
  "intents": ["booking", "payment"],
  "entities": {
    "date": "2024-03-15",
    "time": "14:00",
    "service": "emergency_plumbing"
  }
}`}
                    </pre>
                  </TabsContent>
                </Tabs>
              </Card>

              <Card className="p-6" data-testid="card-endpoint-schedule">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded text-sm font-mono font-bold text-green-500">
                    POST
                  </div>
                  <code className="text-sm font-mono">/api/schedule</code>
                </div>
                <p className="text-muted-foreground mb-4">Programmatically schedule outbound calls</p>
                <Tabs defaultValue="request">
                  <TabsList>
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="request">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "phone_number": "+1234567890",
  "scheduled_time": "2024-03-15T10:00:00Z",
  "message_template": "appointment_reminder",
  "variables": {
    "name": "John Smith",
    "appointment_time": "2PM tomorrow"
  }
}`}
                    </pre>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "scheduled_call_id": "sched_def456",
  "status": "scheduled",
  "estimated_delivery": "2024-03-15T10:00:00Z"
}`}
                    </pre>
                  </TabsContent>
                </Tabs>
              </Card>

              <Card className="p-6" data-testid="card-endpoint-transfer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded text-sm font-mono font-bold text-green-500">
                    POST
                  </div>
                  <code className="text-sm font-mono">/api/transfer</code>
                </div>
                <p className="text-muted-foreground mb-4">Initiate live agent transfer during active call</p>
                <Tabs defaultValue="request">
                  <TabsList>
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="request">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "call_id": "call_abc123",
  "transfer_to": "+1987654321",
  "context": "Customer needs custom quote",
  "warm_transfer": true
}`}
                    </pre>
                  </TabsContent>
                  <TabsContent value="response">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "transfer_id": "xfer_ghi789",
  "status": "connecting",
  "agent_phone": "+1987654321"
}`}
                    </pre>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-8">Webhook Examples</h2>
            <Tabs defaultValue="nodejs">
              <TabsList>
                <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
              </TabsList>
              <TabsContent value="nodejs">
                <Card className="p-6">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`const express = require('express');
const app = express();

app.post('/inflowcalls/webhook', express.json(), (req, res) => {
  const { event, call_id, transcript } = req.body;
  
  if (event === 'call.completed') {
    // Process completed call
    console.log(\`Call \${call_id} completed\`);
    console.log(\`Transcript: \${transcript}\`);
    
    // Update your database, CRM, etc.
  }
  
  res.json({ status: 'received' });
});

app.listen(3000);`}
                  </pre>
                </Card>
              </TabsContent>
              <TabsContent value="python">
                <Card className="p-6">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/inflowcalls/webhook', methods=['POST'])
def handle_webhook():
    data = request.get_json()
    event = data.get('event')
    call_id = data.get('call_id')
    transcript = data.get('transcript')
    
    if event == 'call.completed':
        # Process completed call
        print(f'Call {call_id} completed')
        print(f'Transcript: {transcript}')
        
        # Update your database, CRM, etc.
    
    return jsonify({'status': 'received'})

if __name__ == '__main__':
    app.run(port=3000)`}
                  </pre>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-8">Security & Authentication</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-bold mb-4">API Authentication</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  All API requests must include your API key in the Authorization header:
                </p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`Authorization: Bearer your_api_key_here`}
                </pre>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-4">Webhook Security</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  All webhooks include an HMAC signature for verification:
                </p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`X-InFlowCalls-Signature: sha256=...`}
                </pre>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Button variant="outline" className="w-full mb-2" data-testid="button-sdk-nodejs">
                <Download className="mr-2 h-4 w-4" />
                Node.js SDK
              </Button>
              <p className="text-xs text-muted-foreground">npm install inflowcalls</p>
            </Card>
            <Card className="p-6 text-center">
              <Button variant="outline" className="w-full mb-2" data-testid="button-sdk-python">
                <Download className="mr-2 h-4 w-4" />
                Python SDK
              </Button>
              <p className="text-xs text-muted-foreground">pip install inflowcalls</p>
            </Card>
            <Card className="p-6 text-center">
              <Button variant="outline" className="w-full mb-2" data-testid="button-postman">
                <Download className="mr-2 h-4 w-4" />
                Postman Collection
              </Button>
              <p className="text-xs text-muted-foreground">Import API collection</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
