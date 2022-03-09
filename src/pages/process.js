import React from 'react'
import Layout from '../components/layout/Layout';
import Process from '../components/process/Process';

function ProcessSection() {
    return (
            <div draggable={true} onDrag={()=> alert('kjkhj')} >
            <Process />
                </div>
    )
}
export default ProcessSection