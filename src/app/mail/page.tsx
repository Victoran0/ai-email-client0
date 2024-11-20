'use client'
import dynamic from 'next/dynamic'
import React from 'react'
// import Mail from './mail'
// importing mail dynamically

const Mail = dynamic(() => {
    return import("./mail")
}, {
    ssr: false
})


const MailDashboard = () => {
    return (
        <Mail
            defaultLayout={[20,32,40]}
            defaultCollapsed={false}
            navCollapsedSize={4}
        />
    )
}

export default MailDashboard
