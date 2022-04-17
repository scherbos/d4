import React from 'react'
import { Line } from '@ant-design/charts'
import { getBirds } from '../../api'

import './styles.css'

export function BirdsChart() {
    const [birds, setBirds] = React.useState<[]>()

    React.useEffect(() => {
        getBirds()
            .then(data => setBirds(data))
    }, [])

    if (!birds) {
        return null
    }

    if (birds.length == 0) {
        return <div className="empty">No data</div>
    }

    const config = {
        data: birds,
        height: 400,
        xField: 'date',
        yField: 'amount',
        point: {
          size: 5,
          shape: 'diamond',
        },
      }

    return (
        <div className="chart">
            <Line {...config}  />
        </div>
    )
}