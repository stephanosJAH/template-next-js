import ButtonLoginGithub from '@/components/ui/button-login-github'

export default function Login() {
	return (
		<html lang='en' className='dark'>
			<body>
				<main className='h-screen grid grid-rows-1 grid-flow-col grid-cols-3'>
					<div className='col-span-2 bg-slate-700'></div>
					<div className='col-span-2 flex flex-col items-center justify-center'>
						<h2>LOGIN</h2>
						<ButtonLoginGithub />
					</div>
				</main>
			</body>
		</html>
	)
}
