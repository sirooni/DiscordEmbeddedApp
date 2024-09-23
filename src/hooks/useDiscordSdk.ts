import { useCallback } from 'react'

import { DiscordSDK } from '@discord/embedded-app-sdk'
const client_id = '1252680532593082378'
const discordSdk = new DiscordSDK(client_id)

export const useDiscordSdk = () => {
	const log = useCallback(
		async (input: { level: string; message: string }) => {
			await discordSdk.ready()
			discordSdk.commands.captureLog(input)
		},
		[discordSdk]
	)

	const openLink = useCallback(
		async (url: string) => {
			await discordSdk.ready()
			discordSdk.commands.openExternalLink({ url })
		},
		[discordSdk]
	)

	return { log, openLink }
}
