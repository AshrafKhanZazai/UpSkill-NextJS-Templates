import CheckMark from "/public/images/Untitled.svg"
import aboutImage from "/public/images/about-image-dark.svg"
const BusinessSite = () => {
  return (
    <>

    <section>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="mt-4 text-4xl font-bold text-gray-200 lg:mt-8 sm:text-6xl xl:text-5xl">Crafted for Startup, SaaS and Business Sites.</h1>
                    <p className="mt-4 text-base text-gray-500 lg:mt-8 sm:text-xl">The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables.</p>
                  
<ul className="max-w-md mx-5 lg:mx-0 font-bold text-lg mt-24 space-y-1 text-gray-500 list-inside dark:text-gray-400 grid justify-center gap-2 grid-cols-2">
    <li className="flex items-center gap-x-2 ">
    <img className="h-9 w-auto" src={CheckMark} alt="" />
        Premium quality
    </li>
    <li className="flex items-center gap-x-2 ">
    <img className="h-9 w-auto" src={CheckMark} alt="" />
        Next.js
    </li>
    <li className="flex items-center gap-x-2 ">
    <img className="h-9 w-auto" src={CheckMark} alt="" />
        Tailwind CSS
    </li>
    <li className="flex items-center gap-x-2 ">
    <img className="h-9 w-auto" src={CheckMark} alt="" />
        Rich documentation
    </li>
    <li className="flex items-center gap-x-2">
    <img className="h-9 w-auto" src={CheckMark} alt="" />
        Use for lifetime
    </li>
    <li className="flex items-center gap-x-2 ">
    <img className="h-9 w-auto" src={CheckMark} alt="" />
        Developer friendly
    </li>
</ul>







                </div>
                <div>
                    <img className="w-full" src={aboutImage} alt="" />
                </div>
            </div>
        </div>

        <div className="w-full mt-24 h-px bg-gray-700"></div>
    </section>
    </>
  )
}

export default BusinessSite