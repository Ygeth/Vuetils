export default function({ store, redirect }) {
  let login = store.state.auth.login;
  if (!login) {
    return redirect("/");
  }
}
