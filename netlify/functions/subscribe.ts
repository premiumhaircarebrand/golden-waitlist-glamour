import type { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { email, name } = JSON.parse(event.body || "{}");

  if (!email || !name) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing fields" }) };
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
  const DATACENTER = API_KEY.split("-")[1]; // e.g. "us21"

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name.split(" ")[0],
        LNAME: name.split(" ").slice(1).join(" ") || "",
      },
    }),
  });

  const data = await response.json();

  // 400 with "Member Exists" is fine — treat as success
  if (response.ok || data.title === "Member Exists") {
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  }

  return {
    statusCode: 500,
    body: JSON.stringify({ error: data.detail || "Something went wrong" }),
  };
};

export { handler };
