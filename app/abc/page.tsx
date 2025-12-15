import Link from "next/link";

function abc() {
  return (
    <div>
      Hello from abc
      <div>
        <Link href="/abc/hello">Go to hello</Link>
      </div>
    </div>
  );
}

export default abc;
