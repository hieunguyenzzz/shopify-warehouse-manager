import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const data = {
  variables: {
    identity: "thethi.thichthat@gmail.com",
    secret: "123456789",
  },
  query: `mutation ($identity: String!, $secret: String!) {
    authenticate: authenticateUserWithPassword(email: $identity, password: $secret) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          __typename
        }
        __typename
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
        __typename
      }
      __typename
    }
  }`,
};
export default function Login() {
  async function login(formData: FormData) {
    "use server";
    const rawFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log({ rawFormData });
    let res = await fetch(
      process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        let _cookies = response.headers.get("set-cookie");
        let [key, value] = _cookies?.split(";")[0].split("=") || [];
        if (key && value) {
          cookies().set(key, value)
        }
        return response.json();
      })
      .catch(console.error);
    console.log({ res });
    if (res?.data?.authenticate) {
      return redirect("/transfers");
    }
    return res;
  }
  return (
    <main>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 p-6">
        <img
          src="https://play.tailwindcss.com/img/beams.jpg"
          alt="bg"
          className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
          width={1308}
        />
        <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative backdrop-blur-3xl w-full px-6 pt-10 pb-8 shadow ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md w-full p-6">
            <h1 className="text-3xl font-bold font-serif">Login</h1>
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <form action={login} className="w-full ">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-lg focus:opacity-20 focus:animate-pulse text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full"
                  >
                    <span>Sign in to account</span>
                  </button>
                  <input type="hidden" name="remember" defaultValue="true" />
                </form>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p className="text-gray-900">Forget Password?</p>
                <p>
                  <a href="/reset" className="text-sky-500 hover:text-sky-600">
                    Reset password →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
