
import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="relative left-1/2 translate-x-[-50%] isolate flex items-center gap-x-6 border border-dashed border-black/20 px-6 py-2.5 sm:px-3.5 lg:w-[50%] rounded-2xl mt-6">
     
      <div className="flex flex-wrap w-full items-center justify-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">TAPEDGE Review Card</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          now avaliable
        </p>
        <Link
          href={'/shop'}
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          shop<span className='pl-2' aria-hidden="true">&rarr;</span>
        </ Link >
      </div>
      
    </div>
  )
}
