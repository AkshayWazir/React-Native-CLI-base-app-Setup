import useSWR from "swr";
import { swrFetcher } from "../utility/apiCaller";

export function sampleApi() {
    return useSWR(["https://jsonplaceholder.typicode.com/users", { method: "GET" }], swrFetcher);
}
