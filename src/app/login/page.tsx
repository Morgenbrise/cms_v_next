import Login from "@/components/molecules/Login";
import SocialLogin from "@/components/molecules/SocialLogin";

const LoginPage = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-[350px] border border-solid rounded-lg shadow-xl">
        <div className="px-5 pt-5 pb-3">
          <Login />
        </div>

        <div className="w-full border-t-[1px] border-gray-300 border-solid mt-2">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
