import type { Handler } from "@netlify/functions";

const N8N_WEBHOOK_URL =
  "https://transformity.app.n8n.cloud/webhook/3fbdf378-7560-4bae-a640-7db90600a7a1";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  challenge: string;
  budget: string;
  timeline: string;
}

export const handler: Handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    const formData: ContactFormData = JSON.parse(event.body || "{}");
    console.log("Received contact form data:", formData);

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.company ||
      !formData.industry ||
      !formData.challenge ||
      !formData.budget ||
      !formData.timeline
    ) {
      console.warn("Missing required fields:", formData);
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Missing required fields",
        }),
      };
    }

    // Forward the data to n8n webhook
    console.log("Forwarding to n8n webhook...");
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
      }),
    });

    console.log("n8n webhook response status:", response.status);

    if (!response.ok) {
      console.error("n8n webhook error:", response.statusText);
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Failed to process submission",
        }),
      };
    }

    console.log("Form successfully submitted to n8n");
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      }),
    };
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "An error occurred while processing your submission",
      }),
    };
  }
};
