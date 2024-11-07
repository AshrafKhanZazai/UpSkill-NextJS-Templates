import "../App.css"
import VideoImage from "/public/images/video.jpg"
import formbolid from "/public/images/brands/formbold-light.svg"
import graygridslight from "/public/images/brands/graygrids-light.svg"
import lineiconslight from "/public/images/brands/lineicons-light.svg"
import plainadminlight from "/public/images/brands/plainadmin-light.svg"
import tailadminlight from "/public/images/brands/tailadmin-light.svg"
import uidecklight from "/public/images/brands/uideck-light.svg"

const Video = () => {
  return (
    <section className="Video-bg bg-center bg-no-repeat bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">We are ready to help</h1>
        <p className="mb-8 text-md font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="https://youtu.be/L61p2uyiMSo"><img style={{height : "420px"}} className="rounded-lg w-auto cursor-pointer" src={VideoImage} alt="" /></a> 
        </div>
        {/* <div style={{padding : "70px 0 70px 0"}} className="bg-[#1e232e] mt-12 mx-12">
          <div className="flex">
            <img className="px-3 h-8 w-auto cursor-pointer" src={formbolid} alt="" />
            <img className="px-3 h-8 w-auto cursor-pointer" src={graygridslight} alt="" />
            <img className="px-3 h-8 w-auto cursor-pointer" src={lineiconslight} alt="" />
            <img className="px-3 h-8 w-auto cursor-pointer" src={plainadminlight} alt="" />
            <img className="px-3 h-8 w-auto cursor-pointer" src={tailadminlight} alt="" />
            <img className="px-3 h-8 w-auto cursor-pointer" src={uidecklight} alt="" />
          </div>
        </div> */}

<div style={{ padding: "70px 0 70px 0" }} className="bg-[#1e232e] mt-12 mx-11">
  <div className="grid gap-4 gap-y-6 justify-center md:grid-cols-3 lg:flex lg:flex-wrap lg:gap-6">
    <img className="lg:px-3 h-8 w-auto cursor-pointer" src={formbolid} alt="" />
    <img className="h-8 w-auto cursor-pointer" src={graygridslight} alt="" />
    <img className="h-8 w-auto cursor-pointer" src={lineiconslight} alt="" />
    <img className="h-8 w-auto cursor-pointer" src={plainadminlight} alt="" />
    <img className="h-8 w-auto cursor-pointer" src={tailadminlight} alt="" />
    <img className="h-8 w-auto cursor-pointer" src={uidecklight} alt="" />
  </div>
</div>


    </div>
</section>
)
}

export default Video