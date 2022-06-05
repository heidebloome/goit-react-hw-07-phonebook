import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://629b71b5656cea05fc3950af.mockapi.io',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
});

export const { useFetchContactsQuery } = contactsApi;
