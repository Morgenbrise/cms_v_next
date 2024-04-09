import Button from "@/components/atoms/Button";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { googleAuthenticate } from "@/lib/actions";
import Image from "next/image";
import { useFormState } from "react-dom";
// import googlImage from "/images/google_login.png";

const GoogleBtn = () => {
  const [errorMsgGoogle, dispatchGoogle] = useFormState(
    googleAuthenticate,
    undefined
  );

  return (
    <form className="flex flex-col" action={dispatchGoogle}>
      <Button
        type="submit"
        variant="outlined"
        component="label"
        tabIndex={-1}
        className="border-gray-300"
        startIcon={
          <Image
            src="/images/icon/google.png"
            alt="구글 로그인"
            width={18}
            height={18}
          />
        }
      >
        Sign In with Google
      </Button>
    </form>
  );
};

export default GoogleBtn;
