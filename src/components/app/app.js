import React, {Component} from  'react'

import Navigation from '@components/navigation/navigation'
import BasicRouter from '@routes/router'

class App extends Component {
    render () {
        return (
            <div>
                <Navigation/>
                {BasicRouter()}
            </div>
        )
    }
}

export default App