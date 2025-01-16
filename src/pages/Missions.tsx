const missions = [
    {
      id: 1,
      name: 'Grade B to C',
      description: 'Improve your grade from B to C',
      points: 50,
    },
    {
      id: 2,
      name: 'Full attendance',
      description: 'Attend all classes without any absences',
      points: 30,
    },
    {
      id: 3,
      name: 'Submit homework on time',
      description: 'Submit all homework assignments on time',
      points: 20,
    },
  ]
  
  export default function Missions() {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">Missions</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the missions including their name, description, and points.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add mission
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                      Mission ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Mission Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Mission Description
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Mission Points
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {missions.map((mission) => (
                    <tr key={mission.id} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        {mission.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{mission.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{mission.description}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{mission.points}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {mission.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }