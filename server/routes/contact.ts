import { RequestHandler } from "express";

const N8N_WEBHOOK_URL = "https://transformity.app.n8n.cloud/webhook/3fbdf378-7560-4bae-a640-7db90600a7a1";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  challenge: string;
  budget: string;
  timeline: string;
}

export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.company || !formData.industry || !formData.challenge || !formData.budget || !formData.timeline) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Forward the data to n8n webhook
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

    if (!response.ok) {
      console.error("n8n webhook error:", response.statusText);
      return res.status(500).json({
        success: false,
        message: "Failed to process submission",
      });
    }

    res.status(200).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error handling contact submission:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your submission",
    });
  }
};
