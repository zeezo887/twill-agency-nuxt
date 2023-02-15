export function useSettings() {
    const { $twill } = useNuxtApp();

    return useAsyncData('setting', () => {
        return $twill.find('settings').fetch()
    }, {
        transform: (data) => $twill.transform(data)
    })
}