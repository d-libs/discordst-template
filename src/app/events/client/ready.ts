import { ActivityType, Events } from "discord.js";

import { Event } from "discordst";

export default new Event({
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    client.user.setPresence({
      activities: [
        {
          name: "👋 I'm running right now.",
          type: ActivityType.Custom,
        },
      ],
    });
  },
});
