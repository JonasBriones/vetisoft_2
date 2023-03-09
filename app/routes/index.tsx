import { Box, Typography } from '@mui/material';
import { Link } from '@remix-run/react';
import * as React from 'react';

// https://remix.run/guides/routing#index-routes
const Index: React.FC = () => {
	return (
		<React.Fragment>
			<Box>
				<Typography variant="h1">Bienvenidos</Typography>

				<Link to={'/public/login'}>login</Link>
			</Box>
		</React.Fragment>
	);
};

export default Index;
