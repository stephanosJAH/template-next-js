export default function Footer() {
	return (
		<footer>
			<div className='z-0 absolute bottom-0 h-14 w-full flex flex-row gap-2 items-center justify-end px-3'>
				<span>with</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='icon icon-tabler icon-tabler-heart-code text-red-600'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					stroke='currentColor'
					fill='none'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
					<path d='M19.5 12.572l-.536 .53m-7.91 5.96l-6.554 -6.489a5 5 0 1 1 7.5 -6.567a5 5 0 1 1 7.5 6.572'></path>
					<path d='M20 21l2 -2l-2 -2'></path>
					<path d='M17 17l-2 2l2 2'></path>
				</svg>
				<a href='ileva.tech'> ileva.tech</a>
			</div>
		</footer>
	)
}
