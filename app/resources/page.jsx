import Banner from '@/components/resources/Banner'
import React from 'react'

import Resources from '@/components/resources/Resources'
import SubscribeCard from '@/components/common/SubscribeCard'

const page = () => {
    return (
        <div>
            <Banner />
            <Resources />
            <SubscribeCard />
        </div>
    )
}

export default page