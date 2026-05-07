export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content:
      "This is the content of my very first blog post. Welcome to the blog!",
  },
  {
    id: 2,
    slug: "react-typescript-guide",
    title: "React TypeScript Guide",
    content:
      "TypeScript helps make React applications safer and easier to maintain.",
  },
  {
    id: 3,
    slug: "learning-context-api",
    title: "Learning Context API",
    content:
      "The Context API allows you to share state across your application.",
  },
];