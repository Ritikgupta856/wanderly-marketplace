export { default as proxy } from 'next-auth/middleware';

export const config = {
  matcher: ['/trips', '/favorites', '/properties'],
};
