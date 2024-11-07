import Crafted from "/public/images/Featuresimgs/Screenshot 2024-11-04 205401.png"
import HighqualityDesign from "/public/images/Featuresimgs/Screenshot 2024-11-04 205422.png"
import Nextjs from "/public/images/Featuresimgs/Screenshot 2024-11-04 205451.png"
import TailwindCSS from "/public/images/Featuresimgs/Screenshot 2024-11-04 205510.png"
import FullyCustomizable from "/public/images/Featuresimgs/Screenshot 2024-11-04 205525.png"
import FreeandOpenSource from "/public/images/Featuresimgs/Screenshot 2024-11-04 205539.png"
const Featured = () => {
  return (
  <>
<section className="mt-24">
  <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Main Features</h1>
  <p className="mb-8 text-center text-md font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>

  <div className="mt-12 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
    {/* Card 1 */}
    <div className="flex-col items-center">
      <img className="h-20 w-auto mx-6" src={Crafted} alt="" />   
      <a href="#" className="block max-w-sm p-6 rounded-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crafted for Startups</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</p>
      </a>
    </div>
    
    {/* Repeat for Card 2 to Card 6 */}
    <div className="flex-col items-center">
      <img className="h-20 w-auto mx-6" src={HighqualityDesign} alt="" />   
      <a href="#" className="block max-w-sm p-6 rounded-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">High-quality Design</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</p>
      </a>
    </div>
    <div className="flex-col items-center">
      <img className="h-20 w-auto mx-6" src={Nextjs} alt="" />   
      <a href="#" className="block max-w-sm p-6 rounded-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Next.js 13 (Latest)</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</p>
      </a>
    </div>
    <div className="flex-col items-center">
      <img className="h-20 w-auto mx-6" src={TailwindCSS} alt="" />   
      <a href="#" className="block max-w-sm p-6 rounded-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tailwind CSS</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiore</p>
      </a>
    </div>
    <div className="flex-col items-center">
      <img className="h-20 w-auto mx-6" src={FullyCustomizable} alt="" />   
      <a href="#" className="block max-w-sm p-6 rounded-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fully Customizable</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</p>
      </a>
    </div>
    <div className="flex-col items-center">
      <img className="h-20 w-auto mx-6" src={FreeandOpenSource} alt="" />   
      <a href="#" className="block max-w-sm p-6 rounded-lg">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Free and Open-Source</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</p>
      </a>
    </div>
    
    {/* Add remaining cards in a similar structure */}
    
  </div>
</section>




  </>  
  )
}

export default Featured