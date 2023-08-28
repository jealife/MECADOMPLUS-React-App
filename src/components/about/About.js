import './about.css'

export default function About() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="grid max-w-screen px-4  mx-auto gap-8  py-16 grid-cols-2 md:grid-cols-1">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                    <a href="/" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get started
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="/" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Speak to Sales
                    </a>
                </div>
                <div class="mt-0 flex">
                    <img className=' rounded-2xl' src="https://www.planeteautomobile.com/wp-content/uploads/2022/03/recharger-une-batterie-de-voiture-thermique.jpg" alt="mockup" />
                </div>
            </div>
        </section>
        // <section className='About-section'>

        //     <div className="About-content">
        //     <div className="container">
        //         <div className="left">
        //             <h2>Title 1</h2>
        //             <p className='text-white'>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //              In dictum non consectetur a erat. Vel turpis nunc eget lorem. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. 
        //              Amet est placerat in egestas erat. Commodo
        //             </p>
        //         </div>
        //         <div className="rigth">
        //             <img className=' object-cover' src="https://www.planeteautomobile.com/wp-content/uploads/2022/03/recharger-une-batterie-de-voiture-thermique.jpg" alt="" />
        //         </div>
        //     </div>

        //     <div className="container">
        //         <div className="left">
        //             <h2>Title 2</h2>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //              In dictum non consectetur a erat. Vel turpis nunc eget lorem. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. 
        //              Amet est placerat in egestas erat. Commodo</p>
        //         </div>
        //         <div className="rigth">
        //             <img className='object-fit object-cover' src="https://www.mazout-lurquin.be/images/lurquin_carwash_01.jpg" alt="" />
        //         </div>
        //     </div>

        //     </div>


        // </section>
    )
}