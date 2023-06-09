import { Client, Collection, GatewayIntentBits } from 'discord.js'
import config from '../../../config'
import { loadCommands } from './utils/commandHandler'
import { loadEvents } from './utils/eventHandler'
import { type Command } from './types'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.MessageContent
  ]
})

export const commands = new Collection<string, Command>()

Promise.all([loadCommands(commands), loadEvents(client)])
  .then(async () => {
    await client.login(config.bot.token)
  })
  .catch(console.error)
