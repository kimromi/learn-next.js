import type { GetStaticPaths, GetStaticProps } from 'next'

export type TPost = {
  id?: string,
  publishedAt: string,
  title: string,
  body?: string,
  href?: string,
}

export default function BlogId({ post }: { post: TPost }) {
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${post.body}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetch('https://kimromi.microcms.io/api/v1/blog', {
    headers: {'X-API-KEY': process.env.API_KEY || ''},
  })
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map((content: TPost) => `/blog/${content.id}`);
  return {paths, fallback: false};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id;
  const data = await fetch(
    `https://kimromi.microcms.io/api/v1/blog/${id}`,
    {
      headers: {'X-API-KEY': process.env.API_KEY || ''},
    },
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      post: data,
    },
  };
};
