import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import PropTypes from 'prop-types'

import WebsiteIcon from '../Icons/WebsiteIcon'
import TwitterIcon from '../Icons/TwitterIcon'
import WikipediaIcon from '../Icons/WikipediaIcon'

import { styles } from './styles'

const MissionDetails = ({
  mission: {
    mission_name,
    mission_id,
    description,
    wikipedia,
    website,
    twitter
  }
}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Mission Name: {mission_name}</Text>
      <Text style={styles.text}>Mission ID: {mission_id}</Text>
      <Text style={styles.text}>Description: {description}</Text>
      <View style={styles.row}>
        <WebsiteIcon link={website} />
        {twitter ? <TwitterIcon link={twitter} /> : null}
        <WikipediaIcon link={wikipedia} />
      </View>
    </ScrollView>
  )
}

MissionDetails.propTypes = {
  mission: PropTypes.object.isRequired
}

export default MissionDetails
