import React from 'react'
import PageTitle from './PageTitle'

const PageHeading = (props) => {
  return (
    <div className='page-heading-container'>
    <PageTitle title={props.title} />
    {props.children}
    </div>
  )
}

export default PageHeading