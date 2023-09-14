const axios = require("axios");
require("dotenv").config();

const SLACK_URL = process.env.SLACK_WEBHOOK_URL;
if (!SLACK_URL) {
  throw new Error("Slackのurlを設定してください");
}

const excute = async () => {
  try {
    console.log(process.argv);
    const text = "テストです、開発学習チャンネル";
    const payload = {
      attachments: [
        {
          fallback: "Plain-text summary of the attachment.",
          color: "#2eb886",
          pretext: "Optional text that appears above the attachment block",
          author_name: "Bobby Tables",
          author_link: "http://flickr.com/bobby/",
          author_icon: "http://flickr.com/icons/bobby.jpg",
          title: process.env.WORKFLOW_NAME,
          title_link: process.argv[2],
          text: "Optional text that appears within the attachment",
          fields: [
            {
              title: "Priority",
              value: "High",
              short: false,
            },
          ],
          footer: process.argv[1],
          footer_icon:
            "https://platform.slack-edge.com/img/default_application_icon.png",
          ts: 123456789,
        },
      ],
    };

    const response = await axios.post(SLACK_URL, payload);

    if (response.status !== 200) {
      throw new Error("something heppend");
    }
  } catch (error) {
    console.error(error);
    const payload = {
      text: error.message,
    };
    await axios.post(SLACK_URL, payload);
  }
};

excute();
