export function useHeadSeo(args = {}) {
    useHead({
        title: args.title,
        charset: 'utf-8',
        meta: [
            { name: 'description', content: args.description },
        ].filter(({ content }) => content),
    });
}
