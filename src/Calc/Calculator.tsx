import { Box, Stack, Text } from "@chakra-ui/react";
import { Screen } from "./Screen";
import { ServiceEval } from "./ServiceEval";
import { BillTotal } from "./BillTotal";
import { useState } from "react";

export const Calculator = () => {
  const [preTotal, setPreTotal] = useState<number>(0)
  const [tipTotal, setTipTotal] = useState<number>(0)

  function groupTipAmount(anotherTip : number) {
    setTipTotal(previousState => previousState + anotherTip )
  }

  function setBillProTotal(total: number) {
    setPreTotal(total)
  }

	return (
		<Box width='80%'>
			<Stack gap="2rem">
				<Screen onSetPreTotal={setBillProTotal} />
				<ServiceEval onGroupTip={groupTipAmount}>
					<Text>How did you like the service?</Text>
				</ServiceEval>
				<ServiceEval onGroupTip={groupTipAmount}>
					<Text>How did you friend like the service?</Text>
				</ServiceEval>
        <BillTotal total={preTotal} tipPercentage={tipTotal}/>
			</Stack>
		</Box>
	);
};
