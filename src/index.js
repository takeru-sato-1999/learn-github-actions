const axios = require("axios");

const SLACK_URL = process.env.SLACK_WEBHOOK_URL;

const excute = async () => {
  try {
    const text = "ハローワールド、開発学習チャンネル";
    const payload = {
      text,
    };
    const response = await axios.post(SLACK_URL, payload);

    if (response !== 200) {
      throw new Error("something heppend");
    }
  } catch (error) {
    console.error(error);
  }
};

excute();
