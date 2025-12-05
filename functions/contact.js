/**
 * Cloudflare Pages Function used to process contact form submissions securely.
 * The function validates basic input and forwards the payload to a webhook/API
 * defined via the CONTACT_WEBHOOK_URL environment variable (e.g. Slack/Discord,
 * a custom API, or services like Resend). The environment variable keeps
 * credentials on the server instead of exposing them to the browser.
 */
export async function onRequestPost({ request, env }) {
	const contentType = request.headers.get('content-type') || '';
	let name = '';
	let email = '';
	let message = '';

	try {
		if (contentType.includes('application/json')) {
			const body = await request.json();
			name = (body.name || '').trim();
			email = (body.email || '').trim();
			message = (body.message || '').trim();
		} else if (contentType.includes('application/x-www-form-urlencoded')) {
			const form = await request.formData();
			name = (form.get('name') || '').trim();
			email = (form.get('email') || '').trim();
			message = (form.get('message') || '').trim();
		} else {
			return jsonResponse(
				{ error: 'Unsupported content type.' },
				{ status: 415 }
			);
		}
	} catch (error) {
		console.error('Failed to parse contact request', error);
		return jsonResponse({ error: 'Invalid request body.' }, { status: 400 });
	}

	const validationError = validatePayload({ name, email, message });
	if (validationError) {
		return jsonResponse({ error: validationError }, { status: 422 });
	}

	if (!env.CONTACT_WEBHOOK_URL) {
		console.error('CONTACT_WEBHOOK_URL is not configured');
		return jsonResponse(
			{ error: 'Server is not configured correctly.' },
			{ status: 500 }
		);
	}

	const upstreamPayload = formatPayload({ name, email, message });

	try {
		const upstreamResponse = await fetch(env.CONTACT_WEBHOOK_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(upstreamPayload)
		});

		if (!upstreamResponse.ok) {
			console.error(
				'Webhook returned non-OK status',
				upstreamResponse.status,
				await upstreamResponse.text()
			);
			return jsonResponse(
				{ error: 'Unable to deliver your message right now.' },
				{ status: 502 }
			);
		}

		return jsonResponse({ success: true });
	} catch (error) {
		console.error('Failed to call webhook', error);
		return jsonResponse(
			{ error: 'An unexpected error occurred.' },
			{ status: 500 }
		);
	}
}

function validatePayload({ name, email, message }) {
	if (!name || !email || !message) {
		return 'Please provide your name, email, and a message.';
	}

	const emailPattern =
		/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
	if (!emailPattern.test(email)) {
		return 'Please provide a valid email address.';
	}

	if (message.length < 10) {
		return 'Message should be at least 10 characters.';
	}

	return null;
}

/**
 * Adjust the payload to match the downstream service format.
 * For example, Discord webhooks require { content: "text" } whereas
 * many APIs accept arbitrary JSON. Customize as needed.
 */
function formatPayload({ name, email, message }) {
	const trimmedMessage = message.replace(/<[^>]*>?/gm, '');
	return {
		content: [
			'📬 New contact form submission',
			`Name: ${name}`,
			`Email: ${email}`,
			'Message:',
			trimmedMessage
		].join('\n')
	};
}

function jsonResponse(body, init = {}) {
	return new Response(JSON.stringify(body), {
		headers: { 'Content-Type': 'application/json' },
		...init
	});
}



