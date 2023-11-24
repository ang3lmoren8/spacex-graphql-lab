import { useQuery } from '@apollo/client'
import { GET_LAUNCHES } from '../../api/queries.ts'
import { GetLaunchesResponse } from '../../api/queries.types.ts'
import LaunchesListItem from './LaunchesListItem/LaunchesListItem.tsx'
import { motion } from 'framer-motion'
import { childrenVariants, variants } from './LaunchesList.animation.ts'

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
      {data?.launches && (
        <motion.div
          className='launches-list__grid'
          variants={variants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          {data.launches.map((launch) => (
            <motion.div key={launch.id} variants={childrenVariants}>
              <LaunchesListItem launch={launch} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default LaunchesList
