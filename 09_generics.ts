export {};

// Generics are used to create reusable components

// Example 1

interface IAuthor {
  id: number;
  name: string;
  email: string;
}

interface ICategory {
  id: number;
  name: string;
}

interface IPost {
  id: number;
  title: string;
  content: string;
  extra: IAuthor[] | ICategory[];
}

interface IPost2<T> {
  id: number;
  title: string;
  content: string;
  extra: T[];
}

let post: IPost = {
  id: 1,
  title: "Post 1",
  content: "Content 1",
  extra: [
    { id: 1, name: "John", email: "dsf@xf.com" },
    { id: 2, name: "Jane", email: "sd@sdf.com" },
  ],
};

let post2: IPost2<IAuthor> = {
  id: 1,
  title: "Post 1",
  content: "Content 1",
  extra: [
    { id: 1, name: "John", email: "xc.sd.com" },
    { id: 2, name: "Jane", email: "dc@sd.com" },
  ],
};

let post3: IPost2<ICategory> = {
  id: 1,
  title: "Post 1",
  content: "Content 1",
  extra: [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
  ],
};

let post4: IPost2<string> = {
  id: 1,
  title: "Post 1",
  content: "Content 1",
  extra: ["a", "b", "c"],
};