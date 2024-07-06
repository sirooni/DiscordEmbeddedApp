import { DiscordSDK } from '@discord/embedded-app-sdk'
const client_id = '1252680532593082378'
const discordSdk = new DiscordSDK(client_id)

export setupDiscordSdk = async () => {
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
	if (auth === null) throw new Error('Authenticate command failed')
	return auth
}
