import React from 'react'

export default function Alert(props) {
    return (
    props.alert &&
    <div className={'alert alert-'+props.alert.type} role="alert">
        <b>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}: </b>
        {props.alert.msg}
    </div>
  )
};