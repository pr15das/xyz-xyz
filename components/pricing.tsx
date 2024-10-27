import React from 'react'

export const Pricing = () => {
  return (
<section className="flex items-center justify-center mt-10 pb-10">
    <div className="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto" id="pricing">
        <h3 className="text-5xl font-semibold text-center flex gap-2 justify-center mb-16 mt-10">Pay Once, Use Forever</h3>
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="ring-1 ring-slate-200 rounded-3xl p-8 xl:p-10 shadow-lg">
                <div className="flex items-center justify-between gap-x-4">
                    <h3 id="tier-standard" className="text-gray-900 text-2xl font-semibold leading-8">Standard</h3>
                </div>
                <p className="mt-4 text-base leading-6 text-gray-600">This plan is free for students of AdtU</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="line-through text-2xl font-sans text-gray-500/70">₹49</span><span
                        className="text-5xl font-bold tracking-tight text-gray-900">₹19</span>
                </p>
                <a href=""
                    aria-describedby="tier-standard"
                    className="text-black ring-1 ring-inset ring-slate-200 hover:ring-black mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black shadow-lg"
                    target="_blank">Buy now</a>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <li className="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-black">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Lifetime access
                    </li>
                    <li className="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-black">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Limited AI features
                    </li>
                    <li className="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-black">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Limited usage per day
                    </li>
                </ul>
            </div>
            <div className="ring-2 ring-black rounded-3xl p-8 xl:p-9 shadow-2xl">
                <div className="flex items-center justify-between gap-x-4">
                    <h3 id="tier-extended" className="text-black text-3xl font-bold leading-8">Extended</h3>
                    <p className="rounded-full bg-black px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                        Most popular</p>
                </div>
                <p className="mt-4 text-base leading-6 text-gray-600">Full access with pre-launch features</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="line-through text-2xl font-sans text-gray-500/70">₹99</span><span
                        className="text-5xl font-bold tracking-tight text-gray-900">₹49</span>
                </p>
                <a href=""
                    aria-describedby="tier-extended"
                    className="bg-black text-white shadow-2xl hover:bg-black mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    target="_blank">Buy now</a>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <li className="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-black">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Lifetime access
                    </li>
                    <li className="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-black">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>All AI features
                    </li>
                    <li className="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                            className="h-6 w-5 flex-none text-black">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Unlimited access, No limits
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}
