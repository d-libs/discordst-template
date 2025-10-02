import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  MessageFlags,
  SlashCommandBuilder,
} from "discord.js";

import { Command } from "discordst";

export default new Command({
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies the client ping."),
  async execute(interaction, client) {
    await interaction.reply({
      components: [
        new ActionRowBuilder<ButtonBuilder>().addComponents(
          new ButtonBuilder()
            .setCustomId("getPing")
            .setLabel("Ping")
            .setStyle(ButtonStyle.Primary)
        ),
      ],
      flags: [MessageFlags.Ephemeral]
    });
  },
});
