// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
 
  const client = require("@mailchimp/mailchimp_marketing");

  client.setConfig({
    apiKey: "d0569c2aa538ae67789e099b8a2d38b7-us5",
    server: "us5",
  });

  const response = await client.lists.batchListMembers("00e11d7af1", {
    members: [
      {
        email_address: req.body.email,
        status: "subscribed",
        merge_fields: {
          FNAME: req.body.fName,
          LNAME: req.body.lName,
        },
      },
    ],
  });
  console.log(response);
  res.status(200).json(response.data);
}
