import extractUrlsFromRSS from '@utils/parseXml/parseXML';

export default async function fetchPosts(url: string) {
    try {
        const response = await fetch(url, {
            method: 'GET',
        }
        );
        if (!response.ok) {
            switch (response.status) {
                case 400:
                    throw new Error("Bad request: please check the format of your HTTP request");
                case 500:
                    throw new Error("Internal server error: there was an error in the server, please try again later");
                case 404:
                    throw new Error("Not found: Url wasn't found please make sure to have the correct url");
                default:
                    throw new Error("Something went unexpectedly wrong!");
            }
        }
        const result = await response.text();
        return extractUrlsFromRSS(result)
    } catch (e) {
        console.error(e)
        return []
    }
}
