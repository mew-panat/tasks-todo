import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div style={{paddingTop: '100px', paddingLeft: '100px'}}>
            <Box sx={{ overflow: 'auto'}}>
                <div>
                    Current count: {count}
                </div>
                <Button variant="contained" onClick={
                    () => 
                    {
                        setCount(count+1)
                        setTimeout(() => {setCount((latestCount) => latestCount + 1)}, 3000)
                }}>
                    Click me!
                </Button>
            </Box>
        </div>
        )
}

export default Counter;