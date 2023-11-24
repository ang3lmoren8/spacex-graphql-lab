import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_LAUNCH_BY_ID } from '../../api/queries.ts'
import { GetLaunchByIdResponse } from '../../api/queries.types.ts'

import './LaunchDetail.css'
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid.tsx'
import dayjs from 'dayjs'
import LeftField from '../../components/LeftField/LeftField.tsx'

const LaunchDetail = () => {
  const { id } = useParams()

  const { data, loading } = useQuery<GetLaunchByIdResponse>(GET_LAUNCH_BY_ID, {
    variables: {
      launchId: id,
    },
  })

  const launch = data?.launch

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
