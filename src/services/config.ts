import { IApiUrlProps } from "../types/api";

export const getApiUrl = async ({ path, method }: IApiUrlProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}${path}`,
      {
        method,
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, data, statusCode: response.status };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    throw new Error(errorMessage);
  }
};
