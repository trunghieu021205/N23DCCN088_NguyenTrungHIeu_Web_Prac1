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

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          {/* Back Button */}
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition">←</span>
            Back to Blog
          </a>

          {/* Article Card */}
          <article className="bg-white rounded-3xl shadow-lg overflow-hidden">
            
            {/* Header Image Placeholder */}
            <div className="h-64 md:h-80 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-white text-center">
                <span className="text-6xl mb-4 block">📝</span>
                <p className="text-sm tracking-widest uppercase">Featured Article</p>
              </div>
            </div>

            {/* Nội dung bài viết */}
            <div className="p-6 md:p-10 lg:p-14">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-10 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">
                    U{post.userId}
                  </div>
                  <span>User #{post.userId}</span>
                </div>
                <span>•</span>
                <span>Post #{post.id}</span>
                <span>•</span>
                <span>April 13, 2026</span>
              </div>

              {/* Nội dung chính */}
              <div className="prose prose-lg md:prose-xl text-gray-700 leading-relaxed max-w-none">
                <p>{post.body} {post.body}</p>
                <p>{post.body}</p>
                <p>{post.body} {post.body}</p>
              </div>
            </div>
          </article>

          {/* Footer note */}
          <div className="text-center mt-12 text-gray-400 text-sm">
            Bài viết được lấy từ JSONPlaceholder API • Demo Project
          </div>
        </div>
      </main>
    </>
  );
}