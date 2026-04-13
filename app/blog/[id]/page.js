import Header from '../../../components/Header';

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Không tìm thấy bài viết với ID: ${id}`);
  }

  return res.json();
}

export default async function BlogDetail({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50 py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-6 md:mb-10 font-medium text-sm md:text-base"
          >
            ← Back to Blog
          </a>

          <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 md:p-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 md:mb-8">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-8 md:mb-10">
                <span>User #{post.userId}</span>
                <span className="hidden sm:inline">•</span>
                <span>Post #{post.id}</span>
              </div>

              <div className="prose prose-sm sm:prose-base md:prose-lg text-gray-700 leading-relaxed max-w-none">
                <p className="mb-4">{post.body}</p>
                <p className="mb-4">{post.body}</p>
                <p>{post.body}</p>
              </div>
            </div>
          </article>

          <div className="text-center mt-10 text-gray-400 text-xs md:text-sm">
            Bài viết từ JSONPlaceholder API
          </div>

        </div>
      </main>
    </>
  );
}