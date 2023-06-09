import { type ChatInputCommandInteraction, Events } from 'discord.js'
import { type Event } from '../types'
import { commands } from '..'

const event: Event = {
  name: Events.InteractionCreate,
  once: false,
  async execute (interaction: ChatInputCommandInteraction) {
    if (!interaction.isChatInputCommand()) return

    const command = commands.get(interaction.commandName)

    if (command == null) {
      console.error(`No command matching ${interaction.commandName} was found.`)
      return
    }

    try {
      await command.execute(interaction)
    } catch (error) {
      console.error(`Error executing ${interaction.commandName}`)
      console.error(error)
    }
  }
}

export default event
