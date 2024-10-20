export const SignUp: React.FC = () => {
  return (
    <div>
      <form action="#">
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
