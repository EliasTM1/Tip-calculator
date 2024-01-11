import { Text } from "@chakra-ui/react"

type BillTotalProps = {
  total : number
  tipPercentage: number
}

export const BillTotal = ({total, tipPercentage} : BillTotalProps) => {
  const resultingTip = total * (tipPercentage / 100)
  return (
    <Text>You pay {total + resultingTip} ({total} + {resultingTip}) total perc: {tipPercentage}%</Text>
  )
}
