import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addInfo } from '../../store/actions'
import Logo from '../../components/Logo'
import WebsiteIcon from '../../components/WebsiteIcon'
import TwitterIcon from '../../components/TwitterIcon'
import FlickrIcon from '../../components/FlickrIcon'

import { styles } from './styles'

class AboutScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    const { dispatch } = this.props
    axios.get('https://api.spacexdata.com/v3/info').then(res => {
      dispatch(addInfo(res.data))
      this.setState({ isLoading: false })
    })
  }

  render() {
    const {
      info: {
        name,
        founder,
        founded,
        employees,
        launch_sites,
        ceo,
        coo,
        headquarters,
        links,
        summary
      }
    } = this.props
    const { isLoading } = this.state
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator style={styles.spinner} size="large" color="#222" />
        ) : (
          <ScrollView style={styles.wrapper}>
            <Logo />
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Founder: {founder}</Text>
            <Text style={styles.text}>Founded: {founded}</Text>
            <Text style={styles.text}>Number of employees: {employees}</Text>
            <Text style={styles.text}>
              Number of launch sites: {launch_sites}
            </Text>
            <Text style={styles.text}>CEO: {ceo}</Text>
            <Text style={styles.text}>COO: {coo}</Text>
            <Text style={styles.text}>
              Headquarters: {headquarters.address + ' '}
              {headquarters.city + ' '}
              {headquarters.state}
            </Text>
            <Text style={styles.text}>Summary: {summary}</Text>
            <View style={styles.row}>
              <WebsiteIcon link={links.website} />
              <FlickrIcon link={links.flickr} />
              <TwitterIcon link={links.twitter} />
            </View>
          </ScrollView>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  info: state.info
})

AboutScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(AboutScreen)
