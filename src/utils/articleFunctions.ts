export enum Category {
  TECHNOLOGY = "technology",
}

export enum SortBy {
  AUTHOR = "author",
  CONTENT = "content",
  DATE = "date",
  ID = "id",
  TITLE = "title",
  URL = "url",
}

export const getArticles = async (category: Category) => {
  try {
    const data = await fetch(
      `https://inshortsapi.vercel.app/news?category=${category}`
    );

    const res = await data.json();

    return res.data;
  } catch (e: any) {
    console.log(e.message);
    return e.message;
  }
};

export const printArticles = async (articles: Promise<string>) => {
  try {
    const data = await articles;

    if (data.length === 0) return [];

    console.log(data);
  } catch (e: any) {
    console.log(e.message);
  }
};

export const sortArticlesBy = async (sortType: SortBy, arr: Promise<[]>) => {
  const res = await arr;

  const sorted = res.sort((a, b) =>
    a[sortType] > b[sortType] ? 1 : a[sortType] < b[sortType] ? -1 : 0
  );

  console.log(sorted);
};
