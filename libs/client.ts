import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "newcreator-org",
    apiKey: process.env.API_KEY,
});
