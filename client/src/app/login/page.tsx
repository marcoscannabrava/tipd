export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-6">
        <a className="text-2xl font-bold text-gray-800" href="/">
          Tipd
        </a>
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold text-center mb-8">Log In</h1>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700"
            />

            <button className="w-full py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
              Log in
            </button>
          </div>

          <div className="text-center mt-6">
            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
              Forgot password?
            </a>
          </div>

          <div className="text-center mt-6 mb-6">
            <span className="text-gray-500 text-sm">or log in with</span>
          </div>

          <div className="space-y-3">
            <button className="w-full py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer flex justify-center">
              <div className="flex w-20 mx-auto items-center gap-1">
                <img src="./x.svg" className="w-5 h-5" />
                <span className="text-gray-700 font-medium">X</span>
              </div>
            </button>

            <button className="w-full py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer flex justify-center">
              <div className="flex w-20 mx-auto items-center gap-1">
                <img src="./google.svg" className="w-5 h-5" />
                <span className="text-gray-700 font-medium">Google</span>
              </div>
            </button>

            <button className="w-full py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer flex justify-center">
              <div className="flex w-20 mx-auto items-center gap-1">
                <img src="./facebook.svg" className="w-5 h-5" />
                <span className="text-gray-700 font-medium">Facebook</span>
              </div>
            </button>

            <button className="w-full py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer flex justify-center">
              <div className="flex w-20 mx-auto items-center gap-1">
                <img src="./twitch.svg" className="w-5 h-5" />
                <span className="text-gray-700 font-medium">Twitch</span>
              </div>
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              New to Tipd?{" "}
              <a
                href="#"
                className="text-gray-800 font-semibold hover:underline pl-2"
              >
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>

      <footer className="py-6 px-6 flex justify-between items-center text-sm text-gray-500">
        <div>© Tipd Labs</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-700">
            Cookie settings
          </a>
          <a href="#" className="hover:text-gray-700">
            Terms
          </a>
          <a href="#" className="hover:text-gray-700">
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
