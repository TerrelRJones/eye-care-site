export const getArticles = async (category: string): Promise<any> => {
  try {
    const data = await fetch(
      `https://inshortsapi.vercel.app/news?category=${category}`
    );

    const res = await data.json();

    return res.data;
  } catch (e: any) {
    console.log(e.message);

    return;
  }
};

export const printArticles = async (articles: Promise<any>) => {
  const data = await articles;

  if (data.length === 0) return [];

  console.log(data);
  return data;
};

export const sortArticlesBy = async (sortType: string, arr: Promise<[]>) => {
  const res = await arr;

  const sorted = res.sort((a, b) =>
    a[sortType] > b[sortType] ? 1 : a[sortType] < b[sortType] ? -1 : 0
  );

  console.log(sorted);
};
