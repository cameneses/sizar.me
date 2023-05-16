import { Project, Description } from '@/types';
import { createClient, groq } from 'next-sanity';

const getClient = () =>
  createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-03-04',
  });

export async function getProjects(): Promise<Project[]> {
  const client = getClient();

  return client.fetch(groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }`);
}

export async function getProject(slug: string): Promise<Project> {
  const client = getClient();

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }`,
    { slug }
  );
}

export async function getDescription(): Promise<Description> {
  const client = getClient();

  return client.fetch(
    groq`*[_type == "description"][0]{
    _id,
    _createdAt,
    content
  }`
  );
}
