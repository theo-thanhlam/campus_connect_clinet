import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'




export const Logout = ({session}: any)=>{
  const supabaseClient = useSupabaseClient()
  async function signOut(){
    await supabaseClient.auth.signOut()
  }

  return (
    <div>
      <div onClick={signOut} className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 cursor-pointer">
        <h3 className="text-2xl font-bold">Logout &rarr;</h3>
        <p className="mt-4 text-xl">
          Logout now
        </p>
      </div>
    </div>
  )
}

const Login = ({session}: any) => {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const router = useRouter()
  
  useEffect(() => {
    async function redirectUser() {
        const { from } = router.query
        if (from) {
          router.push(from as string)
        } else {
          router.push('/display')
        }
      }
      if (user) redirectUser()
  })

   if (!user)
    return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                    alt="Sample image"
                />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="text-center lg:text-left">
                    <button
                        onClick={signInWithGitHub}
                        type="button"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Login with GitHub
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>
    )

  
  async function signInWithGitHub() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'github',
    })
  } 

  return (
    <div></div>
  )
}

export default Login