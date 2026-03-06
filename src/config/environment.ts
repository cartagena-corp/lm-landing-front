export const environment = {
    apiUrl: import.meta.env.PUBLIC_API_URL || 'http://localhost:8080/api',
    endpoints: {
        availability: '/availability',
        sessions: '/sessions'
    }
};
