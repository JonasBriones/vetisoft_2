import { Box, Typography } from '@mui/material';
import * as React from 'react';

// https://remix.run/guides/routing#index-routes
const Index: React.FC = () => {
	return (
		<React.Fragment>
			<Box>
				<Typography variant="h1">Bienvenidos</Typography>
			</Box>
		</React.Fragment>
	);
};

export default Index;
