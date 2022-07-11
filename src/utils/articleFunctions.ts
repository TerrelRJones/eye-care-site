export enum CATEGORY {
  TECHNOLOGY = "technology",
}

export const getArticles = async (category: CATEGORY): Promise<any> => {
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

export enum SORT_BY {
  AUTHOR = "author",
  CONTENT = "content",
  DATE = "date",
  ID = "id",
  TITLE = "title",
  URL = "url",
}

export const sortArticlesBy = async (sortType: SORT_BY, arr: Promise<[]>) => {
  const res = await arr;

  const sorted = res.sort((a, b) =>
    a[sortType] > b[sortType] ? 1 : a[sortType] < b[sortType] ? -1 : 0
  );

  console.log(sorted);
};
