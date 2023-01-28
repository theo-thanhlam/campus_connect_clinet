import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Display = () => {
    return (


        <div className="p-12 text-center bg-white-100 text-white-700">
            <h2 className="font-semibold text-4xl mb-4">Upload Your Notes</h2>
            <h4 className="font-semibold text-xl mb-6">Helping Students to Cheat since 2004</h4>
            <div>
                <div className="flex items-center justify-center w-80 ml-80">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer bg-sky-50 dark:hover:bg-sky-800 dark:bg-sky-700 hover:bg-sky-100 dark:border-white-600 dark:hover:border-white-500 dark:hover:bg-white-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-white-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-white-500 text-white-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-white-500 text-white-400">SVG, PNG, JPG or GIF</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
                {/*:D*/}
            </div>
        </div>



    )
}

export default Display