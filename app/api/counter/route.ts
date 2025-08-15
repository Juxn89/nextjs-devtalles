export async function GET(request: Request) {
	const counter = 10;

	return Response.json({ count: counter, method: 'GET' });
}
