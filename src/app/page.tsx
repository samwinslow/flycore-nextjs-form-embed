import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Demo</h1>
      <br />
      <p>
        <Link href="/form" style={{ textDecoration: 'underline', color: 'blue' }}>Load page with the Flycore form (<code>src/app/form/page.tsx</code>)</Link>
      </p>
      <p>From there, use the browser forward/back navigation to confirm that the form loads every time.</p>
    </div>
  );
}
