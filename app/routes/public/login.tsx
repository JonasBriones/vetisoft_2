import { LockOutlined } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Button,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@mui/material';
import { ActionFunction, json } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import React from 'react';
import { z } from 'zod';

export const action: ActionFunction = async ({ request }) => {
	const formPayload = Object.fromEntries(await request.formData());
	const subscriberSchema = z.object({
		email: z.string().min(1).max(100).email('This is not a valid email.'),
		password: z.string().min(8).max(50),
	});
	try {
		const userValid = subscriberSchema.parse(formPayload);
		return userValid;
	} catch (error) {
		return json(error);
	}
};

const Login: React.FC = () => {
	const actionData = useActionData<typeof action>();

	console.log(actionData);
	return (
		<React.Fragment>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage:
							'url(https://source.unsplash.com/5PVXkqt2s9k)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: (t) =>
							t.palette.mode === 'light'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					component={Paper}
					elevation={6}
					square
				>
					<Box
						justifyContent="center"
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlined />
						</Avatar>
						<Typography component="h1" variant="h5">
							Ingreso al sistema
						</Typography>
						<Grid container direction="column">
							<Form method="post" noValidate>
								<Grid item>
									<TextField
										margin="normal"
										required
										fullWidth
										id="email"
										label="Correo electrónico"
										name="email"
										type="email"
										autoComplete="email"
										autoFocus
									/>

									<TextField
										margin="normal"
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
									/>

									{actionData && (
										<Grid container item justifyContent="center">
											<Typography
												variant="subtitle1"
												component="h6"
												color={'red'}
											>
												{' '}
												Tienes un error de email y/o contraseña{' '}
											</Typography>
										</Grid>
									)}
									<Grid container justifyContent="space-between">
										<Button variant="text" href="/">
											Volver
										</Button>

										<Button
											type="submit"
											variant="contained"
											sx={{ mt: 3, mb: 2 }}
										>
											Ingresar
										</Button>
									</Grid>
								</Grid>
							</Form>
							<Grid item>
								<Grid container justifyContent="space-between">
									<Grid item>
										<Link to={'/public/forgot_password'}>
											Olvide mi password
										</Link>
									</Grid>
									<Grid item>
										<Link to={'/public/register'}>Registro</Link>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Login;
