import React from 'react'
import { useDiscordSdk } from '../../hooks/useDiscordSdk'

export const TestLog: React.FC = () => {
	const { log } = useDiscordSdk()
	const selectRef = React.useRef<HTMLSelectElement>(null)
	const inputRef = React.useRef<HTMLInputElement>(null)

	return (
		<div className='bg-foreground rounded-md p-4 flex flex-col gap-4'>
			<p className='text-xl font-bold'>ログ</p>
			<div className='flex flex-col gap-2'>
				<div className='flex gap-4'>
					<select ref={selectRef} className='border border-main'>
						<option value='log'>ログ</option>
						<option value='warn'>警告</option>
						<option value='error'>エラー</option>
						<option value='info'>情報</option>
						<option value='debug'>デバッグ</option>
					</select>
					<input
						ref={inputRef}
						type='text'
						className='border border-main px-2'
					/>
				</div>
				<button
					className='border border-main bg-foreground hover:bg-accent p-4'
					onPointerDown={() => {
						if (!selectRef.current || !inputRef.current) return
						log({
							level: selectRef.current.value,
							message: inputRef.current.value,
						})
					}}
				>
					送信
				</button>
			</div>
		</div>
	)
}
