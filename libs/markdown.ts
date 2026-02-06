import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  create_at?: string;
  link?: string;
  content: string;
}

export interface ArchivePost {
  id: string;
  title: string;
  date: string;
  description?: string;
  link?: string;
  content: string;
}

export function getAllNews(): NewsPost[] {
  const newsDir = path.join(contentDirectory, 'news');
  
  if (!fs.existsSync(newsDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(newsDir);
  const allNews = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(newsDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id: data.id,
        title: data.title,
        date: data.date,
        create_at: data.date,
        link: data.link || null,
        content: content,
      };
    });

  // 日付順にソート（新しい順）
  return allNews.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getNewsById(id: string): NewsPost | null {
  const allNews = getAllNews();
  return allNews.find(post => post.id === id) || null;
}

export function getAllArchives(): ArchivePost[] {
  const archiveDir = path.join(contentDirectory, 'archives');
  
  if (!fs.existsSync(archiveDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(archiveDir);
  const allArchives = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(archiveDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id: data.id,
        title: data.title,
        date: data.date,
        description: data.description || null,
        link: data.link || null,
        content: content,
      };
    });

  // 日付順にソート（新しい順）
  return allArchives.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getArchiveById(id: string): ArchivePost | null {
  const allArchives = getAllArchives();
  return allArchives.find(post => post.id === id) || null;
}
