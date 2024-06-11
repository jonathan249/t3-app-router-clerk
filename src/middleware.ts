import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

/** Add your protected routes inside of the array */
const isProtectedRoute = createRouteMatcher([]);

export default clerkMiddleware((auth, req) => {
  if (!auth().userId && isProtectedRoute(req)) {
    // Add custom logic to run before redirecting
    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
