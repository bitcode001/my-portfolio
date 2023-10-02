import { useState, type PropsWithChildren } from 'react'
import { cn } from '../utils/m-utils'

interface SkillBadgeInterface extends PropsWithChildren {
	activeLang: number
	myIndex: number
	clickHandler: React.Dispatch<React.SetStateAction<number>>
}

function SkillBadge({ activeLang, myIndex, clickHandler, children }: SkillBadgeInterface) {
	return (
		<div
			className={cn(
				'relative my-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full'
			)}
			onClick={() => clickHandler(myIndex)}
		>
			<div
				className={cn(
					'animate-pulse-badge absolute flex h-full w-full scale-0 rounded-full opacity-0 transition-all',
					{
						'bg-primary': activeLang === myIndex,
						'opacity-100': activeLang === myIndex,
						'scale-100': activeLang === myIndex
					}
				)}
			/>

			{children}
		</div>
	)
}

interface MySkillSetInterface {
	name: string
	description: string
}

const mySkillSet: MySkillSetInterface[] = [
	{
		name: 'NodeJS',
		description:
			'With NodeJS, I was able to leverage my JavaScript skills on the backend, allowing for full-stack development. Its non-blocking I/O model has made building scalable applications simpler.'
	},
	{
		name: 'React',
		description:
			'React transformed the way I think about front-end development. Its component-based architecture and powerful hooks system have made building interactive user interfaces a breeze.'
	},
	{
		name: 'JavaScript',
		description:
			'My journey started from C and then C++ and finally the one and only JavaScript. Javascript is something that made me who am I today. JavaScript was my love at first sight. Adding a little bit interactivity with JavaScript on a plain old HTML site really makes the site stand out from the crowd.'
	},
	{
		name: 'TypeScript',
		description:
			'TypeScript added the much-needed type safety to my JavaScript projects, enabling me to catch errors early in the development process and making my code more robust and maintainable.'
	},
	{
		name: 'Dart',
		description:
			'Dart, combined with the Flutter framework, opened the doors to cross-platform mobile app development for me. Its expressive syntax and strong typing ensure that apps are performant and bug-free. Dart is quite new to me, I am still learning ;)'
	}
]

export default function SkillsetSection() {
	const [activeLang, setActiveLang] = useState<number>(2)
	const iconDim = 'h-8 w-8 z-10'
	return (
		<section className="relative my-20 bg-indigo-50 py-10">
			{/* Animating Circle */}
			<div className="absolute -right-2 top-10 flex scale-50 items-center justify-center opacity-50 md:-right-4 md:scale-100 md:opacity-100">
				<div
					className="animate-spin-slow absolute z-20 h-28 w-28 rounded-full bg-transparent"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%232A67F7' stroke-width='4' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`
					}}
				/>
				<div
					className="animate-spin-slow-reverse absolute z-20 h-60 w-60 rounded-full bg-transparent"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='200' ry='200' stroke='%232A67F7' stroke-width='4' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`
					}}
				/>
				<div
					className="animate-spin-slow-x2 absolute z-20 rounded-full bg-transparent"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='300' ry='300' stroke='%232A67F7' stroke-width='4' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`,
						height: '30rem',
						width: '30rem'
					}}
				/>
			</div>

			<div className="container flex flex-col md:flex-row">
				<div className="flex flex-row justify-between md:flex-col">
					<SkillBadge myIndex={0} activeLang={activeLang} clickHandler={setActiveLang}>
						<svg
							className={iconDim}
							height="289"
							preserveAspectRatio="xMidYMid"
							viewBox="0 0 256 289"
							width="256"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="m127.999999 288.463771c-3.975155 0-7.6853-1.060043-11.130435-2.915115l-35.2463756-20.935818c-5.3002084-2.915114-2.650103-3.975156-1.0600426-4.505177 7.1552801-2.385091 8.4803317-2.915114 15.900623-7.15528.7950291-.53002 1.8550717-.265009 2.650103.265011l27.0310552 16.165632c1.060043.530021 2.385094.530021 3.180126 0l105.739129-61.21739c1.060043-.530023 1.590063-1.590063 1.590063-2.915115v-122.1697723c0-1.3250538-.53002-2.3850941-1.590063-2.9151143l-105.739129-60.9523818c-1.060043-.5300201-2.385094-.5300201-3.180126 0l-105.7391316 60.9523818c-1.0600403.5300202-1.5900605 1.8550717-1.5900605 2.9151143v122.1697723c0 1.060041.5300202 2.385092 1.5900605 2.915115l28.8861293 16.695652c15.6356117 7.950309 25.4409949-1.325052 25.4409949-10.600415v-120.579712c0-1.5900605 1.3250515-3.1801232 3.1801232-3.1801232h13.5155288c1.5900627 0 3.1801232 1.3250515 3.1801232 3.1801232v120.579712c0 20.935818-11.3954436 33.126293-31.2712211 33.126293-6.0952375 0-10.8654235 0-24.3809523-6.625258l-27.8260867-15.90062c-6.89026889-3.975157-11.1304347-11.395446-11.1304347-19.345758v-122.1697723c0-7.9503092 4.24016581-15.3706005 11.1304347-19.3457551l105.7391293-61.21739308c6.62526-3.71014336 15.635612-3.71014336 22.260872 0l105.739129 61.21739308c6.890269 3.9751546 11.130435 11.3954459 11.130435 19.3457551v122.1697723c0 7.950312-4.240166 15.370601-11.130435 19.345758l-105.739129 61.21739c-3.445137 1.590063-7.420291 2.385095-11.130437 2.385095zm32.596275-84.008283c-46.376813 0-55.917185-21.200829-55.917185-39.221533 0-1.590062 1.325052-3.180123 3.180123-3.180123h13.78054c1.590061 0 2.915112 1.06004 2.915112 2.650103 2.120083 14.045549 8.215323 20.935818 36.306419 20.935818 22.260871 0 31.801243-5.035197 31.801243-16.960663 0-6.890269-2.650103-11.925466-37.366461-15.370601-28.886127-2.915114-46.90683-9.275363-46.90683-32.331263 0-21.4658385 18.020703-34.1863359 48.231884-34.1863359 33.921324 0 50.616976 11.6604571 52.737059 37.1014499 0 .795031-.265011 1.590063-.795031 2.385094-.53002.53002-1.325052 1.06004-2.120083 1.06004h-13.780538c-1.325051 0-2.650103-1.06004-2.915114-2.385092-3.180123-14.575569-11.395446-19.345757-33.126293-19.345757-24.380954 0-27.296066 8.480332-27.296066 14.84058 0 7.685301 3.445134 10.070395 36.306418 14.310561 32.596273 4.240165 47.966873 10.335403 47.966873 33.126292-.265011 23.320912-19.345755 36.57143-53.00207 36.57143z"
								fill={activeLang === 0 ? '#ffffff' : '#5769F8'}
							></path>
						</svg>
					</SkillBadge>

					<SkillBadge myIndex={1} activeLang={activeLang} clickHandler={setActiveLang}>
						<svg
							className={iconDim}
							height="32"
							viewBox="0 0 32 32"
							width="32"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="m16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854zm-7.99 8.526-.63-.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l.63-.156.177.625c.474 1.635 1.083 3.229 1.818 4.771l.135.281-.135.286c-.734 1.536-1.344 3.13-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c.438-1.391.964-2.745 1.578-4.063-.615-1.318-1.141-2.672-1.578-4.063zm16.901 9.74-.177-.625c-.474-1.635-1.083-3.229-1.818-4.766l-.135-.286.135-.286c.734-1.536 1.344-3.13 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677c.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-.438 1.385-.964 2.745-1.578 4.063zm-16.255-4.068-.177-.625c-1.318-4.646-.917-7.979 1.099-9.141 1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464c-1.182 1.229-2.26 2.552-3.229 3.958l-.182.255-.313.026c-1.703.135-3.391.406-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005 1.422-.318 2.859-.542 4.313-.672.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464c1.182-1.229 2.26-2.552 3.229-3.958l.177-.255.313-.031c1.703-.13 3.391-.401 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135-.49.281-1.042.422-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005-1.422.318-2.865.542-4.313.667-.833 1.193-1.75 2.323-2.734 3.396zm7.99-13.802-.63-.161c-1.661-.406-3.349-.677-5.052-.813l-.313-.026-.177-.255c-.969-1.406-2.047-2.729-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276c1.521.141 2.969.365 4.313.672.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943.984 1.073 1.896 2.203 2.734 3.391zm-10.058 20.583c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255c.969 1.406 2.047 2.729 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943-.984-1.073-1.901-2.203-2.734-3.396-1.453-.125-2.891-.349-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26c-.635-.917-1.24-1.859-1.797-2.828-.563-.969-1.078-1.958-1.557-2.969l-.135-.286.135-.286c.479-1.01.995-2 1.557-2.969.552-.953 1.156-1.906 1.797-2.828l.182-.26.313-.026c2.234-.188 4.479-.188 6.708 0l.313.026.182.26c1.276 1.833 2.401 3.776 3.354 5.797l.135.286-.135.286c-.953 2.021-2.073 3.964-3.354 5.797l-.182.26-.313.026c-1.125.094-2.255.141-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-.844-1.76-1.823-3.453-2.932-5.063-1.948-.151-3.906-.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063.849 1.76 1.828 3.453 2.932 5.063z"
								fill={activeLang === 1 ? '#ffffff' : '#5769F8'}
							></path>
						</svg>
					</SkillBadge>

					<SkillBadge myIndex={2} activeLang={activeLang} clickHandler={setActiveLang}>
						<svg
							className={iconDim}
							height="256"
							preserveAspectRatio="xMidYMid"
							viewBox="0 0 256 256"
							width="256"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m0 0h256v256h-256z" fill={activeLang === 2 ? '#ffffff' : '#5769F8'} />
							<path
								fill={activeLang === 2 ? '#5769F8' : '#ffffff'}
								d="m67.311746 213.932292 19.590908-11.856051c3.7794539 6.701105 7.2175746 12.370896 15.464432 12.370896 7.905117 0 12.88899-3.092318 12.88899-15.120254v-81.798096h24.057499v82.13821c0 24.917333-14.605816 36.258946-35.915175 36.258946-19.2451048 0-30.4164571-9.96734-36.0870603-21.995683"
							/>
							<path
								fill={activeLang === 2 ? '#5769F8' : '#ffffff'}
								d="m152.380952 211.354413 19.58847-11.341613c5.156572 8.421181 11.858489 14.607035 23.714946 14.607035 9.968153 0 16.324673-4.983873 16.324673-11.857676 0-8.248483-6.529625-11.170134-17.527873-15.980089l-6.012749-2.579505c-17.357206-7.387835-28.871111-16.667225-28.871111-36.257727 0-18.04353 13.7472-31.791543 35.228444-31.791543 15.294172 0 26.292013 5.327645 34.195911 19.247137l-18.731073 12.028343c-4.124444-7.388648-8.591034-10.309486-15.464431-10.309486-7.045689 0-11.513905 4.467809-11.513905 10.309486 0 7.217574 4.468216 10.139631 14.777702 14.607847l6.013968 2.577473c20.449524 8.764546 31.963428 17.699353 31.963428 37.804292 0 21.653537-17.012215 33.509588-39.86692 33.509588-22.339454 0-36.774603-10.653664-43.819073-24.573562"
							/>
						</svg>
					</SkillBadge>

					<SkillBadge myIndex={3} activeLang={activeLang} clickHandler={setActiveLang}>
						<svg
							className={iconDim}
							height="256"
							preserveAspectRatio="xMidYMid"
							viewBox="0 0 256 256"
							width="256"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="m0 128v-128h128 128v128 128h-128-128z"
								fill={activeLang === 3 ? '#ffffff' : '#5769F8'}
								transform="matrix(1 0 0 -1 0 256)"
							/>
							<g fill={activeLang === 3 ? '#5769F8' : '#ffffff'}>
								<path
									d="m146.658132 223.436863.081269-10.483809h-16.660317-16.660317v-47.339683-47.339682h-11.784127-11.7841274v47.339682 47.339683h-16.6603175-16.6603175v10.280635c0 5.688888.1219048 10.443174.2844445 10.565079.1219048.16254 20.3987301.243809 44.9828569.203175l44.739048-.121905z"
									transform="matrix(-1 0 0 -1 203.26928 352.285986)"
								/>
								<path
									d="m206.566631 234.272145c6.501588-1.625397 11.459048-4.510477 16.010159-9.224127 2.356826-2.519365 5.851429-7.111111 6.135873-8.208254.08127-.32508-11.052698-7.801905-17.798095-11.987302-.24381-.16254-1.219048.893968-2.316191 2.519365-3.291428 4.794921-6.745396 6.867302-12.027936 7.233016-7.76127.528254-12.759365-3.535238-12.71873-10.32127 0-1.991111.284444-3.169524 1.097143-4.79492 1.706666-3.535239 4.87619-5.648254 14.831746-9.955556 18.326349-7.883175 26.168889-13.084444 31.045079-20.48 5.445079-8.248889 6.664127-21.414603 2.966349-31.207619-4.063492-10.646349-14.140952-17.879365-28.322539-20.276825-4.388572-.772064-14.791112-.650159-19.504762.203174-10.280635 1.828572-20.033016 6.907937-26.046984 13.572064-2.356826 2.600635-6.948572 9.386666-6.664127 9.874285.121904.16254 1.178412.812699 2.356825 1.503492 1.137778.650159 5.445079 3.128889 9.508571 5.485715l7.354921 4.266666 1.544127-2.275555c2.153651-3.291429 6.867302-7.801905 9.711746-9.305397 8.167619-4.307302 19.382857-3.697778 24.909206 1.259683 2.356826 2.15365 3.332064 4.388571 3.332064 7.68 0 2.966349-.365714 4.266666-1.909841 6.501587-1.991112 2.844444-6.054604 5.241905-17.594921 10.24-13.206349 5.688889-18.895238 9.224127-24.096508 14.831746-3.006984 3.250794-5.851429 8.452063-7.029841 12.8-.975238 3.616508-1.219048 12.678095-.446984 16.335238 2.722539 12.759365 12.353015 21.658413 26.250158 24.299683 4.510477.853333 14.994286.528253 19.423492-.568889z"
									transform="matrix(1 0 0 -1 0 352.38048)"
								/>
							</g>
						</svg>
					</SkillBadge>

					<SkillBadge myIndex={4} activeLang={activeLang} clickHandler={setActiveLang}>
						<svg className={iconDim} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								fill={activeLang === 4 ? '#ffffff' : '#5769F8'}
								d="m4.105 4.105s5.053-2.525 7.579-3.789a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788l9.158 9.159v9.789h-4.263v4.263h-9.948l-9-9c-.486-.5-.789-1.205-.789-1.895 0-.319.18-.818.316-1.105zm.679.679v11.787c.002.543.021 1.024.498 1.508l4.922 4.921h8.533v-4.263zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195l-5.818 2.909z"
							/>
						</svg>
					</SkillBadge>
				</div>

				<div className="flex w-full flex-col p-8 md:p-20">
					<h3 className="text-lg font-medium text-primary">My Skillset</h3>
					<h2 className="text-3xl font-semibold">My Programming Domains</h2>
					{mySkillSet.map((sk, idx) => (
						<div
							className={cn('hidden', {
								block: idx === activeLang
							})}
							key={idx}
						>
							<h4 className="animate-slide-in my-10 text-xl font-medium">{sk.name}</h4>
							<p
								className="animate-slide-in flex-wrap text-base font-normal leading-7 opacity-0"
								style={{ animationDelay: '100ms' }}
							>
								{sk.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
