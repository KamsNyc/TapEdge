const stats = [

    { id: 2, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 3, name: 'Assets under holding', value: '$119 trillion' },
    { id: 4, name: 'New users annually', value: '46,000' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <dl className="grid grid-cols-4 gap-x-2 gap-y-8 text-center">
            {/* small message */}
            <div className="pt-1">
                <span className='text-4xl font-semibold'>Why</span>
                <p className='pt-3'>Used by the world's most amazing companies</p>
            </div>
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex w-full flex-col gap-y-2">
                <dt className="text-base leading-7 text-gray-600 flex items-center justify-center">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl fke">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }

  