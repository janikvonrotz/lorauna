import App from '../components/App'
import SaunaList from '../components/SaunaList'

export default () => (
    <App>
        <div>Welcome to next.js!</div>
        <SaunaList />
    </App>
)

console.log(process.env.APOLLO_URL)