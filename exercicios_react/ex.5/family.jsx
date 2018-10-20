import React from 'react'
import Member from './member'

export default props => (
    <div>
        <Member name="Jhon" lastName={props.name}/>
        <Member name="Mary" lastName={props.name}/>
        <Member name="Arthur" lastName={props.name}/>
    </div>
)

