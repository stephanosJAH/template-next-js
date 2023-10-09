'use client'

import { useAuth } from '../providers/supabase-auth-provider'

export default function ButtonSingout() {
	const { signOut } = useAuth()
	return (
		<button
			onClick={signOut}
			title='Salir de la app'
			className='relative flex flex-row items-center justify-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-blue-400 border-l-4 border-transparent'
		>
			<span className='flex justify-center items-center'>
				<svg
					className='w-5 h-5'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
					></path>
				</svg>
			</span>
		</button>
	)
}
