export default function Welcome() {

  const welcomeText = {
    admin: 'Hi admin',
    shopManager: 'Hi shop manager',
    customer: 'Welcome customer',
    guest: 'Welcome guest'
  }

  const user = {
    // admin, shopManager, customer, guest
    role: 'admin',
    name: 'George',
    isAuthenticated: true
  };

  const { isAuthenticated, role } = user;

  return (
    <>
      <h1>App</h1>
      <p className={isAuthenticated ? 'success' : 'error'}>
        {welcomeText[role]}
      </p>
      {!isAuthenticated && <button type="button" onClick={() => console.log('login')}>login</button>}
    </>
  );

};