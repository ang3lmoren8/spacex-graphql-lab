import LaunchesListItem from './LaunchesListItem/LaunchesListItem.tsx'

import './ShipsList.css'

const LaunchesList = () => {

  // TODO Add a connection with useQuery
  const loading = true
  const data = {
    launches: [],
  }

  return (
    <div className='launches-list'>
      <h2 className='launches-list__title'>Launches</h2>
      {loading && <p>Loading...</p>}
      <div className='launches-list__grid'>
        {data?.launches.map((launch) => (
          <LaunchesListItem key={launch.id} launch={launch} />
        ))}
      </div>
    </div>
  )
}

export default LaunchesList
