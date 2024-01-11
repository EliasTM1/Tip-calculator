import { Box, BoxProps, Select } from "@chakra-ui/react";

type ServiceEvalProps = BoxProps & {
	color?: string;
	onGroupTip : (tipAmount: number) => void
};
export const ServiceEval = ({ children, color, onGroupTip}: ServiceEvalProps) => {
	console.log(color);
	return (
		<Box>
			{children}
			<Select onChange={(e) => onGroupTip(Number(e.target.value)) }>
				<option value={0}>0</option>
				<option value={5}>5%</option>
				<option value={10}>10%</option>
				<option value={15}>15%</option>
				<option value={20}>20%</option>
			</Select>
		</Box>
	);
};
