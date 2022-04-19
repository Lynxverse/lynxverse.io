const Donate = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-[100px]">
      <div className="flex flex-col justify-center align-center pt-[100px] w-[200px]">
        <span className="text-lg text-white mt-6">Input the UST Amount</span>
        <input className="mt-6" type="text"></input>
        <button className="bg-slate-200 mt-6">Donate</button>
      </div>

      <div className="flex flex-col justify-center align-center pt-[100px] w-[200px]">
        <span className="text-lg text-white mt-6">Input the ETH Amount</span>
        <input className="mt-6" type="text"></input>
        <button className="bg-slate-200 mt-6">Donate</button>
      </div>
    </div>
  )
}

export default Donate;