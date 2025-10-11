import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllSlugs } from '@/lib/mdx'
import PostHeader from '@/components/blog/PostHeader'
import AffiliateButton from '@/components/blog/AffiliateButton'
import ProsConsList from '@/components/blog/ProsConsList'
import PricingTable from '@/components/blog/PricingTable'
import Comments from '@/components/blog/Comments'
import Newsletter from '@/components/blog/Newsletter'

// MDX Components
const components = {
  AffiliateButton,
  ProsConsList,
  PricingTable,
  h1: (props: any) => <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed text-gray-700" {...props} />,
  ul: (props: any) => <ul className="mb-4 pl-6 space-y-2" {...props} />,
  ol: (props: any) => <ol className="mb-4 pl-6 space-y-2 list-decimal" {...props} />,
  li: (props: any) => <li className="text-gray-700" {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:text-blue-800 underline" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-gray-900" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-600 my-6" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-gray-300" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="border border-gray-300 bg-gray-50 px-4 py-2 font-semibold text-left" {...props} />
  ),
  td: (props: any) => <td className="border border-gray-300 px-4 py-2" {...props} />,
}

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllSlugs('guides')
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug('guides', params.slug)
  
  if (!post) {
    return {
      title: 'Guide Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default function GuidePage({ params }: PageProps) {
  const post = getPostBySlug('guides', params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="py-12">
      <div className="container max-w-4xl">
        <PostHeader
          title={post.title}
          description={post.description}
          author={post.author}
          date={post.date}
          readingTime={post.readingTime}
          rating={post.rating}
          image={post.image}
        />
        
        <div className="prose max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>
        
        <Comments postSlug={params.slug} />
        
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Newsletter Section */}
      <div className="mt-16">
        <Newsletter />
      </div>
    </article>
  )
}
