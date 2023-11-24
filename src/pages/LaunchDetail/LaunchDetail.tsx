import { useParams } from 'react-router-dom'

import ImagesGrid from '../../components/ImagesGrid/ImagesGrid.tsx'
import dayjs from 'dayjs'
import LeftField from '../../components/LeftField/LeftField.tsx'
import Launch from '../../api/schema/Launch.ts'

import './LaunchDetail.css'

const LaunchDetail = () => {
  const { id } = useParams()

  // TODO Add a connection with useQuery
  const loading = true
  const data = null

  const launch: Launch = data?.launch

  return (
    <div className='container'>
      <h1>Launch detail</h1>
      {loading && <p>Loading...</p>}
      {launch && (
        <>
          <div className='launch-detail__images'>
            {!launch.links?.flickr_images && (
              <LeftField fieldName='links.flickr_images' />
            )}
            {!launch.mission_name && <LeftField fieldName='mission_name' />}

            {launch.links?.flickr_images && launch.mission_name && (
              <ImagesGrid
                images={launch.links.flickr_images}
                name={launch.mission_name}
              />
            )}
          </div>
          {launch.launch_date_utc ? (
            <h4 className='launch-detail__date'>
              Launched at{' '}
              {dayjs(launch.launch_date_utc).format('YY-MM-DD HH:mm:ss')}
            </h4>
          ) : (
            <LeftField fieldName='launch_date_utc' />
          )}
          {launch.details ? (
            <p>{launch.details}</p>
          ) : (
            <LeftField fieldName='details' />
          )}
        </>
      )}
    </div>
  )
}

export default LaunchDetail
