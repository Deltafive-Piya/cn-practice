"use client";
import Button from "../components/Button";

export default function Home() {
	return (
		<main className="m-4">
			<h1 className="text-4xl mb-4">Reusable Button Example</h1>

			<div className="space-x-4 space-y-4">
				<Button onClick={() => alert("Button 1 Clicked!")}>Button 1</Button>
				<Button variant="secondary" size="xl">Dead button</Button>
				<Button variant="danger" size="sm">Dead Delete</Button>
			</div>
		</main>
	);
}
