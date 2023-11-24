import { useQuery } from '@apollo/client'
import { GET_LAUNCHES } from '../../api/queries.ts'
import { GetLaunchesResponse } from '../../api/queries.types.ts'
import LaunchesListItem from './LaunchesListItem/LaunchesListItem.tsx'

import './ShipsList.css'

const LaunchesList = () => {
  const { data, loading } = useQuery<GetLaunchesResponse>(GET_LAUNCHES, {
    variables: {
      limit: 40,
    },
  })

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
