import axios from 'axios'
axios.defaults.baseURL = 'http://api.football-data.org/v1/'
const config = {
  headers: {
    'X-Auth-Token': '9c3cfe3ade2346e8b6a9e5d910c8cc9b',
    'Content-Type': 'application/json'
  }
}
const appService = {
  getFixtures () {
    return new Promise(resolve => {
      axios
        .get('competitions/464/fixtures', config)
        .then(response => {
          resolve(response.data.fixtures)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }
}
export default appService
