import API from "@/api/client";

export const getPage = async (slug) => {
    try {
        const response = await API.get(`/v1/page/${slug}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}