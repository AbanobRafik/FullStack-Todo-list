import { CheckCircle } from "lucide-react";

export default function WelcomePage() {
  const storageKey = "logedinUser";
  const userDataString =
    typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
  const userData = userDataString ? JSON.parse(userDataString) : null;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8 text-center">
          <div className="flex justify-center">
            <CheckCircle
              className="h-12 w-12 text-blue-600"
              aria-hidden="true"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-700">
            Welcome {userData?.user?.username || "User"}👋
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-700 sm:mt-4">
            Discover the easiest way to stay on top of your daily tasks and
            long-term goals. ToDoze is designed to help you organize,
            prioritize, and accomplish what matters most.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
          {[
            {
              icon: "✨",
              title: "Simple Task Management",
              description: "Create, edit, and check off tasks effortlessly.",
            },
            {
              icon: "🔔",
              title: "Custom Reminders",
              description: "Never miss a deadline with custom notifications.",
            },
            {
              icon: "📈",
              title: "Progress Tracking",
              description: "See your achievements and stay motivated.",
            },
            {
              icon: "🎯",
              title: "Goal Setting",
              description: "Set and track milestones for bigger projects.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-2xl"
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <h2 className="mt-4 text-lg font-medium text-gray-900">
                {feature.title}
              </h2>
              <p className="mt-2 text-base text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>
      <footer className="mt-auto py-6 flex justify-center">
        <p className="text-sm text-gray-500">
          © 2024 ToDoze. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
