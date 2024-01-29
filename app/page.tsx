import { AddTodo } from './components/shared/AddTodo';
import { Todo } from './components/shared/Todo';
import { getData } from './utils/prisma';

export default async function Home() {
  // Fetch data asynchronously
  let data;
  try {
    data = await getData();
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error, show an error message, or take appropriate action
  }

  return (
    <main className="grid mx-4 md:grid-cols-[repeat(auto-fit,_100%)] md:m-auto gap-8 my-10 md:w-1/2">
      {/* Main heading */}
      <h1 className="text-2xl sm:text-4xl tracking-wide sm:pb-8 text-center">
        ToDo Application
      </h1>

      <div className="grid gap-2">
        {/* AddTodo component for adding new todos */}
        <AddTodo />

        <div className="flex flex-col gap-4 items-center justify-center mt-8 px-2">
          {/* Check if data is available */}
          {data ? (
            // Map over the data to render Todo components
            data.map((todo) => (
              <div className="w-full" key={todo.id}>
                {/* Render Todo component for each todo */}
                <Todo todo={todo} />
              </div>
            ))
          ) : (
            // Display a loading message while waiting for data
            <p>Loading...</p>
          )}
        </div>
      </div>
    </main>
  );
}
