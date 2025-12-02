import type { Handler } from "@netlify/functions";

// Replace this with your actual n8n webhook URL
const N8N_WEBHOOK_URL = "https://transformity.app.n8n.cloud/webhook/3fbdf378-7560-4bae-a640-7db90600a7a1";

export const handler: Handler = async (event) => {
  try {
    // Parse the POSTed JSON from the form
    if (!event.body) {
      return { statusCode: 400, body: "No form data received" };
    }

    const data = JSON.parse(event.body);

    // Add a timestamp
    data.submittedAt = new Date().toISOString();

    // Forward data to n8n
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("n8n webhook error:", await response.text());
      return { statusCode: 500, body: "Failed to send data to n8n" };
    }

    return { statusCode: 200, body: "Form submitted successfully" };
  } catch (err) {
    console.error("Error in contact function:", err);
    return { statusCode: 500, body: "Internal server error" };
  }
};
