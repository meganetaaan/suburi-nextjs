import React from 'react'
import cowsay from 'cowsay-browser'

export default () => (
  <pre>{cowsay.say({text: 'Hello there!!'})}</pre>
)
