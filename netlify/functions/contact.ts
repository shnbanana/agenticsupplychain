import fetch from "node-fetch";

export async function handler(event: any) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);
    data.submittedAt = new Date().toISOString();

    const response = await fetch(
      "https://transformity.app.n8n.cloud/webhook/3fbdf378-7560-4bae-a640-7db90600a7a1",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to forward data to n8n");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully" }),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
