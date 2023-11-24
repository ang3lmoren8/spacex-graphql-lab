import LaunchesListItem from './LaunchesListItem/LaunchesListItem.tsx'
import { motion } from 'framer-motion'
import { childrenVariants, variants } from './LaunchesList.animation.ts'

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
