import { createCookieSessionStorage, redirect } from '@remix-run/node';
import bcrypt from 'bcryptjs';
import type { LoginForm } from '../types/user';
import { db } from './db.server';

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
	throw new Error('SESSION_SECRET must be set');
}

const storage = createCookieSessionStorage({
	cookie: {
		name: 'VETI_session',
		secure: process.env.NODE_ENV === 'production',
		secrets: [sessionSecret],
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60 * 24 * 30,
		httpOnly: true,
	},
});

function getUserSession(request: Request) {
	return storage.getSession(request.headers.get('Cookie'));
}

export async function login({ email, password }: LoginForm) {
	const user = await db.user.findUnique({
		where: { email },
	});
	if (!user) return null;
	const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
	if (!isCorrectPassword) return null;
	return { id: user.id, user };
}

export async function createUserSession(userId: string, redirectTo: string) {
	const session = await storage.getSession();
	session.set('userId', userId);
	return redirect(redirectTo, {
		headers: {
			'Set-Cookie': await storage.commitSession(session),
		},
	});
}

export async function logout(request: Request) {
	const session = await getUserSession(request);
	return redirect('/login', {
		headers: {
			'Set-Cookie': await storage.destroySession(session),
		},
	});
}
