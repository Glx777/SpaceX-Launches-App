import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'

import WikipediaIcon from '../Icons/WikipediaIcon'
import YoutubeIcon from '../Icons/YoutubeIcon'
import RedditIcon from '../Icons/RedditIcon'

import { styles } from './styles'

const LaunchDetails = ({
  launch: {
    flight_number,
    launch_year,
    launch_success,
    launch_date_local,
    launch_site,
    details,
    links: { wikipedia, video_link, reddit_media }
  }
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Flight Number: {flight_number}</Text>
      <Text style={styles.text}>Launch Year: {launch_year}</Text>
      <Text style={styles.text}>
        Launch Success:
        <Text style={launch_success ? styles.successText : styles.failureText}>
          {launch_success ? ' Yes' : ' No'}
        </Text>
      </Text>
      <Text style={styles.text}>
        Date: {moment(launch_date_local).format('MM/DD/YYYY')}
      </Text>
      <Text style={styles.text}>Launch Site: {launch_site.site_name}</Text>
      <Text style={styles.text}>Details: {details}</Text>
      <View style={styles.row}>
        {wikipedia ? <WikipediaIcon link={wikipedia} /> : null}
        {video_link ? <YoutubeIcon link={video_link} /> : null}
        {reddit_media ? <RedditIcon link={reddit_media} /> : null}
      </View>
    </View>
  )
}

LaunchDetails.propTypes = {
  launch: PropTypes.object.isRequired
}

export default LaunchDetails
