import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

import WebsiteIcon from '../Icons/WebsiteIcon'
import ShipMissions from '../ShipMissions'

import { styles } from './styles'

const ShipDetails = ({
  ship: {
    ship_id,
    ship_name,
    ship_type,
    active,
    home_port,
    url,
    image,
    weight_lbs,
    missions
  }
}) => {
  return (
    <ScrollView style={styles.container}>
      {image ? (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={{ uri: image }}
          />
        </View>
      ) : (
        <Text style={styles.noImageText}>No image</Text>
      )}
      <View style={styles.wrapper}>
        <Text style={styles.text}>Ship ID: {ship_id}</Text>
        <Text style={styles.text}>Ship Name: {ship_name}</Text>
        <Text style={styles.text}>
          Active:
          <Text style={active ? styles.successText : styles.failureText}>
            {active ? ' Yes' : ' No'}
          </Text>
        </Text>
        <Text style={styles.text}>Ship Type: {ship_type}</Text>
        <Text style={styles.text}>Home Port: {home_port}</Text>
        <Text style={styles.text}>
          Weight: {weight_lbs ? weight_lbs + ' lbs' : 'unknown'}
        </Text>
        {missions.map((mission, key) => (
          <ShipMissions mission={mission} key={key} id={key} />
        ))}
        <View style={styles.row}>
          {url ? <WebsiteIcon link={url} /> : null}
        </View>
      </View>
    </ScrollView>
  )
}

ShipDetails.propTypes = {
  ship: PropTypes.object.isRequired
}

export default ShipDetails
