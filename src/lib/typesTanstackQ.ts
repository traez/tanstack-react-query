export interface TypeComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface TypeFormPost {
  title: string;
  body: string;
  userId: number;
}

export interface TypeFormPostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}