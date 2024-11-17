export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-indigo-700">
          About ToDoze
        </h1>

        <section className="bg-white shadow-xl rounded-lg overflow-hidden mb-12">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-600">
              Simplify Your Life
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
              ToDoze is more than just a to-do list. It's your personal
              productivity companion, designed to help you achieve more, stress
              less, and live better.
            </p>
            <div className="flex items-center justify-center">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                ></path>
              </svg>
            </div>
          </div>
          <div className="bg-indigo-700 text-white p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Why Choose ToDoze?
            </h3>
            <ul className="space-y-4">
              {[
                "Intuitive task management",
                "Smart prioritization",
                "Seamless device sync",
                "Customizable workflows",
                "Insightful productivity analytics",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white shadow-xl rounded-lg overflow-hidden mb-12">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-600">
              How ToDoze Works
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Capture",
                  description:
                    "Quickly add tasks as they come to mind. Never let a good idea slip away.",
                },
                {
                  title: "Organize",
                  description:
                    "Categorize and prioritize your tasks with our intuitive drag-and-drop interface.",
                },
                {
                  title: "Focus",
                  description:
                    "Use our Pomodoro timer to work in focused sprints and boost your productivity.",
                },
                {
                  title: "Achieve",
                  description:
                    "Watch your progress unfold with beautiful, insightful charts and celebrate your wins!",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-white font-bold mr-3 sm:mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-600">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              Join thousands of satisfied users who have transformed their
              productivity with ToDoze. Start your journey to a more organized,
              less stressful life today!
            </p>
            <div className="flex justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                Get Started for Free
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
