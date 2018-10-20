import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family lastName="Stone">
            <Member name="Jhon" />
            <Member name="Mary" />
            <Member name="Arthur" />
        </Family>
        <Family lastName="Watson">
            <Member name="Anne" />
            <Member name="Matt" />
            <Member name="Julia" />
        </Family>
    </div>
, document.getElementById('app'))