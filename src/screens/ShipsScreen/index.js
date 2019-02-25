import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import PropTypes from 'prop-types'

import Logo from '../../components/Logo'
import Ship from '../../components/Ship'
import { addShips } from '../../store/actions'

import { styles } from './styles'

class ShipsScreen extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    const { dispatch } = this.props
    await axios.get('https://api.spacexdata.com/v3/ships').then(res => {
      dispatch(addShips(res.data))
    })
    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading } = this.state
    const { ships, navigation } = this.props
    return (
      <View>
        {isLoading ? (
          <ActivityIndicator style={styles.spinner} size="large" color="#222" />
        ) : (
          <ScrollView>
            <Logo />
            {ships.map((ship, i) => (
              <Ship navigation={navigation} ship={ship} key={i} id={i} />
            ))}
          </ScrollView>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ships: state.ships
})

ShipsScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ships: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(ShipsScreen)
