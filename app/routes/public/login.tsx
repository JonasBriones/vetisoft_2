import { Button, Typography } from '@mui/material';
import { Form } from '@remix-run/react';
import React from 'react';

const Login: React.FC = () => {
    return (
        <React.Fragment>
            <div>
                <Typography variant='h1'>Ingreso al sistema</Typography>
                <Form method='post'>
                    <Button>
                        Volver
                    </Button>
                    <Button>
                        Ingresar
                    </Button>
                </Form>
            </div>
        </React.Fragment>
    )
}

export default Login;