import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8 text-center">
          <div className="flex justify-center">
            <CheckCircle className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-blue-700 sm:text-5xl md:text-6xl">
            Welcome to ToDoze!
          </h1>
          <p className="mt-3 text-xl text-gray-700 sm:mt-4">
            Discover the easiest way to stay on top of your daily tasks and
            long-term goals. ToDoze is designed to help you organize,
            prioritize, and accomplish what matters most.
          </p>
          <div className="mt-8 space-y-4">
            <div>
              <Button
                className=" flex items-center mx-auto  bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
                width="w-fit"
              >
                <Link to="/register" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-2xl">
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

export default WelcomePage;
