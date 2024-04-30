import { useState } from 'react';
import assertIsError from '@utils/assertIsError/assertIsError';
import extractUrlsFromRSS from '@utils/parseXml/parseXML';

function useFetch<T>(url: string): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        setIsLoading(true)
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
            const parsedData = extractUrlsFromRSS(result)
            setData(parsedData as any)
            return parsedData as any
        } catch (error) {
            setIsLoading(false)
            assertIsError(error)
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        fetchData,
        data,
        isLoading,
        error,
    };
}

export default useFetch;