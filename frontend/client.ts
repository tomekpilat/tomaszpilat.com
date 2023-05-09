import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'ctxcw9g8',
    dataset: 'production',
    useCdn: true
})

export default client;