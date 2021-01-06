import Link from 'next/link';

const externalLinks = [
  {publishedAt: '2021-01-06 23:18:30', title: 'external1', href: 'https://github.com/kimromi'}
];

export default function Home({posts}) {
  return (
    <div>
      <ul>
        {posts.map(post => (
          post.href ?
            <li key={post.href}>
              <a href={post.href} target="_blank">
                {post.title}
              </a>
            </li>
            :
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://kimromi.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);

  const posts = data.contents.concat(externalLinks)
  posts.sort((a, b) => {
    if (Date.parse(a.publishedAt) < Date.parse(b.publishedAt)) {
      return 1;
    }
    if (Date.parse(a.publishedAt) > Date.parse(b.publishedAt)) {
      return -1;
    }
    return 0;
  });

  return {
    props: {
      posts,
    },
  };
};
