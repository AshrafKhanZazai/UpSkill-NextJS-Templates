import aboutImage from "/public/images/about-image-2-dark.svg"
const Bug = () => {
  return (
    <>

    <section className="mt-24">
        <div className="px-4 justify-center mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 lg:grid-cols-2">
                <div>
                    <img className="w-100" src={aboutImage} alt="" />
                </div>
                <div className="py-12">
                    <h1 className="text-4xl font-bold text-gray-200 sm:text-6xl xl:text-2xl">Bug free code</h1>
                    <p style={{width: "45ch"}} className="mt-4 text-base text-gray-500 lg:mt-2 sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h1 className="text-4xl font-bold text-gray-200 lg:mt-8 sm:text-6xl xl:text-2xl">Premier support</h1>
                    <p style={{width: "45ch"}} className="mt-4 text-base text-gray-500 lg:mt-2 sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing et dolore magna aliqua.</p>
                    <h1 className="text-4xl font-bold text-gray-200 lg:mt-8 sm:text-6xl xl:text-2xl">Next.js
                    </h1>
                    <p style={{width: "45ch"}} className="mt-4 text-base text-gray-500 lg:mt-2 sm:text-xl">Lorem ipsum dolor sit amet ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Bug