import { SignInButton } from "@clerk/clerk-react"

function SignUpButton() {
  return (
    <>
    <SignInButton mode="modal"
        className=" z-10 inline-flex items-center justify-center px-6  py-2 text-lg font-bold text-white transition-all duration-200 bg-black border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 tooltip" data-tip="Sign Up"
        role="button ">
        Sign Up
    </SignInButton>
    </>
  )
}

export default SignUpButton
