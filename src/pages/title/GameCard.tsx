import { Link } from 'react-router-dom'

type Props = {
  thumnail: React.ReactNode
  title: string
  description: string
  link: string
}

export const GameCard: React.FC<Props> = ({
  thumnail,
  title,
  description,
  link,
}) => {
  return (
    <Link to={link}>
      <div className='border-[2px] border-main rounded-md bg-foreground hover:bg-accent cursor-pointer p-4 flex gap-10'>
        <div className='flex-none size-32 flex items-center justify-center'>
          {thumnail}
        </div>
        <div className='text-main flex flex-col gap-4'>
          <p className='text-xl'>{title}</p>
          <p className='text-sm whitespace-pre-wrap'>{description}</p>
        </div>
      </div>
    </Link>
  )
}
