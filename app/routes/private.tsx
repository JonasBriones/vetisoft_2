import type { LoaderArgs } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import * as React from 'react';

import { Container } from '@mui/system';
import MenuUi from '../src/components/ui/Menu/MenuUi';

export async function loader({ request }: LoaderArgs) {
	const userData = {};
	return userData;
}

const Private: React.FC = () => {
	const sessionData = useLoaderData<typeof loader>() || {};

	console.log( sessionData );
	return (
		<React.Fragment>
			<MenuUi />
			<Container sx={{ mt: '45px' }}>
				<Outlet />
			</Container>
		</React.Fragment>
	);
};

export default Private;
