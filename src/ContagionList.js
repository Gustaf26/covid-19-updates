import React from 'react'


class ContagionList extends React.Component {

    state = {}


render () {

    return (<ul className="ContList">
        <li><button id="high" href="#" onClick={(e)=>this.props.send(e)}>Countries with highest contagion rates</button></li>
      </ul>)
}
}




export default ContagionList