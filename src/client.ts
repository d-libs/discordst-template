import "dotenv/config";

import { Client } from "discordst";

import { GatewayIntentBits, Partials } from "discord.js";

const client = new Client({
  intents: Object.values(GatewayIntentBits) as GatewayIntentBits[],
  partials: Object.values(Partials) as Partials[]
});

if (!process.env.CLIENT_TOKEN) {
  throw new Error("Please provide a CLIENT_TOKEN in .env");
}

client.start(process.env.CLIENT_TOKEN);
