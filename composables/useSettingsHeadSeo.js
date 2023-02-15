export async function useSettingsHeadSeo(key) {
    const {data} = await useSettings()

    const title = data.value.find(d => d.section === 'seo' && d.key === `${key}_title`)?.value;
    const description = data.value.find(d => d.section === 'seo' && d.key === `${key}_description`)?.value;


    useHeadSeo({title, description})
}