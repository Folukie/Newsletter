// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  const client = require("@mailchimp/mailchimp_marketing");

  client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_KEY,
  });
  try {
    const response = await client.lists.batchListMembers("00e11d7af1", {
      members: req.body.members,
    });

    console.log(response);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
}
