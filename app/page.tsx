import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      Hello from index page
      <div>
        <Link href="/abc">Go to abc route</Link>
      </div>
    </div>
  );
}
