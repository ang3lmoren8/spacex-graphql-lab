import Launch from '../../../api/schema/Launch.ts'
import defaultRocket from '../../../assets/img/default_rocket.svg'
import './LaunchesListItem.css'
import dayjs from 'dayjs'
import LeftField from '../../LeftField/LeftField.tsx'
import { useNavigate } from 'react-router-dom'

const LaunchesListItem = ({ launch }: { launch: Launch }) => {
  const navigate = useNavigate()
  const onClick = () => navigate(`/launch/${launch.id}`)

  return (
    <div className='launches-list-item' onClick={onClick}>
      {!launch.id && <LeftField fieldName='id' />}
      {launch.links ? (
        <img
          className='launches-list-item__img'
          src={launch.links.flickr_images?.[0] || defaultRocket}
        />
      ) : (
        <LeftField fieldName='links.flickr_images' />
      )}
      <div className='launches-list-item__body'>
        {launch.mission_name ? (
          <h5 className='launch-list-item__name'>{launch.mission_name}</h5>
        ) : (
          <LeftField fieldName='mission_name' />
        )}
        {launch.launch_date_utc ? (
          <p>
            Launched at{' '}
            {dayjs(launch.launch_date_utc).format('YY-MM-DD HH:mm:ss')}
          </p>
        ) : (
          <LeftField fieldName='launch_date_utc' />
        )}
      </div>
    </div>
  )
}

export default LaunchesListItem
