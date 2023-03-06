import React from 'react'
import {Helmet} from 'react-helmet'

//[138]
const MetaData = ({title}) => {
    return(
        <Helmet>
            <title>{`${title} - ConverTic Shop`}</title>
        </Helmet>
    )
}
export default MetaData