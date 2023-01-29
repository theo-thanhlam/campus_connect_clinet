
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { Logout } from './login'


const Home: NextPage = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const user = useUser()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Campus Connect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600">
            YorkU Note Sharing App
          </a>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {!user && (
            <a
              href="/login"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Login &rarr;</h3>
              <p className="mt-4 text-xl">
                Go login now
              </p>
            </a>
          )}

          {user && (
            <Logout />
          )}

          <a
            href="/display"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Note &rarr;</h3>
            <p className="mt-4 text-xl">
              Find note for your class
            </p>
          </a>
        </div>
      </main>


    </div>
  )
}

export default Home
