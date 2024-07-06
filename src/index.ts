import { DiscordSDK } from '@discord/embedded-app-sdk'

const client_id = '1252680532593082378'
const discordSdk = new DiscordSDK(client_id)

async function setupDiscordSdk() {
	await discordSdk.ready()

	const { code } = await discordSdk.commands.authorize({
		client_id: client_id,
		response_type: 'code',
		state: '',
		prompt: 'none',
		scope: ['identify', 'guilds'],
	})

	const response = await fetch('/api/token', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ code }),
	})
	const { access_token } = await response.json()
	const auth = await discordSdk.commands.authenticate({ access_token })
	if (auth === null) throw new Error('Authenicate command failed')
	return auth
}

;(async () => {
	try {
		const auth = await setupDiscordSdk()
		const channel = await discordSdk.commands.getChannel({
			channel_id: discordSdk.channelId,
		})
		document.getElementById('channel-name').innerText = channel.name
		const guilds = await fetch('https://discord.com/api/v10/users/@me/guilds', {
			headers: {
				Authorization: `Bearer ${auth.access_token}`,
				'Content-Type': 'application/json',
			},
		})
		const guildsJson = await guilds.json()
		const currentGuild = guildsJson.find(
			(guild) => guild.id === discordSdk.guildId
		)
		const guildImg = document.createElement('img')
		guildImg.setAttribute(
			'src',
			`https://cdn.discordapp.com/icons/${currentGuild.id}/${currentGuild.icon}.webp`
		)
		document.getElementById('guild-icon').appendChild(guildImg)
	} catch (e) {
		// document.write('error', e)
	}
})()
