export function routeRedirect(router, userInfo, direction = "/") {
  if (userInfo) router.push(direction);
}
