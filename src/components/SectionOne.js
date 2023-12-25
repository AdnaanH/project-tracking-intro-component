

function SectionOne() {
  return (
    <div className='flex-col sm:pl-28 sm:p-0 p-6'>
      <h3 className="mb-6 uppercase text-lg sm:text-base font-semibold text-[#a0a1ac]"><span className="bg-black text-white text-base font-bold rounded-3xl px-4 py-2 mr-2">NEW </span> Monograph Dashboard</h3>
      <h1 className="mb-6 uppercase text-4xl sm:text-6xl font-bold w-12/12 sm:w-10/12">Powerful insights into your team </h1>
      <p className="mb-6 text-xl text-[#a0a1ac] w-11/12 sm:w-5/12">Project planning and time tracking for agile teams</p>
      <div className="flex sm:gap-6 justify-between items-center">
        <button className="bg-[#FF0000] py-1 px-4 text-white uppercase rounded-md text-lg sm:text-base font-bold">Schedule a demo</button>
        <button className="uppercase font-bold text-lg sm:text-base text-[#a0a1ac]">to see a preview</button>
      </div>
    </div>
  )
}

export default SectionOne
