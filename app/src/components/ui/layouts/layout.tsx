import React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<React.Fragment>
			{children}
			hola
		</React.Fragment>
	);
}
