import matter from 'gray-matter';

export const parseEntry = (slug, fileContents) => {
    let entry: any = matter(fileContents);
    entry.data.date = entry.data.date + '';
    entry = { content: entry.content, ...entry.data, slug: slug };
    return entry;
};
