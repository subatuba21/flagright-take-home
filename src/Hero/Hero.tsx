import { useState } from "react";
type UseCase = {
  name: string;
  icon: JSX.Element;
  pictureSrc: string;
};
const useCases: UseCase[] = [
  {
    name: "Case Management",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
        />
      </svg>
    ),
    pictureSrc: "/pic1.svg",
  },
  {
    name: "Rules",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    pictureSrc: "/pic3.svg",
  },
  {
    name: "Risk scoring",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
        />
      </svg>
    ),
    pictureSrc: "/pic2.svg",
  },
  {
    name: "Sanctions screening",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    pictureSrc: "/pic4.svg",
  },
];

export const Hero = () => {
  const [currentUseCase, setCurrentUseCase] = useState(0);

  const Feature = (props: { header: string; text: string }) => {
    return (
      <div className="text-left pb-5 flex">
        <div className="mr-2 relative top-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg lg:text-xl font-bold">{props.header}</h3>
          <p className="text-base lg:text-lg">{props.text}</p>
        </div>
      </div>
    );
  };

  const UseCaseButton = (props: { useCase: UseCase; index: number }) => {
    return (
      <div
        className={`inline-flex justify-center items-center rounded-full px-3 py-2 mr-2 cursor-pointer my-1 md:my-0 ${
          currentUseCase === props.index ? "bg-darkblue text-white" : ""
        }`}
        onClick={() => setCurrentUseCase(props.index)}
      >
        {props.useCase.icon}
        <span className="text-sm">{props.useCase.name}</span>
      </div>
    );
  };

  return (
    <div className="bg-grey-200">
      <h1 className="text-2xl lg:text-3xl text-center font-bold pt-10 pb-3 px-4 md:px-0">
        Made for compliance and fraud teams
      </h1>
      <h2 className="text-base lg:text-xl  mx-auto text-center pb-6 md:pb-4 px-4">
        Fast, collaborative, & customizable transaction monitoring
      </h2>
      <div className="block md:grid md:grid-cols-10 px-4 md:px-0">
        <div className="md:col-start-1 md:col-span-4 sm:p-10 md:p-8 lg:p-14 text-center">
          <Feature
            header="Efficient, intuitive, no-code"
            text="Console empowers operational teams to work and collaborate more effectively and faster"
          ></Feature>
          <Feature
            header="Endless capabilities, easily configurable"
            text="Console enables compliance and fraud teams to be independent and make faster, more reliable decisions."
          ></Feature>
          <Feature
            header="Get more done"
            text="Console users can get 200% increase in productivity with Flagright."
          ></Feature>
          <a
            href="https://google.com"
            className="ml-8 text-left block text-blue"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-blue-600 inline-block ml-1 relative bottom-px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
        <div className="md:col-start-5 md:col-span-6 text-left">
          <div className="md:ml-12 relative top-4 md:top-6 lg:top-7">
            {useCases.map((useCase, index) => {
              return (
                <UseCaseButton
                  useCase={useCase}
                  key={index}
                  index={index}
                ></UseCaseButton>
              );
            })}
          </div>
          <img src={useCases[currentUseCase].pictureSrc} alt="pic1"></img>
        </div>
      </div>
    </div>
  );
};
