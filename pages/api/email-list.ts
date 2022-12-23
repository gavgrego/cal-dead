import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    contacts: [req.body],
    list_ids: [process.env.SENDGRID_MAILING_ID],
  };

  try {
    const response = await fetch(
      "https://api.sendgrid.com/v3/marketing/contacts",
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.EMAIL_API_KEY}`,
        },
        method: req.method,
        body: JSON.stringify(data),
      }
    );
    console.log(data);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    res.end(JSON.stringify(response));
    // await addSub;
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
};
