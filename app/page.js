import BlogCard from '../components/BlogCard';
import Header from '../components/Header';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Latest Articles
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, 12).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}