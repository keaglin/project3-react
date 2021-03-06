import React, { Component }   from 'react'
import { CLIENT_URL }         from '../constants'
import RecordList             from './RecordList'
import axios                  from 'axios'

class RecordContainer extends Component {
  state = {
    records: []
  }

  componentDidMount() {
    axios.get(`${CLIENT_URL}/records`)
      .then(response => this.setState({records: response.data}))
  }

  render () {
    let records = this.state.records
    console.log(records)
    return (
      <div><RecordList records={records}/></div>
    ) 
  }
}

export default RecordContainer
