import React from 'react'
import Autoscroll from 'autoscroll-react'

class List extends React.Component {
    render(){
        const { items } = this.props
        return <ul className="List" {...this.props}>{
                items.map(
                    item => <li key={item}>{item}</li>
                )
            }</ul>
    }
}

export default Autoscroll(List)