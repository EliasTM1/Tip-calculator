import { Box, Input, Text } from "@chakra-ui/react";

type ScreenProps = {
	onSetPreTotal: (total: number) => void
}

export const Screen = ({onSetPreTotal} : ScreenProps) => {
	return (
		<Box>
			<Text>How much was the bill?</Text> <Input onChange={(e) => onSetPreTotal(Number(e.target.value))} type='number' />
		</Box>
	);
};
