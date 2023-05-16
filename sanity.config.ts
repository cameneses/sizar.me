import { defineConfig } from 'sanity';

import { deskTool } from 'sanity/desk';

import schemas from './sanity/schema';

export const config = defineConfig({
  projectId: 'lvuac486',
  dataset: 'production',
  title: 'My personal website',
  apiVersion: '2023-03-04',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
