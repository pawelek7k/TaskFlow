export const SignIn: React.FC = () => {
  return (
    <div>
      <form action="#">
        <h1>Sign in</h1>
        <span>or use your account</span>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
