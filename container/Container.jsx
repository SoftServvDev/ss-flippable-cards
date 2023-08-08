// Container file, this holds all of the portfolio items in a flex div
// Styles can be added via a style prop

import React from 'react'

import styles from './Container.module.css'

const CONTAINER = props => {
  if(props.center){
    if(props.style){
      return (
        <div className={`${styles.container} ${styles.center}`} style={props.style}>
            {props.children}
        </div>
      )
    }
    else{
      return (
        <div className={`${styles.container} ${styles.center}`}>
            {props.children}
        </div>
      )
    }
  }
  if(props.between){
    if(props.style){
      return (
        <div className={`${styles.container} ${styles.between}`} style={props.style}>
            {props.children}
        </div>
      )
    }
    else{
      return (
        <div className={`${styles.container} ${styles.between}`}>
            {props.children}
        </div>
      ) 
    }
  }
  else if(props.center){
    if(props.style){
      return (
        <div className={`${styles.container} ${styles.center}`} style={props.style}>
            {props.children}
        </div>
      )
    }
    else{
      return (
        <div className={`${styles.container} ${styles.center}`}>
            {props.children}
        </div>
      ) 
    }
  }
  else if(props.evenly){
    if(props.style){
      return (
        <div className={`${styles.container} ${styles.evenly}`} style={props.style}>
            {props.children}
        </div>
      )
    }
    else{
      return (
        <div className={`${styles.container} ${styles.evenly}`}>
            {props.children}
        </div>
      ) 
    }
  }
  else{
    if(props.style){
      return (
        <div className={`${styles.container}`} style={props.style}>
            {props.children}
        </div>
      )
    }
    else{
      return (
        <div className={`${styles.container}`}>
            {props.children}
        </div>
      ) 
    }
  }
}

export {CONTAINER}