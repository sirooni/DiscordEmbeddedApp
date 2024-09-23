import React from 'react'
import { useDiscordSdk } from '../../hooks/useDiscordSdk'

export const TestOpenLink: React.FC = () => {
	const { openLink } = useDiscordSdk()
	const inputRef = React.useRef<HTMLInputElement>(null)

	return (
		<div className='bg-foreground rounded-md p-4 flex flex-col gap-4'>
			<p className='text-xl font-bold'>外部リンク</p>
			<div className='flex flex-col gap-2'>
				<input
					ref={inputRef}
					type='text'
					className='border border-main px-2'
					defaultValue='https://google.com'
				/>
				<button
					className='border border-main bg-foreground hover:bg-accent p-4'
					onPointerDown={() => {
						if (!inputRef.current) return
						openLink(inputRef.current.value)
					}}
				>
					開く
				</button>
			</div>
		</div>
	)
}
