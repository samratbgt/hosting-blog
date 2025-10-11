import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllSlugs } from '@/lib/mdx'
import { getAffiliateHost } from '@/lib/affiliates'
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
  const slugs = getAllSlugs('Hosting News')
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug(params.slug, 'Hosting News')
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    }
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.lastUpdated || post.frontmatter.date,
      authors: [post.frontmatter.author],
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug, 'Hosting News')

  if (!post) {
    notFound()
  }

  const { content, frontmatter } = post
  const affiliateHost = getAffiliateHost(frontmatter.tags[0])

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose max-w-none">
        <PostHeader
          title={frontmatter.title}
          date={frontmatter.date}
          author={frontmatter.author}
          lastUpdated={frontmatter.lastUpdated}
          category={frontmatter.category}
          tags={frontmatter.tags}
        />
        
        <div className="mt-8">
          <MDXRemote source={content} components={components} />
        </div>

        {affiliateHost && (
          <div className="mt-12 border-t pt-8">
            <AffiliateButton host={affiliateHost} />
          </div>
        )}

        <div className="mt-12">
          <Newsletter />
        </div>

        <div className="mt-12">
          <Comments />
        </div>
      </div>
    </article>
  )
}
