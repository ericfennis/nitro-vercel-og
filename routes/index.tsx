import { ImageResponse } from '@vercel/og';
import React from 'react'

export default eventHandler((event) => {
  const response = new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        👋 Hello world
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )

  return sendWebResponse(event, response as Response)
})
