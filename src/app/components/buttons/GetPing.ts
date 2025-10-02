import { Component, ComponentType } from "discordst";

export default new Component({
  customId: "getPing",
  type: ComponentType.Button,
  async execute(interaction, client) {
    await interaction.reply(`🏓 Pong! | ${client.ws.ping}ms`);
  },
});
