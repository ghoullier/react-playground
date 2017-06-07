import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Time = ({ date }) => <strong>{date.toLocaleTimeString()}</strong>
Time.propTypes = {
  date: PropTypes.instanceOf(Date),
}

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }
  componentDidMount() {
    this.handler = setInterval(() => {
      this.setState(prevState => ({
        date: new Date(),
      }))
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.handler)
  }
  render() {
    return <Time date={this.state.date} />
  }
}

export default Timer
