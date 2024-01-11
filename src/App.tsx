// import { useState } from 'react'
import { VStack } from "@chakra-ui/react"
import { Calculator } from "./Calc/Calculator"

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <VStack justifyContent="center" backgroundColor="brand.20" height="100vh">
      <Calculator/>
    </VStack>
  )
}
