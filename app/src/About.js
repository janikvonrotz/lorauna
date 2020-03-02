import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  title: {
    margin: theme.spacing(2, 0)
  }
})

const About = ({ classes }) => (
  <>
    <Typography variant='h3' gutterBottom className={classes.title}>
      Über
    </Typography>
    <Typography component='p' gutterBottom>
      Lorauna ist eine Webapplikation zur Verwaltung einer Sauna-Landschaft. Der Verein <a href="http://saunalorrainebad.ch/">Sauna Lorrainebad</a> betreibt im Winter mehrere Saunas im <a href="http://www.lorrainebad.ch/">Lorrainebad Bern</a>. Über die App werden Besucher Ein- und Ausgänge registriert sowie Temperaturen in der Sauna erfasst.
    </Typography>
    <Typography component='p' gutterBottom>
      Die Applikation wurde von <a href="https://janikvonrotz.ch">Janik von Rotz</a> entwickelt.
    </Typography>
    <Typography component='p' gutterBottom>
      Feedback und Störungsmeldungen zur App bitte via <a href="https://github.com/janikvonrotz/lorauna/issues">GitHub - Lorauna Issues</a> mitteilen.
    </Typography>
  </>
)

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)
