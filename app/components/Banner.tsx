
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  return (
    <div className="relative left-1/2 translate-x-[-50%] isolate flex items-center gap-x-6 bg-gray-100/60 px-6 py-2.5 sm:px-3.5 lg:w-[50%] rounded-2xl mt-6">
     
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">TAPEDGE Review Card</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
