export default function donate() {
    return (
        <div className='card0 w-2/4 px-5'>
            <div className="donateCard">
                <div className="grid items-center text-center">
                    <div className="text-2xl text-cyber-100 dark:text-solar-100 font-bold ">🌱 Stage 1 Donation</div>
                    <div className="w-2/4 mx-auto">
                        <label htmlFor="price" className="italic block text-left font-bold text-cyber-100 dark:text-solar-100">
                          Set your donation
                        </label>
                        <div className="relative mt-1 rounded-dd shadow-sm ">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <span className="text-cyber-100 dark:text-solar-100 text-3xl">$</span>
                            </div>
                            <input
                              type="text"
                              name="price"
                              id="price"
                              className="block w-full rounded-gen border-gray-300 pl-7 pr-12 focus:border-cyber-100 focus:ring-cyber-100  text-3xl focus:text-cyber-100 dark:focus:dark:text-solar-100"
                              placeholder="0.00"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="currency" className="sr-only">
                                  Currency
                                </label>
                                <select
                                  id="currency"
                                  name="currency"
                                  className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-cyber-100 dark:text-solar-100 font-bold focus:border-indigo-500 focus:ring-indigo-500 "
                                >
                                <option>USDC</option>
                                </select>
                            </div>
                        </div> 
                        <div className="projectBT py-3 w-2/3 mx-auto mt-5">
                            🌱 Donate
                        </div>
                    </div>
                    
                </div>

                <div className="grid grid-cols-2">
                    <div className="grid grid-rows-2 w-3/4 h-3/4 my-auto mx-auto">
                        <div className="">
                            <div className='font-bold italic text-lg'>Milestone progress:</div>
                            <div className="flex mb-2 items-center justify-between">
                            <div>
                              <span className="text-backgrounds-700 font-bold ">
                                03/06
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="font-semibold inline-block text-backgrounds-700">
                                50%
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-3 mb-4 text-xs flex items-center bg-gray-300 rounded-gen ">
                            <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center h-1.5 ml-1 mr-1 rounded-full text-white justify-center bg-backgrounds-700"></div>
                          </div>
                        </div>
                        
                        <div className=''>
                            <div className='font-bold italic text-lg'>🌱 Stage 1 funds:</div>
                            <div className="flex mb-2 items-center justify-between">
                            <div>
                              <span className="text-cyber-100 dark:text-solar-100 font-bold ">
                                $00,000 <span className='font-normal'>(% 00.00)</span>
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="font-semibold inline-block text-gray-500">
                                $00,000
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-3 mb-2 text-xs flex items-center bg-gray-300 rounded-gen ">
                            <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center h-1.5 ml-1 mr-1 rounded-full text-white justify-center bg-cyber-100 dark:bg-solar-100"></div>
                          </div>
                          <div className='grid grid-cols-2'>
                            <div className="text-left">
                              <span className="text-sm inline-block text-cyber-100 dark:text-solar-100">
                                Your share
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="text-sm inline-block text-gray-500">
                                Total
                              </span>
                            </div>
                          </div>
                        </div>
                    </div>
                    

                    <div className="w-3/4 h-2/4 m-auto text-center">
                        <div className="text-2xl text-cyber-100 dark:text-solar-100 font-bold">Vote to deliver funds</div>
                        <div className="my-3">0/10 <span className="italic">80% required to deliver </span></div>
                        <div className="projectBT">Vote</div>
                    </div>
                </div>
            </div>
        </div>
    )
}