// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">
        欢迎来到我的博客
      </h1>

      <div className="grid gap-4">
        <article className="p-4 border rounded-lg">
          <h2 className="text-2xl font-semibold">我的第一篇博客</h2>
          <p className="mt-2 text-gray-600">
            这是我使用 Next.js 创建的第一篇博客文章 ...
          </p>
        </article>
      </div>
    </main>
  )
}