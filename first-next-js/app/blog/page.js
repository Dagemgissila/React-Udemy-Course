import Link from "next/link";
const page = () => {
  return (
    <main>
      this is blog page
      <Link href="/blog/post-1">post 1</Link>
      <Link href="/blog/post-2">post 2</Link>
    </main>
  );
};

export default page;
