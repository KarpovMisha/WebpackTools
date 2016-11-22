export default function fbAddPost(parent) {
  FB.api(
    '/me/photos?access_token=' + parent.state.token,
    'POST',
    {
      message: parent.state.value,
      url: parent.state.url
    },
    (response) => console.log(response.id)
  );
}
