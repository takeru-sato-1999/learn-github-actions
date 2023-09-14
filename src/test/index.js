const axios = require("axios");
require("dotenv").config();

const SLACK_URL = process.env.SLACK_WEBHOOK_URL;

const excute = async () => {
  if (!SLACK_URL) {
    throw new Error("Slackのurlを設定してください");
  }
  try {
    const text = "テストです、開発学習チャンネル";
    const payload = {
      text,
    };
    const response = await axios.post(SLACK_URL, payload);

    if (response.status !== 200) {
      throw new Error("something heppend");
    }
  } catch (error) {
    console.error(error);
  }
};

excute();
