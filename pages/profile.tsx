import { useSession } from "next-auth/react";
import { Interactive } from "react-interactive";
import {
  FaBullhorn,
  FaChild,
  FaDog,
  FaHouseUser,
  FaPlaceOfWorship,
  FaShare,
  FaTree,
} from "react-icons/fa";

import Loader from "@components/Loader";

const Page = () => {
  const { status } = useSession({
    required: false,
  });

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      <main className="w-full max-w-lg mx-auto px-4 | py-12 | space-y-12">
        <header>
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative w-24 shrink-0 aspect-square rounded-full | bg-neutral-200">
              <img
                className="absolute inset-0 | rounded-full | object-cover object-center | select-none"
                src="https://pbs.twimg.com/profile_images/1451192747877015561/0SBr3oBy_400x400.jpg"
                alt="Jesse McLean"
              />
              <div className="absolute inset-0 | rounded-full | ring-1 ring-inset ring-neutral-900 ring-opacity-5" />
              <div className="absolute bottom-0 right-0">
                <div className="flex justify-center items-center | w-8 h-6 | rounded-full | bg-white shadow | text-base text-center">
                  🌈
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <div>
                <h1 className="text-neutral-900 text-2xl font-extrabold tracking-tight">
                  Jesse McLean
                </h1>
                <div className="text-neutral-500 text-sm">@essejmclean</div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Interactive
                  className="inline-flex shrink-0 justify-center px-4 py-2 | border border-neutral-900 border-opacity-10 rounded-md | bg-white shadow-sm | text-sm leading-4 font-medium text-neutral-900 | transition | focus:outline-none"
                  hoverClassName="!bg-neutral-100"
                  focusFromKeyClassName="!ring"
                >
                  Follow
                </Interactive>
                <Interactive
                  className="inline-flex shrink-0 justify-center px-4 py-2 | border border-neutral-300 border-opacity-0 rounded-md | bg-neutral-100 shadow-none | text-sm leading-4 font-medium text-neutral-900 | transition | focus:outline-none"
                  hoverClassName="!bg-neutral-200"
                  focusFromKeyClassName="!ring"
                >
                  Share
                </Interactive>
              </div>
            </div>
          </div>

          <div className="pt-1.5">
            <div className="flex justify-end w-24">
              <svg
                className="fill-neutral-100"
                width="32"
                height="8"
                viewBox="0 0 32 8"
              >
                <path d="M14.2594 0.51096C15.2207 -0.17032 16.7793 -0.17032 17.7406 0.51096L24.1931 5.0839C26.0395 6.39251 28.544 8 31.1553 8H32H0H0.844668C3.45602 8 5.96044 6.39251 7.80695 5.0839L14.2594 0.51096Z" />
              </svg>
            </div>
            <div className="py-4 px-5 | rounded-3xl | bg-neutral-100">
              <p className="text-neutral-900 text-sm">
                Quos quo repellat non dolor. Corrupti et voluptatem. Eos iusto
                sit et molestiae aut earum aut ut. Facere consequatur laborum
                impedit voluptas ipsam sequi. Alias sint aut laudantium modi
                minus id.
              </p>
              <div className="flex flex-wrap items-center gap-2 | pt-2">
                <Interactive
                  className="inline-flex shrink-0 justify-start flex-1 px-3 py-2 | border border-neutral-300 border-opacity-0 rounded-md | bg-neutral-200 shadow-none | text-sm leading-4 font-normal text-neutral-500 | transition | focus:outline-none"
                  hoverClassName="!bg-neutral-300"
                  focusFromKeyClassName="!ring"
                >
                  Reply directly...
                </Interactive>
                <Interactive
                  className="inline-flex shrink-0 justify-center px-2 py-2 | border border-neutral-900 border-opacity-10 rounded-md | bg-transparent shadow-none | text-base leading-4 font-medium text-neutral-900 | transition | focus:outline-none"
                  hoverClassName="!bg-neutral-200 !border-opacity-0"
                  focusFromKeyClassName="!ring !border-opacity-0"
                >
                  🤗
                </Interactive>
                <Interactive
                  className="inline-flex shrink-0 justify-center px-2 py-2 | border border-neutral-900 border-opacity-10 rounded-md | bg-transparent shadow-none | text-base leading-4 font-medium text-neutral-900 | transition | focus:outline-none"
                  hoverClassName="!bg-neutral-200 !border-opacity-0"
                  focusFromKeyClassName="!ring !border-opacity-0"
                >
                  👍
                </Interactive>
                <Interactive
                  className="inline-flex shrink-0 justify-center px-2 py-2 | border border-neutral-900 border-opacity-10 rounded-md | bg-transparent shadow-none | text-base leading-4 font-medium text-neutral-900 | transition | focus:outline-none"
                  hoverClassName="!bg-neutral-200 !border-opacity-0"
                  focusFromKeyClassName="!ring !border-opacity-0"
                >
                  🙌
                </Interactive>
              </div>
            </div>
          </div>
        </header>

        <section>
          <h2 className="text-neutral-900 text-lg font-bold tracking-tight">
            About
          </h2>
          <p className="pt-2 | text-neutral-500 text-sm">
            Quos quo repellat non dolor. Corrupti et voluptatem. Eos iusto sit
            et molestiae aut earum aut ut. Facere consequatur laborum impedit
            voluptas ipsam sequi. Alias sint aut laudantium modi minus id.
          </p>

          <h3 className="text-neutral-500 text-xs font-semibold tracking-wide uppercase | pt-8">
            Causes
          </h3>
          <ul className="flex flex-wrap gap-1.5 | pt-3">
            <li>
              <Interactive
                className="inline-flex shrink-0 justify-center items-center pl-3 pr-4 py-2.5 | gap-1.5 | border border-neutral-900 border-opacity-10 rounded-full | bg-transparent shadow-none | text-neutral-900 | transition | focus:outline-none"
                hoverClassName="!bg-green-100 !border-opacity-0 !text-green-700"
                focusFromKeyClassName="!ring !border-opacity-0"
              >
                <FaTree className="text-base text-green-500" />
                <span className="text-sm font-medium leading-4 text-inherit | transition">
                  Environment
                </span>
              </Interactive>
            </li>
            <li>
              <Interactive
                className="inline-flex shrink-0 justify-center items-center pl-3 pr-4 py-2.5 | gap-1.5 | border border-neutral-900 border-opacity-10 rounded-full | bg-transparent shadow-none | text-neutral-900 | transition | focus:outline-none"
                hoverClassName="!bg-red-100 !border-opacity-0 !text-red-700"
                focusFromKeyClassName="!ring !border-opacity-0"
              >
                <FaChild className="text-base text-red-500" />
                <span className="text-sm font-medium leading-4 text-inherit | transition">
                  Child Health
                </span>
              </Interactive>
            </li>
            <li>
              <Interactive
                className="inline-flex shrink-0 justify-center items-center pl-3 pr-4 py-2.5 | gap-1.5 | border border-neutral-900 border-opacity-10 rounded-full | bg-transparent shadow-none | text-neutral-900 | transition | focus:outline-none"
                hoverClassName="!bg-cyan-100 !border-opacity-0 !text-cyan-700"
                focusFromKeyClassName="!ring !border-opacity-0"
              >
                <FaDog className="text-cyan-500 text-base" />
                <span className="text-sm font-medium leading-4 text-inherit | transition">
                  Animal Welfare
                </span>
              </Interactive>
            </li>
            <li>
              <Interactive
                className="inline-flex shrink-0 justify-center items-center pl-3 pr-4 py-2.5 | gap-1.5 | border border-neutral-900 border-opacity-10 rounded-full | bg-transparent shadow-none | text-neutral-900 | transition | focus:outline-none"
                hoverClassName="!bg-yellow-100 !border-opacity-0 !text-yellow-700"
                focusFromKeyClassName="!ring !border-opacity-0"
              >
                <FaBullhorn className="text-base text-yellow-500" />
                <span className="text-sm font-medium leading-4 text-inherit | transition">
                  Social Justice
                </span>
              </Interactive>
            </li>
            <li>
              <Interactive
                className="inline-flex shrink-0 justify-center items-center pl-3 pr-4 py-2.5 | gap-1.5 | border border-neutral-900 border-opacity-10 rounded-full | bg-transparent shadow-none | text-neutral-900 | transition | focus:outline-none"
                hoverClassName="!bg-purple-100 !border-opacity-0 !text-purple-700"
                focusFromKeyClassName="!ring !border-opacity-0"
              >
                <FaPlaceOfWorship className="text-base text-purple-500" />
                <span className="text-sm font-medium leading-4 text-inherit | transition">
                  Religion
                </span>
              </Interactive>
            </li>
            <li>
              <Interactive
                className="inline-flex shrink-0 justify-center items-center px-3.5 py-2.5 | gap-1.5 | border border-neutral-900 border-opacity-10 rounded-full | bg-transparent shadow-none | text-neutral-900 | transition | focus:outline-none"
                hoverClassName="!bg-neutral-100 !border-opacity-0 !text-neutral-700"
                focusFromKeyClassName="!ring !border-opacity-0"
              >
                <span className="text-sm font-medium leading-4 text-inherit | transition">
                  +3
                </span>
              </Interactive>
            </li>
          </ul>

          <h3 className="text-neutral-500 text-xs font-semibold tracking-wide uppercase | pt-8">
            Teams
          </h3>
          <ul className="pt-3 | -mx-3 -my-2">
            <li>
              <Interactive
                className="w-full py-2 px-3 | rounded-xl bg-transparent | text-left | transition | focus:outline-none"
                hoverClassName="!bg-neutral-100"
                focusFromKeyClassName="!ring"
              >
                <div className="flex flex-wrap items-start gap-3">
                  <div className="relative w-10 shrink-0 aspect-square rounded-full | bg-neutral-200">
                    <img
                      className="absolute inset-0 | rounded-full | object-cover object-center | select-none"
                      src="https://pbs.twimg.com/profile_images/1257404318782636033/VW-X1ssE_400x400.jpg"
                      alt="Jesse McLean"
                    />
                    <div className="absolute inset-0 | rounded-full | ring-1 ring-inset ring-neutral-900 ring-opacity-5" />
                  </div>
                  <div className="flex-1 | space-y-1.5">
                    <div className="py-0.5">
                      <h4 className="text-sm">
                        <span className="text-neutral-900 font-medium">
                          Built by Field
                        </span>
                        <span className="text-neutral-500"> @builtbyfield</span>
                      </h4>
                      <span className="block | text-neutral-500 text-xs">
                        We design, build, and scale digital products
                      </span>
                    </div>
                    <ul className="flex gap-1">
                      <li className="relative w-5 shrink-0 aspect-square rounded-full | bg-neutral-200">
                        <img
                          className="absolute inset-0 | rounded-full | object-cover object-center | select-none"
                          src="https://pbs.twimg.com/profile_images/1436131302965592072/S-Iy0vvQ_400x400.jpg"
                          alt="Jesse McLean"
                        />
                        <div className="absolute inset-0 | rounded-full | ring-1 ring-inset ring-neutral-900 ring-opacity-5" />
                      </li>
                      <li className="relative w-5 shrink-0 aspect-square rounded-full | bg-neutral-200">
                        <img
                          className="absolute inset-0 | rounded-full | object-cover object-center | select-none"
                          src="https://pbs.twimg.com/profile_images/1375227066832932868/vCOl5ISN_400x400.jpg"
                          alt="Jesse McLean"
                        />
                        <div className="absolute inset-0 | rounded-full | ring-1 ring-inset ring-neutral-900 ring-opacity-5" />
                      </li>
                      <li className="relative w-5 shrink-0 aspect-square rounded-full | bg-neutral-200">
                        <img
                          className="absolute inset-0 | rounded-full | object-cover object-center | select-none"
                          src="https://pbs.twimg.com/profile_images/1237656929029091328/kcNKNjPV_400x400.jpg"
                          alt="Jesse McLean"
                        />
                        <div className="absolute inset-0 | rounded-full | ring-1 ring-inset ring-neutral-900 ring-opacity-5" />
                      </li>
                      <li className="h-5 px-1.5 flex justify-center items-center shrink-0 rounded-full | ring-1 ring-inset ring-neutral-900 ring-opacity-10 | bg-transparent | text-xs text-neutral-500 text-center">
                        +5
                      </li>
                    </ul>
                  </div>
                </div>
              </Interactive>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-neutral-900 text-lg font-bold tracking-tight">
            Trophy Case
          </h2>
          <ul className="pt-4 | grid grid-cols-4 gap-2 | -mt-3 -mb-2 -mx-3">
            <li>
              <Interactive
                className="w-full pt-3 pb-2 px-3 | rounded-xl bg-transparent | text-left | transition | focus:outline-none"
                hoverClassName="!bg-neutral-100"
                focusFromKeyClassName="!ring"
              >
                <svg
                  className="drop-shadow"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                >
                  <path
                    className="fill-emerald-400"
                    d="M61.5173 37.994L37.994 61.5173C34.6836 64.8276 29.3164 64.8276 26.006 61.5173L2.48272 37.994C-0.827573 34.6836 -0.827573 29.3164 2.48272 26.006L26.006 2.48272C29.3164 -0.827573 34.6836 -0.827573 37.994 2.48272L61.5173 26.006C64.8276 29.3164 64.8276 34.6836 61.5173 37.994Z"
                  />
                  <path
                    className="fill-emerald-800"
                    d="M28.8748 14.3903C30.6008 12.6644 33.3992 12.6644 35.1252 14.3903L42.2571 21.5224L35.5477 21.2766L35.4908 22.8764L45.0899 23.2261L44.7414 13.626L43.1414 13.6828L43.3863 20.3894L36.2563 13.2592L35.6907 13.8248L36.2563 13.2592C33.9056 10.9086 30.0944 10.9086 27.7437 13.2592L28.8748 14.3903ZM14.3902 28.8748L20.3683 22.8967L20.1224 29.6065L21.7223 29.6634L22.0719 20.0643L12.4718 20.4129L12.5285 22.0128L19.2347 21.7681L13.2591 27.7437L13.259 27.7438C10.9084 30.0945 10.9084 33.9057 13.259 36.2564L14.3902 35.1253C12.6642 33.3993 12.6642 30.6009 14.3901 28.8748L14.3902 28.8748ZM20.6586 43.6556L20.9035 50.3617L19.3035 50.4187L18.9549 40.8184L28.5541 41.1682L28.4972 42.7681L21.7874 42.5222L28.8748 49.6097C30.6008 51.3356 33.3994 51.3356 35.1253 49.6097L36.2564 50.7408C33.9057 53.0914 30.0944 53.0914 27.7437 50.7408L20.6586 43.6556ZM49.6098 35.1252C51.3359 33.3992 51.3359 30.6009 49.6098 28.8748L50.7409 27.7437C53.0917 30.0945 53.0917 33.9056 50.7409 36.2563L44.0329 42.9643L50.7391 42.7195L50.796 44.3195L41.1957 44.668L41.5453 35.0689L43.1454 35.1258L42.8996 41.8355L49.6098 35.1252Z"
                  />
                </svg>
                <div className="pt-2">
                  <h3 className="block | text-sm text-neutral-900 font-medium">
                    Badge name
                  </h3>
                  <span className="block | text-xs text-neutral-500">
                    Challenge
                  </span>
                </div>
              </Interactive>
            </li>
            <li>
              <Interactive
                className="w-full pt-3 pb-2 px-3 | rounded-xl bg-transparent | text-left | transition | focus:outline-none"
                hoverClassName="!bg-neutral-100"
                focusFromKeyClassName="!ring"
              >
                <svg
                  className="drop-shadow"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                >
                  <path
                    className="fill-purple-400"
                    d="M25.207 7.92195L1.06263 49.7415C-1.95656 54.9707 1.81735 61.5072 7.8553 61.5072L56.1447 61.5072C62.1826 61.5072 65.9566 54.9707 62.9374 49.7415L38.793 7.92195C35.7738 2.69268 28.2262 2.69268 25.207 7.92195Z"
                  />
                  <path
                    className="fill-purple-800"
                    d="M7.32178 51.5663L29.0239 11.4543L30.6975 12.3597L8.99535 52.4718L7.32178 51.5663ZM34.976 11.4543L56.6781 51.5663L55.0046 52.4718L33.3025 12.3597L34.976 11.4543ZM32 28.103C29.954 28.103 28.2954 29.7614 28.2954 31.8074C28.2954 33.8533 29.954 35.5118 32 35.5118C34.0459 35.5118 35.7045 33.8533 35.7045 31.8074C35.7045 29.7614 34.0459 28.103 32 28.103ZM26.3926 31.8074C26.3926 28.7104 28.9033 26.2002 32 26.2002C35.0967 26.2002 37.6073 28.7104 37.6073 31.8074C37.6073 34.9043 35.0967 37.4146 32 37.4146C28.9033 37.4146 26.3926 34.9043 26.3926 31.8074ZM31.8414 40.9387C28.2996 40.9387 25.3979 43.8405 25.3979 47.3822L25.3979 50.2293L38.2849 50.0861L38.2849 47.3822C38.2849 43.8405 35.3832 40.9387 31.8414 40.9387ZM23.4951 47.3822C23.4951 42.7896 27.2488 39.0359 31.8414 39.0359C36.4341 39.0359 40.1877 42.7896 40.1877 47.3822L40.1877 51.9679L23.4951 52.1534L23.4951 47.3822ZM10.2978 54.6575L53.7021 54.6575L53.7021 56.5603L10.2978 56.5603L10.2978 54.6575Z"
                  />
                </svg>
                <div className="pt-2">
                  <h3 className="block | text-sm text-neutral-900 font-medium">
                    Badge name
                  </h3>
                  <span className="block | text-xs text-neutral-500">
                    Challenge
                  </span>
                </div>
              </Interactive>
            </li>
            <li>
              <Interactive
                className="w-full pt-3 pb-2 px-3 | rounded-xl bg-transparent | text-left | transition | focus:outline-none"
                hoverClassName="!bg-neutral-100"
                focusFromKeyClassName="!ring"
              >
                <svg
                  className="drop-shadow"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                >
                  <path
                    className="fill-pink-400"
                    d="M64 32C64 49.6732 49.6732 64 32 64C14.3268 64 1.22225e-08 49.6732 7.87386e-09 32C3.52523e-09 14.3268 14.3268 -3.52523e-09 32 -7.87386e-09C49.6732 -1.22225e-08 64 14.3268 64 32Z"
                  />
                  <path
                    className="fill-pink-800"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 7.42384C18.4271 7.42384 7.42406 18.427 7.42406 32C7.42406 45.573 18.4271 56.5762 32 56.5762C45.573 56.5762 56.576 45.573 56.576 32C56.576 18.427 45.573 7.42384 32 7.42384ZM5.24219 32C5.24219 17.222 17.222 5.24197 32 5.24197C46.7781 5.24197 58.7579 17.222 58.7579 32C58.7579 46.778 46.7781 58.758 32 58.758C17.222 58.758 5.24219 46.778 5.24219 32ZM33.2439 41.4867L36.8213 42.3282C38.8921 42.8152 40.8758 41.2441 40.8758 39.1168L40.8758 23.3545C40.8758 21.2271 38.8922 19.6559 36.8213 20.143L18.3225 24.4944C16.832 24.845 15.7787 26.175 15.7787 27.7059L15.7787 34.7652C15.7787 36.2963 16.832 37.6262 18.3224 37.9768L23.6963 39.2408L23.6963 42.4628C23.6963 45.091 25.842 47.2367 28.4702 47.2367C31.0983 47.2367 33.2439 45.091 33.2439 42.4628L33.2439 41.4867ZM25.8782 39.7541L31.0621 40.9734L31.0621 42.4628C31.0621 43.886 29.8932 45.0549 28.4702 45.0549C27.047 45.0549 25.8782 43.886 25.8782 42.4628L25.8782 39.7541ZM49.0099 25.8252L43.6777 26.9916L43.2114 24.8602L48.5437 23.6937L49.0099 25.8252ZM43.8385 29.6675L49.6861 29.6675L49.6861 31.8493L43.8385 31.8493L43.8385 29.6675ZM43.6777 34.6321L49.0099 35.7986L48.5437 37.93L43.2114 36.7636L43.6777 34.6321ZM38.6939 23.3545C38.6939 22.634 38.0222 22.1019 37.3208 22.2669L18.822 26.6183C18.3174 26.737 17.9606 27.1874 17.9606 27.7059L17.9606 34.7652C17.9606 35.2839 18.3173 35.7342 18.822 35.8528L37.3208 40.2043C38.0222 40.3692 38.6939 39.8371 38.6939 39.1168L38.6939 23.3545Z"
                  />
                </svg>
                <div className="pt-2">
                  <h3 className="block | text-sm text-neutral-900 font-medium">
                    Badge name
                  </h3>
                  <span className="block | text-xs text-neutral-500">
                    Challenge
                  </span>
                </div>
              </Interactive>
            </li>
            <li>
              <Interactive
                className="w-full pt-3 pb-2 px-3 | rounded-xl bg-transparent | text-left | transition | focus:outline-none"
                hoverClassName="!bg-neutral-100"
                focusFromKeyClassName="!ring"
              >
                <svg
                  className="drop-shadow"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                >
                  <path
                    className="fill-orange-400"
                    d="M35.4786 64L28.0708 64C15.3292 64 5 53.6707 5 40.9294L5 23.0706C5 10.3293 15.3293 3.58467e-07 28.0708 8.00651e-07L35.4786 1.05773e-06C48.2201 1.49991e-06 58.5494 10.3293 58.5494 23.0706L58.5494 40.9294C58.5494 53.6708 48.2201 64 35.4786 64Z"
                  />
                  <path
                    className="fill-orange-800"
                    d="M29.7886 11.3041C21.9268 11.3041 15.5537 17.6773 15.5537 25.5391L15.5537 38.4609C15.5537 46.3227 21.9268 52.6959 29.7886 52.6959L33.761 52.6959C41.6228 52.6959 47.9958 46.3227 47.9958 38.4609L47.9958 25.5391C47.9958 17.6773 41.6228 11.3041 33.761 11.3041L29.7886 11.3041ZM13.5537 25.5391C13.5537 16.5728 20.8222 9.30409 29.7886 9.30409L33.761 9.30409C42.7274 9.30409 49.9958 16.5728 49.9958 25.5391L49.9958 38.4609C49.9958 47.4272 42.7274 54.6959 33.761 54.6959L29.7886 54.6959C20.8222 54.6959 13.5537 47.4272 13.5537 38.4609L13.5537 25.5391ZM31.2423 22.1791L28.191 22.1791C25.3584 22.1791 23.0619 24.4753 23.0619 27.3084L23.0619 27.6199C23.0619 30.4525 25.3584 32.749 28.191 32.749L35.6702 32.749C37.3982 32.749 38.7991 34.15 38.7991 35.8781C38.7991 37.6063 37.3982 39.0072 35.6702 39.0072L23.7504 39.0072L23.7504 41.0072L31.2423 41.0072L31.2423 46.3905L33.2423 46.3905L33.2423 41.0072L35.6702 41.0072C38.5029 41.0072 40.7991 38.7107 40.7991 35.8781C40.7991 33.0456 38.5029 30.749 35.6702 30.749L28.191 30.749C26.4629 30.749 25.0619 29.348 25.0619 27.6199L25.0619 27.3084C25.0619 25.5799 26.4629 24.1791 28.191 24.1791L39.2851 24.1791L39.2851 22.1791L33.2423 22.1791L33.2423 17.6095L31.2423 17.6095L31.2423 22.1791Z"
                  />
                </svg>
                <div className="pt-2">
                  <h3 className="block | text-sm text-neutral-900 font-medium">
                    Badge name
                  </h3>
                  <span className="block | text-xs text-neutral-500">
                    Challenge
                  </span>
                </div>
              </Interactive>
            </li>
          </ul>
          <div className="pt-4">
            <Interactive
              className="inline-flex shrink-0 justify-center w-full px-4 py-2 | border border-neutral-300 border-opacity-0 rounded-md | bg-neutral-100 shadow-none | text-sm leading-4 font-medium text-neutral-900 | transition | focus:outline-none"
              hoverClassName="!bg-neutral-200"
              focusFromKeyClassName="!ring"
            >
              View more
            </Interactive>
          </div>
        </section>

        <section>
          <h2 className="text-neutral-900 text-lg font-bold tracking-tight">
            Activity
          </h2>
          <ol className="pt-4 pl-1">
            <li className="group | flex gap-5 sm:gap-8">
              <div className="w-px | flex flex-col items-center">
                <div className="w-6 h-6 shrink-0 | flex justify-center items-center">
                  <FaShare className="text-neutral-400 shrink-0 text-base" />
                </div>
                <div className="group-last:hidden | w-px flex-1 | bg-neutral-900 bg-opacity-10" />
              </div>
              <div className="pb-8 group-last:pb-0 | space-y-3">
                <div>
                  <h3 className="text-neutral-900 text-sm font-medium leading-6">
                    Post type
                  </h3>
                  <span className="block | text-neutral-500 text-xs">
                    <time>November 25, 2021</time>
                  </span>
                </div>
                <div className="px-4 py-3 | border-neutral-900 border-opacity-10 border rounded-xl">
                  <p className="text-neutral-900 text-sm">
                    Quos quo repellat non dolor. Corrupti et voluptatem. Eos
                    iusto sit et molestiae aut earum aut ut. Facere consequatur
                    laborum impedit voluptas ipsam sequi. Alias sint aut
                    laudantium modi minus id.
                  </p>
                </div>
              </div>
            </li>
            <li className="group | flex gap-5 sm:gap-8">
              <div className="w-px | flex flex-col items-center">
                <div className="w-6 h-6 shrink-0 | flex justify-center items-center">
                  <FaShare className="text-neutral-400 shrink-0 text-base" />
                </div>
                <div className="group-last:hidden | w-px flex-1 | bg-neutral-900 bg-opacity-10" />
              </div>
              <div className="pb-8 group-last:pb-0 | space-y-3">
                <div>
                  <h3 className="text-neutral-900 text-sm font-medium leading-6">
                    Post type
                  </h3>
                  <span className="block | text-neutral-500 text-xs">
                    <time>October 29, 2021</time>
                  </span>
                </div>
                <div className="px-4 py-3 | border-neutral-900 border-opacity-10 border rounded-xl">
                  <p className="text-neutral-900 text-sm">
                    Quos quo repellat non dolor. Corrupti et voluptatem. Eos
                    iusto sit et molestiae aut earum aut ut. Facere consequatur
                    laborum impedit voluptas ipsam sequi. Alias sint aut
                    laudantium modi minus id.
                  </p>
                </div>
              </div>
            </li>
            <li className="group | flex gap-5 sm:gap-8">
              <div className="w-px | flex flex-col items-center">
                <div className="w-6 h-6 shrink-0 | flex justify-center items-center">
                  <FaHouseUser className="text-neutral-400 shrink-0 text-base" />
                </div>
                <div className="group-last:hidden | w-px flex-1 | bg-neutral-900 bg-opacity-10" />
              </div>
              <div className="pb-8 group-last:pb-0 | space-y-3">
                <div>
                  <h3 className="text-neutral-900 text-sm font-medium leading-6">
                    Joined Tillen
                  </h3>
                  <span className="block | text-neutral-500 text-xs">
                    <time>October 12, 2021</time>
                  </span>
                </div>
              </div>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default Page;
