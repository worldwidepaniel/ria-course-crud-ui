export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', () => {
    if(useCookie("auth").value === undefined){
      return navigateTo("/")
    }
 })

 addRouteMiddleware("logged", () => {
  if(useCookie("auth").value !== undefined){
    return navigateTo("/notes")
  }
 })

})