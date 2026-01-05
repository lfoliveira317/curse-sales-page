export const curriculumData = {
  courses: [
    {
      id: "course-react",
      title: "React Mastery: The Frontend Core",
      description: "Master modern React 19. Build scalable, interactive UIs with Hooks, Context, and Server Components.",
      thumbnail: "/images/react-icon.png",
      lessons: [
        {
          id: "react-1",
          title: "Components & JSX",
          description: "Understanding the building blocks of React.",
          content: "# Everything is a Component ⚛️\n\nLearn how to break down complex UIs into reusable pieces.\n\n## Key Concepts\n- JSX Syntax\n- Props vs State\n- Component Lifecycle\n\n```jsx\nfunction Welcome({ name }) {\n  return <h1>Hello, {name}</h1>;\n}\n```",
          duration: 45
        },
        {
          id: "react-2",
          title: "Hooks Revolution",
          description: "Manage state and side effects with elegance.",
          content: "# The Power of Hooks 🪝\n\nStop writing class components. Embrace the functional future.\n\n## Essential Hooks\n- `useState`: Local state management\n- `useEffect`: Side effects & lifecycle\n- `useContext`: Global state made simple\n\n```jsx\nconst [count, setCount] = useState(0);\n```",
          duration: 60
        },
        {
          id: "react-3",
          title: "Advanced Patterns",
          description: "Higher Order Components, Custom Hooks, and Performance.",
          content: "# Level Up 🚀\n\nOptimize your apps and write cleaner code.\n\n- Custom Hooks extraction\n- Memoization with `useMemo` & `useCallback`\n- Error Boundaries",
          duration: 75
        }
      ],
      quizzes: [
        {
          id: "quiz-react",
          title: "React Core Assessment",
          description: "Prove your frontend skills.",
          questions: [
            {
              id: "q1",
              question: "What hook is used for side effects?",
              options: ["useState", "useEffect", "useSideEffect", "useDo"],
              correctAnswer: 1,
              explanation: "useEffect is designed to handle side effects in functional components."
            },
            {
              id: "q2",
              question: "JSX stands for...",
              options: ["JavaScript XML", "Java Syntax Extension", "JSON Xylophone", "JavaScript Xtreme"],
              correctAnswer: 0,
              explanation: "JSX is a syntax extension for JavaScript that looks like XML."
            }
          ]
        }
      ]
    },
    {
      id: "course-python",
      title: "Python Power: Backend Logic",
      description: "From scripts to scalable APIs. Master Python 3.11, FastAPI, and data processing.",
      thumbnail: "/images/python-icon.png",
      lessons: [
        {
          id: "py-1",
          title: "Pythonic Thinking",
          description: "Write clean, efficient, and readable code.",
          content: "# The Zen of Python 🐍\n\nBeautiful is better than ugly. Explicit is better than implicit.\n\n## Topics\n- List Comprehensions\n- Decorators\n- Generators\n\n```python\nsquares = [x**2 for x in range(10)]\n```",
          duration: 50
        },
        {
          id: "py-2",
          title: "Building APIs with FastAPI",
          description: "Create high-performance web APIs quickly.",
          content: "# Modern APIs ⚡\n\nFastAPI is the fastest way to build Python web services.\n\n- Type Hints validation\n- Async/Await support\n- Automatic Swagger docs",
          duration: 65
        },
        {
          id: "py-3",
          title: "Data Structures & Algos",
          description: "Ace your technical interviews.",
          content: "# Core CS Concepts 🧠\n\n- Hash Maps & Sets\n- Trees & Graphs\n- Big O Notation",
          duration: 90
        }
      ],
      quizzes: [
        {
          id: "quiz-py",
          title: "Python Proficiency",
          description: "Test your backend knowledge.",
          questions: [
            {
              id: "q1",
              question: "Which keyword defines a function?",
              options: ["func", "def", "function", "lambda"],
              correctAnswer: 1,
              explanation: "In Python, 'def' is used to define a function."
            },
            {
              id: "q2",
              question: "What is a decorator?",
              options: ["A design pattern", "A function that modifies another function", "A CSS style", "A variable type"],
              correctAnswer: 1,
              explanation: "Decorators wrap functions to modify their behavior."
            }
          ]
        }
      ]
    },
    {
      id: "course-css",
      title: "CSS Architecture: Visual Mastery",
      description: "Stop fighting layout. Master Flexbox, Grid, Tailwind, and animations.",
      thumbnail: "/images/css-icon.png",
      lessons: [
        {
          id: "css-1",
          title: "Modern Layouts",
          description: "Flexbox and Grid systems explained.",
          content: "# Layout Gods 📐\n\nForget floats. Embrace the grid.\n\n## CSS Grid\nTwo-dimensional layout system for the web.\n\n## Flexbox\nOne-dimensional layout method for laying out items in rows or columns.",
          duration: 45
        },
        {
          id: "css-2",
          title: "Tailwind CSS Workflow",
          description: "Utility-first CSS for rapid development.",
          content: "# Utility First 💨\n\nBuild complex designs without leaving your HTML.\n\n- Responsive prefixes\n- Dark mode\n- Custom configuration",
          duration: 40
        },
        {
          id: "css-3",
          title: "Advanced Animations",
          description: "Bring your UI to life.",
          content: "# Motion Design 🎬\n\n- Keyframes\n- Transitions\n- 3D Transforms\n\n```css\n@keyframes float {\n  0% { transform: translateY(0px); }\n  50% { transform: translateY(-20px); }\n  100% { transform: translateY(0px); }\n}\n```",
          duration: 55
        }
      ],
      quizzes: [
        {
          id: "quiz-css",
          title: "CSS Expert Quiz",
          description: "Do you know your selectors?",
          questions: [
            {
              id: "q1",
              question: "Which property changes text color?",
              options: ["text-color", "font-color", "color", "foreground"],
              correctAnswer: 2,
              explanation: "The 'color' property sets the color of the text."
            },
            {
              id: "q2",
              question: "Flexbox is...",
              options: ["1-dimensional", "2-dimensional", "3-dimensional", "0-dimensional"],
              correctAnswer: 0,
              explanation: "Flexbox is designed for one-dimensional layout (row or column)."
            }
          ]
        }
      ]
    }
  ]
};
