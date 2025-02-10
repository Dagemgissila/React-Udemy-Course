const page = ({ params }) => {
  return (
    <main>
      <h1>this is blog post</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default page;
