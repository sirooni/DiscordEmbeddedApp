import { GatewayIntentBits, Client, Partials, Message } from 'discord.js'
import dotenv from 'dotenv'
import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

app.post('/api/token', async (req, res) => {
	const code: string = req.body.code

	const params = new URLSearchParams({
		client_id: process.env.DISCORD_CLIENT_ID ?? '',
		client_secret: process.env.DISCORD_CLIENT_SECRET ?? '',
		grant_type: 'authorization_code',
		code: code,
	})
	const response = await fetch('https://discord.com/api/oauth2/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: params,
	})
	const { access_token } = await response.json()
	res.json({ access_token })
})

app.use('/', express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/../dist'))
app.listen(PORT, () => {
	console.log(`サーバーが${PORT}番ポートで起動しました`)
})

const client = new Client({
	intents: [
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
	partials: [Partials.Message, Partials.Channel],
})

client.once('ready', () => {
	console.log('Ready!')
	if (client.user) console.log(client.user.tag)
})

client.on('messageCreate', async (message: Message) => {
	if (message.author.bot) return
	if (message.content == '!time') {
		const date1 = new Date()
		message.channel.send(date1.toLocaleString())
	}
})

dotenv.config()
client.login(process.env.TOKEN)
