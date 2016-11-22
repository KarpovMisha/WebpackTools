export default function fbLogin(parent) {
  FB.login((response) => {
    FB.api('/me/accounts',
      (account) => {
        parent.setState({ token: account.data[0].access_token });
        console.log(account);
      });
  }, { scope: 'publish_actions,publish_pages,manage_pages' });
}
