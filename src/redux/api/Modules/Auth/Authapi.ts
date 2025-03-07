import { buildCreateApi } from "@reduxjs/toolkit/query";
import { baseApi } from "../..";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      {
        message: string;
        data: {
          employeeId: string;
          name: string;
          departmentId: { _id: string; name: string };
          designationId: { _id: string; name: string };
          phoneNumber: string;
          email: string;
        }[];
        credentials: "include";
      },
      { employeeId: string; password: string }
    >({
      query: (credentials) => ({
        url: `/hrmaster/employee/loginEmployee`,
        method: "POST",
        body: credentials,
        credentials: "include",
      }),
      invalidatesTags:['Auth']
    }),
    checkAuth: builder.query<any, void>({
      query: () => ({
        url: "/check-authgetdata",
        method: "GET",
      }),
      keepUnusedDataFor: 0,
      providesTags:['Auth']
    }),
  }),

  overrideExisting: false,
});

export const { useLoginMutation,useCheckAuthQuery } = authApi;
