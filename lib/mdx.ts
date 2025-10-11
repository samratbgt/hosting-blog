import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

export interface PostMetadata {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  featured: boolean
  image: string
  readingTime: string
  rating?: number
}

export interface Post extends PostMetadata {
  content: string
}

export function getPostBySlug(category: string, slug: string): Post | null {
  try {
    const fullPath = path.join(contentDirectory, category, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const readingTimeResult = readingTime(content)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'HostingHub Team',
      category: data.category || category,
      tags: data.tags || [],
      featured: data.featured || false,
      image: data.image || '',
      rating: data.rating,
      readingTime: readingTimeResult.text,
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${category}/${slug}:`, error)
    return null
  }
}

export function getAllPosts(category?: string): PostMetadata[] {
  const posts: PostMetadata[] = []

  try {
    const categories = category ? [category] : fs.readdirSync(contentDirectory)

    for (const cat of categories) {
      const categoryPath = path.join(contentDirectory, cat)
      
      if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) {
        continue
      }

      const files = fs.readdirSync(categoryPath)
      
      for (const file of files) {
        if (path.extname(file) === '.mdx') {
          const slug = path.basename(file, '.mdx')
          const post = getPostBySlug(cat, slug)
          
          if (post) {
            const { content, ...metadata } = post
            posts.push(metadata)
          }
        }
      }
    }
  } catch (error) {
    console.error('Error reading posts:', error)
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedPosts(): PostMetadata[] {
  return getAllPosts().filter(post => post.featured)
}

export function getPostsByCategory(category: string): PostMetadata[] {
  return getAllPosts(category)
}

export function getPostsByTag(tag: string): PostMetadata[] {
  return getAllPosts().filter(post => post.tags.includes(tag))
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}

export function getAllSlugs(category: string): string[] {
  try {
    // For reviews, we need to look in content/reviews
    const basePath = category === 'reviews' 
      ? path.join(contentDirectory, 'reviews')
      : path.join(contentDirectory, category);
    
    if (!fs.existsSync(basePath)) {
      console.warn(`Directory not found: ${basePath}`);
      return [];
    }

    const files = fs.readdirSync(basePath);
    const slugs = files
      .filter(file => path.extname(file) === '.mdx')
      .map(file => path.basename(file, '.mdx'));
      
    console.log(`Found ${slugs.length} posts in ${basePath}:`, slugs);
    return slugs;
  } catch (error) {
    console.error(`Error reading slugs for category ${category}:`, error);
    return [];
  }
}
