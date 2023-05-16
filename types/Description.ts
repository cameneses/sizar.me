import { PortableTextBlock } from 'sanity';

export type Description = {
  _id: string;
  _createdAt: Date;
  content: PortableTextBlock[];
};
