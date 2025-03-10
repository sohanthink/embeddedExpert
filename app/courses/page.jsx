
import AssemblyProgramming from '@/components/courses/AssemblyProgramming'
import CloudConnectivity from '@/components/courses/CloudConnectivity'
import Expert from '@/components/courses/Expert'
import Intermediate from '@/components/courses/Intermediate'
import RtosProgramming from '@/components/courses/RtosProgramming'
import StartHere from '@/components/courses/StartHere'
import WirelessProgramming from '@/components/courses/WirelessProgramming'
import React from 'react'

const page = () => {
    return (
        <div>
            <StartHere />
            <Intermediate />
            <Expert />
            <RtosProgramming />
            <CloudConnectivity />
            <WirelessProgramming />
            <AssemblyProgramming />
        </div>
    )
}

export default page